import gql from "graphql-tag";
import { GET_CART_ITEMS } from "./queries";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
    userType: String!
  }

  extend type Tour {
    isInCart: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromCart(tourId: ID!, startDate: String!, quantity: Int!): [Tour]
  }
`;

export const resolvers = {
  Tour: {
    isInCart: (tour, _, { cache }) => {
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
      const returnValue = cartItems.find(tours => tours.tourId === tour.tourId);
      return returnValue !== undefined ? true : false;
    }
  },
  Mutation: {
    addOrRemoveFromCart: (_, { tourId, startDate, quantity }, { cache }) => {
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
      const returnValue = cartItems.find(tours => tours.tourId === tourId);
      const data = {
        cartItems:
          returnValue !== undefined
            ? cartItems.filter(i => i.tourId !== tourId)
            : [...cartItems, { tourId, startDate, quantity }]
      };
      cache.writeQuery({ query: GET_CART_ITEMS, data });
      return data.cartItems;
    }
  }
};

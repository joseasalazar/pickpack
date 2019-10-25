import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const USER_TYPE = gql`
  query userType {
    userType @client
  }
`;

export const GET_TOURS = gql`
  query tours {
    tours {
      name
      type
      price
      tourId
      photo
    }
  }
`;

export const GET_TOUR_BY_NAME = gql`
query getTourByName($name: String!) {
  getTourByName(name: $name) {
    name
    price
    photo
    type
    tourId
  }
}
`;

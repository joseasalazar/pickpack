import gql from "graphql-tag";

export const SIGNUP_USER = gql`
  mutation signup($name: String!, $lastName: String!, $email: String!, $password: String!, $birthDate: String!, $gender: String!, $city: String!, $country: String!, $type: String!) {
    signup(name: $name, lastName: $lastName, email: $email, password: $password, birthDate: $birthDate, gender: $gender, city: $city, country: $country, type: $type) {
      token
      user {
        name
        lastName
        email
        userId
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        userId
        type
      }
    }
  }
`;

export const S3_SIGN = gql`
  mutation uploadToS3($filename: String!, $filetype: String!) {
    uploadToS3(filename: $filename, filetype: $filetype) {
      url
      signedRequest
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation registerImage($url: String!) {
    registerImage(url: $url) {
      url
      tourPhotoId
    }
  }
`;

export const TOGGLE_CART = gql`
  mutation addOrRemoveFromCart(
    $tour: Tour!
    $quantity: Int!
    $startDate: String!
  ) {
    addOrRemoveFromCart(
      tour: $tour
      quantity: $quantity
      startDate: $startDate
    ) @client
  }
`;

export const POST_TOUR_TO_DB = gql`
  mutation registerTour(
    $name: String!
    $price: Int!
    $startDate: String!
    $endDate: String!
    $type: String!
  ) {
    registerTour(
      name: $name
      price: $price
      startDate: $startDate
      endDate: $endDate
      type: $type
    ) {
      name
      price
    }
  }
`;

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

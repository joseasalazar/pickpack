import gql from "graphql-tag";

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

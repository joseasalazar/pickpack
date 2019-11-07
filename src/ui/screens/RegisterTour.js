import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { ImageForm } from "../components/ImageForm";
import { S3_SIGN, UPLOAD_IMAGE, POST_TOUR_TO_DB } from "../../api/mutations";

export default function RegisterTour() {
  const [
    uploadToS3,
    { loading: uploadLoading, error: uploadError }
  ] = useMutation(S3_SIGN);
  const [
    registerImage,
    { loading: registerLoading, error: registerError }
  ] = useMutation(UPLOAD_IMAGE);
  const [
    registerTour,
    { loading: tourLoading, error: tourError }
  ] = useMutation(POST_TOUR_TO_DB);

  if (uploadLoading) {
    console.log("...loading upload");
    return <p>loading...</p>;
  }
  if (uploadError) {
    console.log(uploadError);
    return <p>An error occurred</p>;
  }

  if (registerLoading) {
    console.log("...loading register");
    return <p>loading...</p>;
  }
  if (registerError) {
    console.log(registerError);
    return <p>An error occurred</p>;
  }

  if (tourLoading) {
    console.log("...loading tour");
    return <p>loading...</p>;
  }
  if (tourError) {
    console.log(tourError);
    return <p>An error occurred</p>;
  }

  return <ImageForm uploadToS3={uploadToS3} registerImage={registerImage} />;
}

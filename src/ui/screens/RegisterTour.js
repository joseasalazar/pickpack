import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { ImageForm } from "../components/ImageForm";
import { S3_SIGN, UPLOAD_IMAGE, POST_TOUR_TO_DB } from "../../api/mutations";
import RegisterTourForm from "./RegisterTourForm";
import Swal from "sweetalert2";

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

  if (uploadLoading || registerLoading || tourLoading) {
    Swal.fire({
      position: "center",
      type: "success",
      title: "Cargando...",
      showConfirmButton: false,
      timer: 1500
    });
    return null;
  }
  if (uploadError || registerError || tourError) {
    if (uploadError) return <p>{uploadError.message}</p>;
    if (registerError) return <p>{registerError.message}</p>;
    if (tourError) return <p>{tourError.message}</p>;
  }

  return (
    <RegisterTourForm
      uploadToS3={uploadToS3}
      registerImage={registerImage}
      registerTour={registerTour}
    />
  );
}

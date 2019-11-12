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
  ] = useMutation(POST_TOUR_TO_DB, {
    onCompleted({ registerTour }) {
      Swal.close();
      Swal.fire({
        position: "center",
        type: "success",
        title: "Tour Registrado!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  });

  if (uploadLoading || registerLoading || tourLoading) {
    Swal.fire({
      title: "Registrando tour...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    return null;
  }
  if (uploadError || registerError || tourError) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: uploadError
        ? uploadError.message
        : registerError
        ? registerError.message
        : tourError.message,
      footer: "<p>Intente más tarde</p>"
    });
    return <RegisterTourForm />;
  }

  return (
    <RegisterTourForm
      uploadToS3={uploadToS3}
      registerImage={registerImage}
      registerTour={registerTour}
    />
  );
}

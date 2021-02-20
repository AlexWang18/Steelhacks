import React from "react";
import axios from "axios";

import { useFormik } from "formik";

function UploadForm() {
  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(`/upload`, {
          file: values.file,
        })
        .then((res) => {
          console.log(res);
        });
    },
    // validate: (values) => {
    //   let errors = {};

    //   if (!values.file) {
    //     errors.file = "Required";
    //   }
    //   return errors;
    // },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="uploadForm"
      name="uploadForm"
    >
      <label htmlFor="file" className="uploadLabel">
        Upload your PDF
      </label>
      <input
        type="file"
        name="file"
        id="file"
        className="fileInput"
        {...formik.getFieldProps("file")}
      />
      <button type="submit" className="submitBtn">
        Upload
      </button>
      {/* {formik.errors.file && formik.touched.file && (
        <div className="uploadForm__error">{formik.errors.file}</div>
      )} */}
    </form>
  );
}

export default UploadForm;

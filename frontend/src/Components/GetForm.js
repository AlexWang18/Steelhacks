import React from "react";
import axios from "axios";

import { useFormik } from "formik";

function GetForm() {
  const formik = useFormik({
    initialValues: {
      filename: null,
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .get(`/pdf/${values.filename}`, {
          file: values.filename,
        })
        .then((res) => {
          console.log(res);
        });
    },
    // validate: (values) => {
    //   let errors = {};

    //   if (!values.filename) {
    //     errors.filename = "Required";
    //   }
    //   return errors;
    // },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="getForm" name="getForm">
      <label htmlFor="file" className="getLabel">
        Get your Resume
      </label>
      <input
        type="test"
        name="filename"
        id="filename"
        className="filenameInput"
        {...formik.getFieldProps("filename")}
      />
      <button type="submit" className="submitBtn">
        Submit
      </button>
      {/* {formik.errors.filename && formik.touched.filename && (
        <div className="getForm__error">{formik.errors.file}</div>
      )} */}
    </form>
  );
}

export default GetForm;

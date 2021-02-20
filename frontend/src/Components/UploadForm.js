import React from "react";
import axios from "axios";

// import { useFormik } from "formik";

function UploadForm() {
  // const formik = useFormik({
  //   initialValues: {
  //     resume: null,
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     axios
  //       .post(`/upload`, {
  //         files: {
  //           resume: values.resume.name,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   },
  // validate: (values) => {
  //   let errors = {};

  //   if (!values.file) {
  //     errors.file = "Required";
  //   }
  //   return errors;
  // },
  // });
  return (
    <form
      // onSubmit={formik.handleSubmit}
      action="/upload"
      method="post"
      className="uploadForm"
      encType="multipart/form-data"
      name="uploadForm"
    >
      <label htmlFor="resume" className="uploadLabel">
        Upload your PDF now
      </label>
      <input
        type="file"
        name="resume"
        id="resume"
        className="fileInput"
        // {...formik.getFieldProps("resume")}
      />
      <button type="submit" className="submitBtn" value="Upload!">
        Upload
      </button>
      {/* {formik.errors.file && formik.touched.file && (
        <div className="uploadForm__error">{formik.errors.file}</div>
      )} */}
    </form>
  );
}

export default UploadForm;

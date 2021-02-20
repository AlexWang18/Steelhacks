import React, { useState, useEffect } from "react";
import axios from "axios";
import download from "downloadjs";

import {getResume, getInfo} from "../services/getResume";

import { useFormik } from "formik";

function GetForm() {
  const [number, setNumber] = useState(0);

  useEffect(async () => {
    console.log("hi")
    await getInfo().then(data => {
      console.log(data)
      setNumber(data.available)
    })
  })
  const formik = useFormik({
    initialValues: {
      filename: null,
    },

    onSubmit: async (values) => {
      console.log(values);
      getResume(values.filename).then((file) => {
        download(file, values.filename);
      });
      /* axios
        .get(`/api/pdf/${values.filename}`, {
          file: values.filename,
        })
        .then((res) => {
          console.log(res.data);
          const blob = res.blob()
          download(blob, 'Sample')
        }) 
        .catch((err) => {
          // error message
        }); */
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
    <>
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
      </form>
      <p>There are {number} resumes available</p>
    </>
  );
}

export default GetForm;

/*if (pdf) {
    return (
      <a href={pdf} without rel="noopener noreferrer" target="_blank">
        <button trailingIcon="picture_as_pdf" label="Resume">
          PDF
        </button>
      </a>
    );
  } */

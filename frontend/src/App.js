import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.file) {
        errors.file = "Required";
      }
      return errors;
    },
  });

  return (
    <div className="app">
      <h1 className="title">Resume.me</h1>
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
        {formik.errors.file && formik.touched.file && (
          <div className="uploadForm__error">{formik.errors.file}</div>
        )}
      </form>
    </div>
  );
}

export default App;

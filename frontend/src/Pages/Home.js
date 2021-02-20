import React from "react";

import GetForm from "../Components/GetForm";
import UploadForm from "../Components/UploadForm";

function Home() {
  return (
    <main className="home">
      <h1 className="title">Resume.me</h1>
      <div className="features">
        <GetForm />
        <UploadForm />
      </div>
    </main>
  );
}

export default Home;

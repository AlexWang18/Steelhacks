import React from "react";

import GetForm from "../Components/GetForm";
import UploadForm from "../Components/UploadForm";

function Home() {
  return (
    <main className="home">
      <div>
        <h1 className="title">resu.me</h1>
        <h2 className="subtitle">A Resume Repository</h2>
      </div>
      <div className="features">
        <GetForm />
        <UploadForm />
      </div>
    </main>
  );
}

export default Home;

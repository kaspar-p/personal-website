import React from "react";
import DownloadPage from "../components/DownloadPage";

function Resume() {
  return (
    <DownloadPage apiRoute="/api/dl/resume" filename="KasparPoland_Resume" />
  );
}

export default Resume;

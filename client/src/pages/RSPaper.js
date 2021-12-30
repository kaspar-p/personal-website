import React from "react";
import DownloadPage from "../components/DownloadPage";

function RSPaper() {
  return (
    <DownloadPage
      apiRoute="/api/rs/paper"
      filename="OnTheConstructionOfReedSolomonCodes"
    />
  );
}

export default RSPaper;

import React from "react";
import FileCard from "./FileCard";

const FileList = ({ files }) => {
  if (!files.length) {
    return <p>No files found</p>;
  }

  return (
    <div className="grid">
      {files.map((file, index) => (
        <FileCard key={index} file={file} />
      ))}
    </div>
  );
};

export default FileList;
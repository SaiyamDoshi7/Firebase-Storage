import React from "react";
import { useDispatch } from "react-redux";
import { deleteFile } from "../features/fileSlice";

const FileCard = ({ file }) => {
  const dispatch = useDispatch();
  const isImage = file.type?.startsWith("image/");

  return (
    <div className="card">

      <div className="preview">
        {isImage ? (
          <img src={file.url} />
        ) : (
          <span>📄</span>
        )}
      </div>

      <h3>{file.name}</h3>

      <p className="info">
        {(file.size / 1024).toFixed(0)} KB
      </p>

      <div className="actions">
        <a href={file.url} target="_blank">Open</a>
        <button onClick={() => dispatch(deleteFile(file))}>
          Delete
        </button>
      </div>

    </div>
  );
};

export default FileCard;
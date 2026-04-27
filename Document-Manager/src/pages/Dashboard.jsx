import React, { useState } from "react";
import { useSelector } from "react-redux";
import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";
import SearchFilter from "../components/SearchFilter";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const { list } = useSelector((state) => state.files);

  const filteredFiles = list.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Document Hub</h1>
      <p className="subtitle">Manage all your files in one place</p>

      <div className="topbar">
        <SearchFilter setSearch={setSearch} />
        <UploadFile />
      </div>

      <h2>All Documents</h2>

      <FileList files={filteredFiles} />

    </div>
  );
};

export default Dashboard;
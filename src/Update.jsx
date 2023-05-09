import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();

  return (
    <div>
      <h2>Update information of : {loadedData.name}</h2>
    </div>
  );
};

export default Update;

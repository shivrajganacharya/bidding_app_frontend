import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import ShowItems from "./ShowItems";



const BoardModerator = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>All Advertisements</h3>
      </header>
      <div>
        <ShowItems url={`http://localhost:8085/api/getAllItems`} />
      </div>
    </div>
  );
};

export default BoardModerator;

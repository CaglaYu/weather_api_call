import React, { useState, useEffect } from "react";
import Main from './Main';
import Footer from './Footer';
import UserService from "../services/user.service";
import './Main.css';
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="myFrame">

          <Main />
          <Footer />

    </div>
  );
};

export default Home;

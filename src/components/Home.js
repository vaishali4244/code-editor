// import { Diversity1 } from "@mui/icons-material";
import React from "react";
// import Header from "./Header";
import Code from "./Code";
import './Home.css';
import Result from "./Result";



const Home = () => {
  const logo = "data:image/png;base64,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"

  return (
    <>
      {/* <div className="content-home"> */}
      <div className='home'>
        <div className="header-top">
          <img src={logo} alt="" style={{ width: 37, height: 40 }} />
          <h1 className="title">
            CODE EDITOR
          </h1>
        </div>

      </div>
      <Code />
      <Result />
    </>
  )
}

export default Home;
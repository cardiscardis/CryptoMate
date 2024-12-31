import React from "react";
// import mwallet from "../logo2.png";
import kwallet from "../karenLogoSmall.png"
import { Button } from "antd";
import { useNavigate } from "react-router-dom";




function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src={kwallet} alt="logo" className="frontPageLogo" style={{
          width: 80, height: 80
        }} />
        <h2> Howdy! 👋 </h2>
        <h4 className="h4"> Welcome to Karen Web3 Wallet</h4>
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
          style={{backgroundColor: 'green'}}
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>
        {/* <p className="frontPageBottom">
          Find Alt Coin Gems:{" "}
          <a href="https://moralismoney.com/" target="_blank" rel="noreferrer">
            money.moralis.io
          </a>
        </p> */}
      </div>
    </>
  );
}

export default Home;

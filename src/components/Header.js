import React, { useState } from "react";
import "./css/Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Dropdown, Input } from "antd";
import request from "../components/Request";
import GoogleLogin from "react-google-login";

function Header({ setSelectedOption }) {
  const [activekey, setActiveKey] = useState(1);
  const [visible, setVisible] = useState(false);
  const handleClick=()=>{
    console.log("vipin")
  }
  const onSearch = (value) => {
    let _value = String(value).replace(" ", "+");
    setSelectedOption(request.searchMovies + _value);
  };
  return (
    <div className="header">
      <div className="header__icons">
        <div
          onClick={() => setActiveKey(1)}
          className={`header__icon ${
            activekey === 1 && `header__icon--active`
          }`}
        >
          <HomeIcon />
          <p>Home</p>
        </div>
        <div
          onClick={() => {
            setActiveKey(2);
            setSelectedOption(request.fetchTrending);
          }}
          className={`header__icon ${
            activekey === 2 && `header__icon--active`
          }`}
        >
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div
          onClick={() => {
            setSelectedOption(request.fetchTopRated);
            setActiveKey(3);
          }}
          className={`header__icon ${
            activekey === 3 && `header__icon--active`
          }`}
        >
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div
          onClick={() => setActiveKey(4)}
          className={`header__icon ${
            activekey === 4 && `header__icon--active`
          }`}
        >
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>
        <div className="header__icon">
          <Dropdown
            overlay={
              <Input.Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            }
            placement="bottomLeft"
            overlayStyle={{
              background: "transparent",
            }}
            visible={visible}
            onVisibleChange={() => setVisible(!visible)}
            arrow={{ pointAtCenter: true }}
          >
            <SearchIcon />
            {/* <p>Search</p> */}
          </Dropdown>
        </div>
        <div
          onClick={() => setActiveKey(5)}
          className={`header__icon ${
            activekey === 5 && `header__icon--active`
          }`}
        >
          <GoogleLogin
    clientId="172238363874-aeh6u2hpf7jvabkjrdtu0on8lghs3b0l.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}><PersonOutlineIcon/></button>
    )}
    buttonText="Login"
    onSuccess={handleClick}
    onFailure={handleClick}
    cookiePolicy={'single_host_origin'}
  />,
         
        </div>
      </div>
      <img
        src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"
        alt=""
      />
    </div>
  );
}

export default Header;

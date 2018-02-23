import React from "react";
import {Link} from "react-router-dom";
import "./StaticPages.css";
import logo from "../../assets/images/logo.ico"

const HomePage = () => {
    return(
        <div className="HomePage">
            <img className="HomePage-logo" src={logo} alt="logo"/>
            <h1 className="HomePage-title"> Это простой тест на знание основ React JS </h1>
            <p className="HomePage-start">
                <Link to={"/next/0/"}>Начать тест</Link>
            </p>
        </div>
    )
};

export default HomePage;
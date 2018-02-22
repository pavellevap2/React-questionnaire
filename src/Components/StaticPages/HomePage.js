import React from "react";
import {Link} from "react-router-dom";
import "./StaticPages.css";

const HomePage = () => {
    return(
        <div className="HomePage">
            <h1 className="HomePage-title">This is simple questionnaire about main issues of the React JS</h1>
            <p className="HomePage-start"><Link to={"/next/0/"}>Next</Link></p>
        </div>
    )
};

export default HomePage;
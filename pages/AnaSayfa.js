import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../img/Background.jpg"

function AnaSayfa() {


    return (
        <div className="home" style={{backgroundImage:`url(${backgroundImage})`}}>
            <div className="headerContainer">
                <h1>Lokanta Emek</h1>
                <p>El emeği Lezzet <br/>Sevgiyle Pişirilmiş Yemek</p>
                {/* <Link to=""><button>Sipariş ver</button></Link> */}
            </div>
        </div>
    )
}

export default AnaSayfa;
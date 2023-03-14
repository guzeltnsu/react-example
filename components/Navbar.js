import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpeg";


function Navbar(props) {
   
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} alt="logo" />
            </div>
            <div className="rightSide">
                <Link to="/">Ana Sayfa</Link>
                <Link to="/Corba">Çorbalar</Link>
                <Link to="/AraSicak">Ara Sıcaklar</Link>
                <Link to="/AnaYemek">Ana Yemekler</Link>
                <Link to="/Tatli">Tatlılar</Link>
                <Link to="/Sepet">Sepet</Link>
                {
                    props.cartItems && props.cartItems.length > 0 ? <>
                       <div className="sepet">Sepette ürün bulunmaktadır.</div>
                    </> : <>Sepet boş</>
                }

            </div>

        </div >

    );
}

export default Navbar;
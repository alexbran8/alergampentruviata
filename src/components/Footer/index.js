import React from "react";
import FacebookLogo from "../../assets/facebook_logo_90x90.svg"
import InstagramLogo from "../../assets/instagram_logo_90x90.svg"
import BuyMeCoffeeLogo from "../../assets/buy_me_coffee_logo_333x148.svg"
import './index.styling.css'


export const Footer = ()=> {
    return (
        <div className="footer">
            <div className="inline-portofolio">
            <a href="https://www.facebook.com/alergpentruviata" target="blank"><img className="inline-portofolio-icon" alt="facebook-logo" src={FacebookLogo} /></a>
            <a href="https://www.instagram.com/alergam_pentru_viata" target="blank"><img className="inline-portofolio-icon" alt="instagram-logo" src={InstagramLogo} /></a>
            <a href="https://www.buymeacoffee.com/?source=fba1&utm_source=FriendlyGAd&utm_medium=BmcAdSearch&utm_campaign=April2020&gclid=Cj0KCQiArsefBhCbARIsAP98hXRKuWa82uiW00U_4YRxlfiiBjKxbcT9Aepgf12zr5DBm292ljSp4-YaAvirEALw_wcB" target="blank"><img className="inline-portofolio-icon" alt="buy-me-coffee-logo" src={BuyMeCoffeeLogo} /></a>
            </div>
            <div className="text-white">developed by <a href="https://webservices.ro" className="text-white" target="blank">webservices.ro</a></div>
    </div>
    )
}
import React from "react";
import FacebookLogo from "../../assets/facebook_logo_90x90.svg"
import InstagramLogo from "../../assets/instagram_logo_90x90.svg"
import './index.styling.css'


export const Footer = ()=> {
    return (
        <div className="footer">
            <div className="inline-portofolio">
            <a href="https://www.facebook.com/alergpentruviata" target="blank"><img className="inline-portofolio-icon" alt="facebook-logo" src={FacebookLogo} /></a>
            <a href="https://www.instagram.com/alergam_pentru_viata" target="blank"><img className="inline-portofolio-icon" alt="instagram-logo" src={InstagramLogo} /></a>
            </div>
            <div className="text-white">developed by <a href="https://webservices.ro" className="text-white" target="blank">webservices.ro</a></div>
    </div>
    )
}
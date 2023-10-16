import React from "react";
import "./index.styling.css";
import { Stats } from "../../components/Stats";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Stats />
      <div className="container">
        <p className="header">Povestea noastră. Cum a început totul?</p>
        <p className="header">
          Fiecare km alergat e transformat în bani ce se donează cauzelor în
          care credem ajutând astfel comunitatea
        </p>
        <div className="join-us-container">
          <div className="pill"><Link to="/join">IMPLICĂ-TE!</Link></div>
          <div>Fii alături de noi!</div>
          <div className="pill"><Link to="/support">SPRIJINĂ-NE!</Link></div>
        </div>
        {/* <div className="photo-container">
            <img height="150" alt="" className="photo" src="https://scontent.ftsr1-2.fna.fbcdn.net/v/t39.30808-6/350327997_934483604493500_7312516077531970307_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=TMbsre1YAdMAX9BhSkt&_nc_ht=scontent.ftsr1-2.fna&oh=00_AfD4aiml4boPB87_HSN5ITJqOqdEiLz9P8MJZCqJHuBXbg&oe=64E09659"></img>
            <img height="100" alt="" className="photo" src="https://scontent.ftsr1-1.fna.fbcdn.net/v/t39.30808-6/353060110_756132152972115_68143464039991909_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=rgJHPCkR8gwAX90VFzF&_nc_ht=scontent.ftsr1-1.fna&oh=00_AfCkSO6DCN_Fa9HWnsFKsKdzXuYJsoHnf_LKsOOTFVbHqw&oe=64DFC722"></img>
            <img height="100" alt="" className="photo" src="https://scontent.ftsr1-1.fna.fbcdn.net/v/t39.30808-6/353060110_756132152972115_68143464039991909_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=rgJHPCkR8gwAX90VFzF&_nc_ht=scontent.ftsr1-1.fna&oh=00_AfCkSO6DCN_Fa9HWnsFKsKdzXuYJsoHnf_LKsOOTFVbHqw&oe=64DFC722"></img>
            <img height="150" alt='' className="photo" src="https://scontent.ftsr1-2.fna.fbcdn.net/v/t39.30808-6/350327997_934483604493500_7312516077531970307_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=TMbsre1YAdMAX9BhSkt&_nc_ht=scontent.ftsr1-2.fna&oh=00_AfD4aiml4boPB87_HSN5ITJqOqdEiLz9P8MJZCqJHuBXbg&oe=64E09659"></img>
          </div> */}
      </div>
    </div>
  );
};

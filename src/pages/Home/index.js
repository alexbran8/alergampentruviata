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
        <p>
        Vrem să alergăm cât mai mulți km iar fiecare km alergat, se va transforma în bani pe care îi vom dona.
        </p>
        <p>

Dacă vrei și tu să contribui prin a ne ajuta să avem un partener cu care să alergăm sau poate să donăm mai mult decât suma pe care o punem noi la dispoziție, scrie-ne și vom reveni către tine cu mai multe detalii.
</p>
<div>
  <p>
În anul 2023 avem doua cauze pentru care alergăm:
<li>
Plătirea câtorva tratamente costisitoare ale unor copii bolnavi de la Spitalul Louis Țurcanu
</li>
<li>Rareș și Ivan doi băieței cu probleme mari de sănătate
</li>
</p>
<p>
În anul 2022 am avut două cauze pentru care am alergat: 
<li>cei peste 450 oameni fără adăpost de la “Dumbrava minunată” ce sunt în grija domnului Viorel Pașca</li>
<li>Rareș și Ivan doi băieței cu probleme mari de sănătate</li>
</p>
<p>
În anul 2021 am alergat 1400 km și am donat împreună cu voi suma de 12210 lei către proiectul desfășurat de domnul Viorel Pasca prin care ~450 oameni cu mari lipsiri sunt ajutati cu  casă, masă și tot ceea ce au nevoie pentru un trai decent. 
</p>
În anul 2020 am alergat 2233.31 km și am donat împreună cu voi suma de 11290 lei către Fundația Estera. 
<p>
Mai jos sunt mai multe detalii despre cauze și cum am ajuns în acest punct.
</p>
<p>
Suntem 5 în momentul de față dar ne dorim să fim o comunitate cât mai mare de “alergători de fapte bune” iar împreună să “Alergăm pentru viață”. Dacă vrei să te implici fie alergând, fie donând sau doar încurajându-ne, nu ezita să ne contactezi. Oricat de mic ar fi ajutorul tău, fie că e doar o vorbă de încurajare, o rugăciune, un share la postările noastre… gândește-te că pentru cel care primește, poate însemna enorm!
</p>
</div>
        <div className="join-us-container">
          <div className="pill"><Link to="/contact">IMPLICĂ-TE!</Link></div>
          <div className="text-center">Fii o bucurie pentru cei din jurul tău!</div>
          <div className="pill"><Link to="/contact">SPRIJINĂ-NE!</Link></div>
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

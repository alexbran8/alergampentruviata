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
<p>
  <p>
În anul 2023 avem doua cauze pentru care alergăm:
- Plătirea câtorva tratamente costisitoare ale unor copii bolnavi de la Spitalul Louis Țurcanu
- Rareș și Ivan doi băieței cu probleme mari de sănătate
</p>
<p>
În anul 2022 am avut două cauze pentru care am alergat: 
- cei peste 450 oameni fără adăpost de la “Dumbrava minunată” ce sunt în grija domnului Viorel Pașca
- Rareș și Ivan doi băieței cu probleme mari de sănătate
</p>
<p>
În anul 2021 am alergat 1400 km și am donat împreună cu voi suma de 12210 lei către proiectul desfășurat de domnul Viorel Pasca prin care ~450 oameni cu mari lipsiri sunt ajutati cu  casă, masă și tot ceea ce au nevoie pentru un trai decent. 
</p>
În anul 2020 am alergat 2233.31 km și am donat împreună cu voi suma de 11290 lei către Fundația Estera. 
<p>
Mai jos sunt mai multe detalii despre cauze și cum am ajuns în acest punct.
</p>
Sunt Alex, sunt din Timișoara și cred în valoarea vieții, ca dar special din partea lui Dumnezeu pentru orice om! Așadar, susțin dreptul la viață a ființelor umane, din momentul concepției și până la moarte. Am început în Ianuarie 2020 să alerg cu sens, să alerg pentru o cauză în care cred, să “Alerg pentru viață”. Mi-am propus atunci, ca fiecare km alergat de mine, să vină cu o donație din partea mea către o cauză. Am alergat în acel an 2233 km pentru Fundația Estera. Pe lângă donația mea, ați participat și voi, iar la final de 2020 s-au donat 11290 lei fundației care ajută financiar și cu consiliere psihologică, femeile cu sarcini neplanificate aflate în dificultate.
<p>
Anul 2021 l-am început tot “Alergând pentru viață”. De data aceasta, km pe care i-am alergat, s-au transformat în donații către domnul Viorel Pasca, un om deosebit, care face posibil ceea ce instituțiile statului nu reușesc. El oferă zi de zi un trai decent pentru ~450 de oameni ai nimănui. Acești oameni “ai străzii” bolnavi și uitați de toți, sunt îngrijiți cu mare atenție și dragoste în cele 17 case de lângă Oradea. Aici, domnul Pasca a reușit în mai bine de 15 ani să creeze un loc minunat pentru acești oameni ce nu găsesc ajutor în nici o altă parte. “Dumnezeu poartă de grijă” în acele case iar domnul Pasca, din donații reușește zi de zi să fie o binecuvântare pentru aceste persoane și pentru comunitatea în care se implică prin alte câteva proiecte paralele.
</p>
In luna Noiembrie a lui 2021, am început să “Alergăm pentru viață”. Mihaela (Ella), își dorește să alerge pentru Rareș și Ivan, doi băieței de câțiva anișori cu probleme mari de sănătate (Ivan are microcefalie, iar Rareș hemipareză și epilepsie structurală). Problemele lor de sănătate necesită terapii ale căror costuri ajung la sume mari, iar din salariile unor părinți surmenați e dificil să fie acoperite. Ella, Vrea ca prin fiecare km alergat de ea, să ajute familiile celor 2 băieți care în ultimii ani au fost greu încercate.
<p>
Luna Februarie (2022) ne-a adus încă 2 “alergători de fapte bune” care s-au alăturat comunității și care vor alerga pentru cele 2 cauze deja existente. Alex si Irina, ne-au contactat și ne-am bucurat să aflăm de la ei că distanțele alergate, le vor transforma în bani ce se vor dona pentru aceste cauze.
</p>
În luna Aprilie (2022), Cristina s-a alăturat grupului nostru de alergători de fapte bune și a decis să adune cât mai mulți km pe care să îi transforme în bani ce îi va dona către cauzele prezentate mai sus.
<p></p>
<p>
Suntem 5 în momentul de față dar ne dorim să fim o comunitate cât mai mare de “alergători de fapte bune” iar împreună să “Alergăm pentru viață”. Dacă vrei să te implici fie alergând, fie donând sau doar încurajându-ne, nu ezita să ne contactezi. Oricat de mic ar fi ajutorul tău, fie că e doar o vorbă de încurajare, o rugăciune, un share la postările noastre… gândește-te că pentru cel care primește, poate însemna enorm!
</p>
Fii o bucurie pentru cei din jurul tău
        </p>
        <div className="join-us-container">
          <div className="pill"><Link to="/contact">IMPLICĂ-TE!</Link></div>
          <div>Fii alături de noi!</div>
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

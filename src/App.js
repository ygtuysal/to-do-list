import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true }
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniEleman,setYeniEleman] = useState("");


  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input value={yeniEleman} onChange={(e)=>setYeniEleman(e.target.value)}  placeholder="listeye ekle" />
        <button
        onClick={()=>{
        setListe([
          ...liste,
          { id: Date.now() , baslik: yeniEleman , completed : false }
        ]);
        setYeniEleman("");
      }}
        >Ekle</button>
      </div>
      <div className="liste">
        {liste.map(item => (
          <div key={item.id} onClick={()=> {
              setListe(
                liste.map(el=>
                  el.id===item.id ? {...el, tamamlandi : !el.tamamlandi} : el)
              )

          } } className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
      </div> 
      <button onClick={()=>setListe(liste.filter(item=>!item.tamamlandi))} className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}

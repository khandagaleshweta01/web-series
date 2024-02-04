import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import './index.css';
import './Seriesdata';
import Seriesdata from "./Seriesdata";

function ncard(val){
    return(
        <Card imgsrc={val.imgsrc} 
        title= {val.title}
        sname = {val.sname}
        link = {val.link}
    />         
    )
}
ReactDOM.render(
  <>   
    {Seriesdata.map(ncard)};
  </>
  ,document.getElementById('root')
);
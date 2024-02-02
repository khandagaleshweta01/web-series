import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import './index.css';
import './Seriesdata';
import Seriesdata from "./Seriesdata";

ReactDOM.render(
  <>
    <Card imgsrc={Seriesdata[0].imgsrc} 
          title= {Seriesdata[0].title}
          sname = {Seriesdata[0].sname}
          link = {Seriesdata[0].link}
      /> 
      <Card imgsrc={Seriesdata[1].imgsrc} 
          title= {Seriesdata[1].title}
          sname = {Seriesdata[1].sname}
          link = {Seriesdata[1].link}
      /> 
      <Card imgsrc={Seriesdata[2].imgsrc} 
          title= {Seriesdata[2].title}
          sname = {Seriesdata[2].sname}
          link = {Seriesdata[2].link}
      /> 
      <Card imgsrc={Seriesdata[3].imgsrc} 
          title= {Seriesdata[3].title}
          sname = {Seriesdata[3].sname}
          link = {Seriesdata[3].link}
      /> 
      <Card imgsrc={Seriesdata[4].imgsrc} 
          title= {Seriesdata[4].title}
          sname = {Seriesdata[4].sname}
          link = {Seriesdata[4].link}
      /> 
  </>
  ,document.getElementById('root')
);
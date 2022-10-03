import React from "react";
import styles from "../styles/Home.module.css";
import {config} from "./Constants"
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const URL = config.url

const Help = () => {
  const [helptext, sethelptext] = useState(null)
  const [loadhelptext, setloadhelptext] = useState(true)
  useEffect(() => {
    fetch(`${URL}/here-to-help`)
    .then((res) => res.json())
    .then((helptext) =>{
      sethelptext(helptext)
      setloadhelptext(false)    
    }) 
  }, [])

  if(loadhelptext){
    return(
      <div>loading...</div>
    )
  }
  
  return (
    <div className={styles.help}>
      <div className={styles.para2}>
        <h1>{helptext.data.attributes.title}</h1>
        <p>
        <ReactMarkdown>{helptext.data.attributes.content}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default Help;

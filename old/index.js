import React, {useEffect, useState} from "react";
import "./index.styling.css";
// import ReactMarkdown from 'react-markdown';
// import file from "../../../public/data/markdown.md";
import matter from 'gray-matter'
import {Buffer} from 'buffer';



export const Team = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [data, setData] = useState('');

  

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then(res=> matter(Buffer.from(res)))
      .then(res =>{
        setData(res.data);  
      setMarkdownContent(res.content)
      }
      );
  }, []);


  return (
    <div className="header">
      <div>{data.name}, {data.age}, {data.joinDate}, {data.summary}</div>
      
      <div className="container">
     <ReactMarkdown >{markdownContent}</ReactMarkdown>
     </div>
     </div>
  );
};

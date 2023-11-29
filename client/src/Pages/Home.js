import React, {  useContext, useEffect } from "react";
import noteContext from "../Context/Notes/NoteContext";
import {  Link } from "react-router-dom";
import './CSS/Home.css'

export default function Home() {

  const { subjects, fetchSubjects } = useContext(noteContext);
  useEffect(() => {
    fetchSubjects();
    // document.title = "MassGyan-Tutorial"
  },[])


  return (
    <div className="container-fluide ">
      {<ol id="subject-list">
        {subjects.map((subject, index) => {
          return <li key={index}><div className="card" style={{ "width": "18rem" }}>
            <img className="card-img-top" src=".." alt={`${subject.name}`}></img>
            <div className="card-body">
              <h2 className="card-img-top"><Link to={`/tutorial/${subject.name}`}>{subject.name}</Link></h2>
              <h5>{subject.name} {subject.category}</h5>
              <Link to={`/tutorial/${subject.name}`} href="#" className="btn btn-info">learn</Link>
            </div>
          </div>
          </li>
        })}
        
      </ol>}
    </div>
  )
}

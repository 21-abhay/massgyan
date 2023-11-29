import React, { useState, useContext, useEffect } from "react";
import noteContext from "../Context/Notes/NoteContext";
import { useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import TopicDescribe from "../Components/TopicDescribe";
import Aside from "../Components/Aside";
import NotFound from "./NotFound";
// import './CSS/TutorialPage.css'

export default function TutorialPage(props) {
  const { subject, topic } = useParams();
  const { Newnote, fetchnotes,fetchTopics } = useContext(noteContext);
  useEffect(() => {
    fetchnotes(subject,topic);
    document.title = `${subject}-${Newnote.title}`;
    if(window.innerWidth > 575){
      setIsOpen(true)
    }
  }, [subject,topic]);
  useEffect(() => {
    fetchTopics(subject);
  }, [subject]);

  window.addEventListener('resize',()=>{
    if(window.innerWidth <575){
      setIsOpen(false);
    }
  });
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  const Notes = (
    <>
      <button onClick={toggleMenu} className="mx-2">
        <FaBars />
      </button>
      <div className="container-fluid row my-2">
        {isOpen && <Aside subject={subject} />}
        <TopicDescribe subject={subject} topic={topic} />
      </div>
    </>
  );
  return (
    <div>
      TutorialPage
      <div>{Newnote.title ? Notes : <NotFound />}</div>
    </div>
  );
}

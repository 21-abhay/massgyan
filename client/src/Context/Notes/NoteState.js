

// import React from "react";
import {  useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props)=>{

      const initialNotes = {"subject":'',"title":"","chapter":"","description":"","subtopic":[]}

      const [msg,setMsg] = useState(false);
      const [notes,setNotes] = useState(initialNotes);
      const [Newnote,setNewNote] = useState(initialNotes);
      const [topics,setTopics] = useState([{_id:"",title:""}]);
      const [subjects,setSubjects] = useState([{_id:"",title:""}]);

      const API_URL = process.env.REACT_APP_API+process.env.REACT_APP_PORT

      const addnotes = async(update)=>{
        console.log("Notes Added : ",notes)
        try {
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify(notes),
          };
          var url = update ? API_URL+process.env.REACT_APP_UPDATE_NOTES : API_URL+process.env.REACT_APP_ADD_NOTES;
          
          const response = await fetch(url, requestOptions);
          console.log("Response : ",response);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          else{
            console.log(`${notes.title} added in ${notes.chapter} successfully...`)
            setMsg(false);
          }
        } catch (error) {
          console.error("Error  adding notes :", error);
        }
      }

      // const deletenotes = ()=>{}

      // const updatenotes = ()=>{}

      const fetchnotes = async(subject,topic,update)=>{
        try {
          const requestOptions = {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'api-key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify({subject:subject,id:topic})
          };
          const url = API_URL+process.env.REACT_APP_FETCH_NOTES;
          const response = await fetch(url, requestOptions);
          // console.log("response : ",response);
          const data = await response.json();
          data.subject = subject;
          data.id = data._id;
          console.log("Fetch Notes : ",data);
         
          if(update){
            setNotes(data);
            // setNotes({...notes, ['subject']:subject});
          }
          setNewNote(data);
          // setNewNote({...Newnote, ['subject']:subject});
          
        } catch (error) {
          console.error("Error fetching notes :", error);
        }
      }

      const fetchTopics = async(subject)=>{
        try {
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify({ subject: subject,data:["title"] }),
          };
          const url = API_URL + process.env.REACT_APP_FETCH_TOPICS;
          const response = await fetch(url, requestOptions);
          // console.log("response : ",response);
      
          if (response.status === 404) {
            throw new Error('Topics Not Found...');
          }
      
          const data = await response.json();
          console.log("Fetch Topics: ", data);
          setTopics(data);
        } catch (error) {
          console.error("Error fetching topics:", error);
        }
      }

      const fetchSubjects = async()=>{
        
        try {
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify({ subject: 'subject',data:["name","category"] }),
          };
          const url = API_URL + process.env.REACT_APP_FETCH_TOPICS;
          const response = await fetch(url, requestOptions);
      
          if (!response.ok) {
            throw new Error('subjects Not Found');
          }
          const data = await response.json();
          console.log("Fetch subjects: ", data);
          setSubjects(data);
        } catch (error) {
          console.error("Error fetching subjects:", error);
        }
      }
    return(
        <noteContext.Provider value={{msg,setMsg,notes,setNotes,Newnote,setNewNote,topics,setTopics,subjects,setSubjects,fetchTopics,fetchnotes,addnotes,fetchSubjects}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
import React,{ useContext,}  from 'react'
import noteContext from '../Context/Notes/NoteContext';
import { Link } from 'react-router-dom';
import './CSS/Aside.css'

export default function Aside(props) {
    const {subject} = props;
    const a = useContext(noteContext);
    const {topics} = a;

  return (
    <div className="container col-sm-3 aside">
        <h1>{subject}</h1>
        <ul>
            {topics.map((topic)=>{
                return <li key={topic._id}><Link to={`/tutorial/${subject}/${topic._id}`}>{topic.title}</Link></li>
            })}
        </ul>
    </div>
  )
}

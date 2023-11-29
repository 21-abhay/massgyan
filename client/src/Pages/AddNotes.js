
import React,{useState, useContext, useEffect,} from 'react'
import { useNavigate,useParams,useLocation } from "react-router-dom";
import noteContext from '../Context/Notes/NoteContext';
import AddSubtopics from '../Components/AddSubtopics';
import './CSS/AddNote.css';
import Loader from '../Components/Loader';

function AddNotes(props) {
  const navigate = useNavigate();
  const url = useLocation();
  const { subject, topic } = useParams();
  const {addnotes,fetchnotes,notes,setNotes,subjects,msg,setMsg} = useContext(noteContext);
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  }, [msg]);
  useEffect(() => {
    if(url.pathname === '/addnotes'){
      setNotes({"subject":'',"title":"","chapter":"","description":"","subtopic":[]});
      document.title="ADD Notes"
    }
    else{
      document.title = `Update-${subject}-${notes.title}`
      if(subject && topic){
        const update = true;
        fetchnotes(subject,topic,update);
      }
      else{
        navigate('/notfound')
      }
    }
  }, [url,subject,topic]);
  

  const [SubtopicNo, setSubtopicNo] = useState(notes.subtopic.length);


  // Function to add a new Sub-Topic
  const addSubTopic = () => {
    console.log("Notes : ",notes);
    let arr = notes.subtopic;
    const newSub = {"title":"","detail":[]}
    arr.push(newSub);
    setNotes({...notes, ["subtopic"]:arr});

    setSubtopicNo(SubtopicNo+1);
  };

  const onChange = (e)=>{
    setNotes({...notes, [e.target.name]:e.target.value});
  }

  const submitNote = (event)=>{
    event.preventDefault();
    setMsg(true);
    console.log("Note : ",notes);
    addnotes();
    setSubtopicNo(0);
    setNotes({"subject":"","chapter":"","title":"","description":"","subtopic":[]});
  }

  const updateNotes = (event)=>{
    event.preventDefault();
    setMsg(true);
    addnotes(true);
  }

  const subjectListOnCLick = (e)=>{
    setNotes({...notes, ['subject']:e.target.innerText});
  }
  const categoryListOnCLick = (e)=>{
    setNotes({...notes, ['category']:e.target.innerText});
  }
  const noteContainer = (
    <>
      <h2>Add Notes</h2>
        <p id='para'></p>
        <form action="" method='post' id='addnotes'>
          <div className="note-form-parts">
            <div className="btn-group">
              <textarea className='subject' name="subject" id="subject" cols="30" rows="1" placeholder='Enter Subject Name' value={notes.subject} onChange={onChange} required></textarea>
              <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                {subjects.map((Element, index)=>{
                    return <li key={index} onClick={subjectListOnCLick}>{Element.name}</li>
                  })}
              </ul>
              &nbsp; &nbsp;
              <textarea className='subject' name="category" id="category" cols="30" rows="1" placeholder='Enter Category....' value={notes.category} onChange={onChange} required></textarea>
              <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                {subjects.map((Element, index)=>{
                    return <li key={index} onClick={categoryListOnCLick}>{Element.category}</li>
                  })}
              </ul>
            </div>
            
          </div>

          <div className="note-form-parts">
            <textarea name="chapter" className="chapter" cols="30" rows="1" placeholder='Enter Chapter Name' value={notes.chapter} onChange={onChange} required></textarea>
          </div>

          <div className="note-form-parts">
            <textarea name="title" className="title" cols="30" rows="2" placeholder='Enter Topic Name' value={notes.title} onChange={onChange} required></textarea>
            <br />
            <textarea name="description" className="description" cols="30" rows="3" placeholder='Describe Your Topic' value={notes.description} onChange={onChange}></textarea>
          </div>


          {notes.subtopic.map((subtopic,index)=>{
            return <AddSubtopics key={index}  SubtopicNo={index}/>
          })}
          
          <br />
          <button type='button' onClick={addSubTopic}>Add Subtopic</button>
          <br />
          <br />
          {url.pathname==='/addnotes' ? <button type="submit" onClick={submitNote}>Subbmit notes</button> : <button type="submit" onClick={updateNotes}>Update notes</button>}
          <br />
          <br></br>
        </form>
    </>
  )


  return (
    <div className='container' style={{"backgroundColor": "rgb(231, 230, 230)"}}>
        {msg ? <Loader />: noteContainer }
    </div>
  )
}


export default  AddNotes;
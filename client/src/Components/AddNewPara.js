import React,{ useContext} from 'react'
import noteContext from '../Context/Notes/NoteContext';

export default function AddNewPara(props) {
  
  const {notes,setNotes} = useContext(noteContext);
  const {SubComponentNo,SubtopicNo} = props;

  const onChangePara = (e)=>{
    
    const no=e.currentTarget.getAttribute('data').split('.');
    let sno = parseInt(no[0]);
    let pno =  parseInt(no[1]);
    let arr = notes.subtopic;
    arr[sno].detail[pno].description[0] = e.target.value;
    setNotes({...notes, ["subtopic"]:arr});
  }
  return (
    <textarea key={SubtopicNo +"."+ SubComponentNo} data={SubtopicNo +"."+ SubComponentNo} cols="30" rows="2" placeholder='Describe Your Topic' value={notes.subtopic[SubtopicNo].detail[SubComponentNo].description[0]} onChange={onChangePara}></textarea>
  )
}

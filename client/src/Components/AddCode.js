import React,{ useContext} from 'react'
import noteContext from '../Context/Notes/NoteContext';

function AddCode(props) {

  const {notes,setNotes} = useContext(noteContext);
  const {SubComponentNo,SubtopicNo} = props;

  const onChangeCode = (e)=>{
    
    const no=e.currentTarget.getAttribute('data').split('.');
    let sno = parseInt(no[0]);
    let pno =  parseInt(no[1]);
    let arr = notes.subtopic;
    if(e.currentTarget.name ==='code-title'){
      arr[sno].detail[pno].title = e.target.value;
    }
    else{
      arr[sno].detail[pno].description[0] = e.target.value;
    }
    setNotes({...notes, ["subtopic"]:arr});
  }

  return (
    <>
      <textarea key={SubtopicNo +"."+ SubComponentNo + '0'} data={SubtopicNo +"."+ SubComponentNo} cols="30" rows="1" placeholder='Code heading...' name='code-title' value={notes.subtopic[SubtopicNo].detail[SubComponentNo].title} onChange={onChangeCode}></textarea>
      
      <textarea key={SubtopicNo +"."+ SubComponentNo + '1'} data={SubtopicNo +"."+ SubComponentNo} cols="30" rows="4" placeholder='Write Code.' name='code-description' value={notes.subtopic[SubtopicNo].detail[SubComponentNo].description[0]} onChange={onChangeCode}></textarea>
    </>
  )
}



export default AddCode;
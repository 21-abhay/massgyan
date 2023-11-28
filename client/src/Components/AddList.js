import React,{ useContext} from 'react'
import noteContext from '../Context/Notes/NoteContext';

export default function AddList(props) {
  
    const {notes,setNotes} = useContext(noteContext);
    const {SubComponentNo,SubtopicNo} = props;

    const onChangeList = (e)=>{
        const no=e.currentTarget.getAttribute('data').split('.');
        let sno = parseInt(no[0]);
        let pno =  parseInt(no[1]);
        let rno = parseInt(no[2]);
        let arr = notes.subtopic;
        if(e.currentTarget.name==='list-title'){
            arr[sno].detail[pno].title = e.target.value;
        }
        else{
            arr[sno].detail[pno].description[rno] = e.target.value;
        }
        
        setNotes({...notes, ["subtopic"]:arr});
    }
  return (
    <div key={SubComponentNo}>
        <textarea data={SubtopicNo+"."+SubComponentNo} name="list-title" id="" cols="10" rows="1" placeholder='List Heading...' value={notes.subtopic[SubtopicNo].detail[SubComponentNo].title} onChange={onChangeList}></textarea>
        <ol>
            {notes.subtopic[SubtopicNo].detail[SubComponentNo].description.map((li,index)=>{
                return <li key={index}><textarea data={SubtopicNo+"."+SubComponentNo+'.'+ index} name="list-description" id="" cols="10" rows="1" value={notes.subtopic[SubtopicNo].detail[SubComponentNo].description[index]} onChange={onChangeList}></textarea> </li>
            })}
        </ol>
    </div>
  )
}

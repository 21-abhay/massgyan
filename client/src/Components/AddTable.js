import React,{useContext,} from 'react'
import noteContext from '../Context/Notes/NoteContext';

export default function AddTable(props) {
  
  const {notes,setNotes} = useContext(noteContext);
  const {SubComponentNo,SubtopicNo} = props;


  const onChangeTableData = (e)=>{
    const no=e.currentTarget.getAttribute('data').split('.');
    let sno = parseInt(no[0]);
    let pno =  parseInt(no[1]);
    let rno = parseInt(no[2]);
    let cno = parseInt(no[3]);
    let arr = notes.subtopic;
    arr[sno].detail[pno].description[rno][cno] = e.target.value;
    setNotes({...notes, ["subtopic"]:arr});
  }

  return (
    <div key={SubComponentNo}>
      <table className='table'>

        <tbody>
          {notes.subtopic[SubtopicNo].detail[SubComponentNo].description.map((Element,rowIndex)=>{
              return <tr key={rowIndex}>
              {notes.subtopic[SubtopicNo].detail[SubComponentNo].description[rowIndex].map((column,colIndex)=>{
                return <td key={{rowIndex} + '.' + colIndex}><textarea data={SubtopicNo+"."+SubComponentNo+'.'+ (rowIndex)+'.'+colIndex} name="" id="" cols="10" rows="1" value={column} onChange={onChangeTableData}></textarea></td>
              })}
              </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

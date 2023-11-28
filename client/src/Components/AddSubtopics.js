
import React,{useState, useContext} from 'react'
import noteContext from '../Context/Notes/NoteContext';
import AddTable from './AddTable';
import AddNewPara from './AddNewPara';
import AddList from './AddList';
import AddCode from './AddCode';

export default function (props) {
     
    const {notes,setNotes} = useContext(noteContext);
    const {SubtopicNo} = props;
    const [SubComponentNo, setSubComponentNo] = useState(notes.subtopic[SubtopicNo].detail.length);
    // const [SubComponentNo, setSubComponentNo] = useState(notes.subtopic[SubtopicNo].length ? notes.subtopic[SubtopicNo].detail.length : 0);

    const Component = (index)=>{
        if(notes.subtopic[SubtopicNo].detail[index].paraType === 'paragraph'){
            return <AddNewPara key={index} SubComponentNo={index} SubtopicNo={SubtopicNo} />
        }
        else if(notes.subtopic[SubtopicNo].detail[index].paraType === 'table'){
            return <AddTable key={index} col={1} SubComponentNo={index} SubtopicNo={SubtopicNo} />
        }else if(notes.subtopic[SubtopicNo].detail[index].paraType === 'list'){
            return <AddList key={index} SubComponentNo={index} SubtopicNo={SubtopicNo} />
        }else if(notes.subtopic[SubtopicNo].detail[index].paraType === 'code'){
            return <AddCode key={index} SubComponentNo={index} SubtopicNo={SubtopicNo} />
        }else{
            return <div>Some Error</div>
        }
    }
    const [SubComponent, setSubComponent] = useState(Array.from({length:notes.subtopic[SubtopicNo].detail.length}, (_, index)=>Component(index)));

   
  
  const onChangeSubtopic =  (e)=>{
    const sno=parseInt(e.currentTarget.getAttribute('data'));
    let arr = notes.subtopic;
    arr[sno].title = e.target.value;
    setNotes({...notes, ["subtopic"]:arr});
  }

  const removeSubtopic = (e)=>{
    const sno=parseInt(e.currentTarget.getAttribute('data'));
    let arr = notes.subtopic;
    arr.splice(sno,1);
    setNotes({...notes, ["subtopic"]:arr});
    console.log();
  }
    // Function to add a new Para
    const addNewPara = () => {
        let arr = notes.subtopic;
        arr[SubtopicNo].detail.push({"paraType":"paragraph","description":['']});
        setNotes({...notes, ["subtopic"]:arr});
        const no = SubComponentNo + 1;
        setSubComponentNo(no);
        setSubComponent([...SubComponent, <AddNewPara key={no} SubComponentNo={no-1} setSubComponentNo={setSubComponentNo} SubtopicNo={SubtopicNo} />]);
    };

    const addTable = ()=>{
        let row = prompt("Enter Numbe of Rows : ",3);
        let col = prompt('Enter Number of Columns : ',3);
        if(row && col){
            let arr = notes.subtopic;
            // let dummyTable = Array.from({ length: row }, () => Array(col).fill(' '));
            let dummyTable = Array.from({ length: row }, () => Array.from({ length: col }, () => ''));
            arr[SubtopicNo].detail.push({"paraType":"table","description":dummyTable});
            setNotes({...notes, ["subtopic"]:arr});
            const no = SubComponentNo + 1;
            setSubComponentNo(no);
            setSubComponent([...SubComponent, <AddTable key={no} row={row} col={col} SubComponentNo={no-1} setSubComponentNo={setSubComponentNo} SubtopicNo={SubtopicNo} />]);
        }
        
    }

    const addList = ()=>{
        let row = prompt("Enter Numbe of items want to add : ",3);
        if(row){
            let arr = notes.subtopic;
            let dummyList = Array.from({length:row}, ()=> ' ');
            console.log(dummyList);
            arr[SubtopicNo].detail.push({"paraType":"list","title":"","description":dummyList});
            setNotes({...notes, ["subtopic"]:arr});
            const no = SubComponentNo + 1;
            setSubComponentNo(no);
            setSubComponent([...SubComponent, <AddList key={no} row={row} SubComponentNo={no-1} setSubComponentNo={setSubComponentNo} SubtopicNo={SubtopicNo} />]);
        }
    }
    
    const addCode = ()=>{
        let arr = notes.subtopic;
        // let dummyList = Array.from({length:row}, ()=> '');
        // console.log(dummyList);
        arr[SubtopicNo].detail.push({"paraType":"code","title":"","description":['']});
        setNotes({...notes, ["subtopic"]:arr});
        const no = SubComponentNo + 1;
        setSubComponentNo(no);
        setSubComponent([...SubComponent, <AddCode key={no} a={'passed props'} SubComponentNo={no-1} setSubComponentNo={setSubComponentNo} SubtopicNo={SubtopicNo} />]);
        
    }



    return (
        <div key={SubtopicNo} className="note-form-parts">
            <button type='button' data={SubtopicNo} onClick={removeSubtopic}>delete</button>
            <textarea className='subtopic'  data={SubtopicNo} cols="30" rows="2" placeholder='Enter Sub-Topic Name' value={notes.subtopic[SubtopicNo].title} onChange={onChangeSubtopic}></textarea>
            <br />
            {/* <input type="text" name='describe' placeholder='Describe Your Topic'/> */}
            {SubComponent.map((element) => (
                element
            ))}
            <br />
            <button type='button' onClick={addNewPara}>New Para</button>
            <button type='button' onClick={addTable}>New Table</button>
            <button type='button' onClick={addList} >New List</button>
            <button type='button' onClick={addCode} >New Code</button>
        </div>
    )
}

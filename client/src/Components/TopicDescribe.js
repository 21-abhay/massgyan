import React,{ useContext}  from 'react'
import { Link} from 'react-router-dom';
import noteContext from '../Context/Notes/NoteContext';
import './CSS/TopicDescribe.css'

export default function TopicDescribe(props) {
    const {subject}=props;
    const {Newnote} = useContext(noteContext);

    const copy = (event)=>{
      const copybtn = event.currentTarget;
      const data=event.currentTarget.getAttribute('data');
      if(event.currentTarget.innerHTML === 'copy'){
        // const code = document.getElementsByClassName(data);
        const code = document.getElementById(data);
        var para = code.innerText;
        navigator.clipboard.writeText(para);
        event.currentTarget.innerHTML = 'copied';
        setTimeout(() => {
          copybtn.innerHTML = 'copy';
        }, 3000);
      }
    }
    
    
  return (
    <div className="container col-sm-9 topic-describe">
        <Link to={`/update/${subject}/${Newnote._id}`}><button className="btn btn-outline-danger mx-2" type="button">
          Update
        </button></Link>
        <center><h1 className='title'>{Newnote.title ? Newnote.title : subject}</h1></center>
        <p>{Newnote.description ? Newnote.description : ""}</p>
        {Newnote.subtopic ? Newnote.subtopic.map((subtopic,subtopicIndex)=>{
          return <div key={subtopicIndex}>
                  <h2 className='subtopic-title'>{subtopic.title}</h2>
                  {subtopic.detail.map((element,i)=>{
                    return <div key={i}>
                    {element.paraType === 'paragraph' ? <p className='paragraph'>{element.description[0]}</p> : ''}
                    {element.paraType === 'code' ? <div className='code'>
                      <h4>{element.title}</h4>
                    <button onClick={copy} data={`code-para-${subtopicIndex}`}>copy</button>
                    <p id={`code-para-${subtopicIndex}`}>
                       {element.description[0].split('\n').map((para,index)=>{
                      return <span key={index}>{para}<br/></span>
                    })}</p></div> : ''}
                    
                    {element.paraType === 'table' ? <table className="table">
                        <thead>{element.description.length ? <tr>{element.description[0].map((col,j)=>{
                              return <th key={j} className="table-danger" scope="col">{col}</th>
                            })}</tr> : ''}
                        </thead>

                        <tbody>
                          {element.description.slice(1).map((row,index)=>{
                            return <tr key={index}>{row.map((col,j)=>{
                              return <td key={j}>{col}</td>
                            })}</tr>
                          })}
                        </tbody>

                        </table> : ''}
                    {element.paraType === 'list' ? <div>
                      
                      <ol className='list list-group list-group-numbered'>
                      <center><h4>{element.title}</h4></center>
                        {element.description.map((item,j)=>{
                          return <li key={j} className='list-group-item'>{item}</li>
                        })}
                      </ol></div> : ''}

                    </div>
                  })}
                  <br />
                </div>
        }) : ""}
        TopicDescribe
    </div>
  )
}

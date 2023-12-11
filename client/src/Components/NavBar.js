import React,{useState, useContext, useEffect,}  from 'react'
import { Link,useNavigate } from "react-router-dom";
import noteContext from '../Context/Notes/NoteContext';

export default function NavBar() {
    const navigate = useNavigate();
    const {subjects,fetchSubjects} = useContext(noteContext);
    useEffect(() => {
      fetchSubjects();
    },[]);

  const [lastscroll, setScroll] = useState(0);
  window.addEventListener("scroll", () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop < lastscroll) {
        const nav  =document.getElementById('navbar-header');
        nav.style.position = 'sticky';
        nav.style.top = '0px';
        nav.style.width = "100%";
        nav.style.transition = 'top 0.3s ease-in-out';
        nav.style.zIndex = 5;

    } else {
        const nav  =document.getElementById('navbar-header');
        nav.style.position = 'sticky';
        nav.style.top = "-500px";
    }
    setScroll(currentScrollTop);
  });

  const logoutOnclick = async(event)=>{
    event.preventDefault();
    localStorage.clear();
    navigate(0);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fw-bold" id="navbar-header">
      <div className="container-fluid" style={{ backgroundColor: "rgb(251, 218, 218)" }}>
        <Link className="navbar-brand" to="/" style={{ color: "red" }}>MassGyan</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse my-2" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tutorial</Link>
              <ul className="dropdown-menu">
                {subjects.map((subject,index)=>{
                  return <li key={index}><Link className="dropdown-item" to={`/tutorial/${subject.name}`}>{subject.name}</Link></li>
                })}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category</Link>
              <ul className="dropdown-menu">
                {/* <li><Link className="dropdown-item" to="/addnotes">Add Notes</Link></li> */}
                {/* <li><Link className="dropdown-item" to="/update">Update Notes</Link></li> */}
                <li><Link className="dropdown-item" to="#">Technology</Link></li>
                <li><Link className="dropdown-item" to="#">Exams</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Others</Link></li>
              </ul>
            </li>
          </ul>
          {localStorage.getItem('token') ? <><Link to="/addnotes"><button className="btn btn-outline-danger mx-2" type="button">Add Notes</button></Link>
          <Link to="/logout"><button className="btn btn-outline-danger mx-2" type="button" onClick={logoutOnclick}>
              Logout
            </button></Link></> : <><Link to="/login"><button className="btn btn-outline-danger mx-2" type="button">
              Login
            </button></Link>
          <Link to="/Signin"><button className="btn btn-outline-danger mx-2" type="button">
              Sign-in
            </button></Link></>}
        </div>
      </div>
    </nav>
  );
}

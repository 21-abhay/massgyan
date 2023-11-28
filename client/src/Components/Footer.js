import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
import './CSS/Footer.css';

export default function Footer() {
  return (
    <footer>
        <div className="container-fluid row " >
            <h3 className='col-sm-3' style={{"margin":"auto"}}><Link to='/'><span className="badge bg-danger">MassGyan</span></Link></h3>
            <div className='col-sm-3 ' id='quick-links'>
                <u><b><h5>Importent</h5></b></u>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="privacypolicy">Privacy Policy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="term&condition">Term & Condition</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="faqs">FAQs</Link>
                    </li>
                </ul>
            </div>

            <div className='col-sm-3' id="main-topic">
                <u><b><h5>Quick Links</h5></b></u>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Active</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
            </div>


            <div className='col-sm-3' id="social-handles">
                <u><b><h5>Social Handles</h5></b></u>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="https://www.facebook.com/abhayjeet.roy" target='_blank'><FaFacebook size={32} /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="https://www.instagram.com/21.abhay/" target='_blank'><FaInstagram size={32} color={'#FF00FF'} /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="https://twitter.com/Roy_Abhayjeet21" target='_blank'><FaTwitter size={32} /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="https://github.com/21-abhay" target='_blank'><FaGithub size={32} color={'Black'} /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="https://www.linkedin.com/in/abhayjeet-kumar-186427263/" target='_blank'><FaLinkedin size={32} /></Link>
                    </li>
                </ul>
            </div>
        </div>
      
        <div className="container-fluid my-3">
            <h6><MdCopyright size={32} />Copyright All Rights Reserved to <span className="badge bg-danger">MassGyan</span></h6>
        </div>
    </footer>
  )
}

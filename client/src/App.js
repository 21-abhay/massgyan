
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import AddNotes from './Pages//AddNotes';
import Login from './Pages/Login';
import Signin from './Pages/Singin';
import TutorialPage from './Pages/TutorialPage';
import NotFound from './Pages/NotFound';
import SearchBar from './Components/SearchBar';



function App() {

  return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>MassGyan</title>
          <meta name="description" content="This is Tutorial Website which help students to get notes and study matrial." />
        </Helmet>

        <Router>
          <SearchBar />
          <NavBar />
          <Routes> 
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/addnotes" element={<AddNotes />} />
            <Route exact path="/update/:subject/:topic" element={<AddNotes />} />
            <Route exact path="/tutorial/:subject" element={<TutorialPage home={true}/>} />
            <Route path="/tutorial/:subject/:topic" element={<TutorialPage home={false}/>} />

            {/* catch all undefined routes */}
            <Route path="*" element={<NotFound/>} />
                
          </Routes>
          <Footer />
        </Router>
      </>
  );
}

export default App;



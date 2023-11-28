
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const authenticateApiKey =require('../Middleware/ApiKeyAuthentication');
const FetchNote = require('../Controllers/Notes/FetchNote');
const FetchTopic = require('../Controllers/Notes/FetchTopic');
const AddNote = require('../Controllers/Notes/AddNote');
const updatenotes = require('../Controllers/Notes/UpdateNote');



// ROUTE 1: Get the specific Notes using: GET "/api/notes/fetchnotes".
router.post('/fetchnotes',authenticateApiKey,FetchNote);


// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote',authenticateApiKey, AddNote);

// ROUTE 4: Get the specific Data from Notes using: GET "/api/notes/fetchtopics".
router.post('/fetchtopics',authenticateApiKey,FetchTopic);


// ROUTE 5: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.post('/updatenote',authenticateApiKey, updatenotes)

// ROUTE 6: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
// router.delete('/deletenote/:id', fetchuser, deletnotes)


module.exports = router;
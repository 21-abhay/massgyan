
// const Notes = require('../../modals/Notes')
const mongoose = require('mongoose')
const NoteSchema = require('../../Schema/NoteSchema')
const subjectSchema = require('../../Schema/SubjectSchema')

// const NoteSchema = require('../../Schema/SampleNoteSchema')

const fetchnotes = async(req,res)=>{
    try {
        let cat = {}
        const {subject,id,title,tag} = req.body;
        // const user = req.user.id;
        const user = '';

        user ? cat.user = user : '';
        id ? cat._id = id : '';
        tag ? cat.tag = tag : '';
        title ? cat.title = title : '';

        const subjects = mongoose.model('subject',subjectSchema);
        const sub = await subjects.findOne({name:subject});
        if(sub){
            const Notes = mongoose.model(`${subject}`,NoteSchema);
            const notes = await Notes.find(cat);
            res.status(200).json(notes[0]);
        }
        else{
            console.error("Subject Not Found..");
            res.status(404).json({"msg":"Subject Not Found.."});
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = fetchnotes;


// const Notes = require('../../modals/Notes')
const mongoose = require('mongoose')
const NoteSchema = require('../../Schema/NoteSchema')
const subjectSchema = require('../../Schema/SubjectSchema')
// const NoteSchema = require('../../Schema/SampleNoteSchema')


const addnotes = async (req, res) => {
    try {
        console.log("Body : ",req.body);
        var { subject,category,title,chapter, description,subtopic, tag } = req.body;
        subject = subject.toLowerCase();
        const data = {};
        const data2 = {name:subject};
        // const user = req.user.id;
        const user = "6500cf95c5b33345329980d2";
        category ? data2.category = category : "";
        user ? data.user = user : "";
        title ? data.title = title : "";
        chapter ? data.chapter = chapter : "";
        description ? data.description = description : "";
        tag ? data.tag = tag : "";
        subtopic.length ? data.subtopic=subtopic : "";

        const subjects = mongoose.model('subject',subjectSchema);
        const flag =  await subjects.findOne({name:subject});
        if(!flag){
            const sub = new subjects(data2);
            const saveSub = await sub.save();
        }
        const Note = mongoose.model(`${subject}`,NoteSchema);
        const note = new Note(data);
        const savedNote = await note.save();
        if(savedNote){
            res.status(200).json("Added Successfully.....");
        }
        else{
            res.status(400).send("Client Error...");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = addnotes;
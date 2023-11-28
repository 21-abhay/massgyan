
const mongoose = require('mongoose')
const NoteSchema = require('../../Schema/NoteSchema')
const subjectSchema = require('../../Schema/SubjectSchema')

const updatenotes = async (req, res) => {
    const { _id,subject,category,title,chapter, description,subtopic, tag } = req.body; 
    try {

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

        // Create a newNote object
        const Notes = mongoose.model(`${subject}`,NoteSchema);

        // Find the note to be updated and update it
        let note = await Notes.findById(_id);
        if (!note) { return res.status(404).send("Not Found") }

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }
        let note2 = await Notes.findByIdAndUpdate(_id, { $set: data }, { new: true });
        note2 ? res.status(200).json({ note2 }) : res.status(400).json("not Found Notes...");
    } catch (error) {
        console.error(error.message);
        res.status(500).send(" update notes Internal Server Error");
    }
}



module.exports = updatenotes;
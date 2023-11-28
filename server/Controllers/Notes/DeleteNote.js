
// const Notes = require('../../modals/Notes')
const mongoose = require('mongoose')
const NoteSchema = require('../../Schema/NoteSchema')

const deletnotes = async (req, res) => {
    try {
        const {subject} = req.body;
        const Notes = mongoose.model(`${subject}`,NoteSchema);
        // Find the note to be delete and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.status(200).json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}



module.exports = deletnotes;

// const Notes = require('../../modals/Notes')
const mongoose = require('mongoose')
const NoteSchema = require('../../Schema/NoteSchema')
const subjectSchema = require('../../Schema/SubjectSchema')

const fetchdata = async(req,res)=>{
    console.log("Fetch Topicss...")
    try {
        const {subject,data} = req.body;
        var sub;
        const subjects = mongoose.model('subject',subjectSchema);
        sub = await subjects.findOne({name:subject});
        if(subject=='subject' || sub){
            var Note;
            if(subject=='subject'){
                Note = mongoose.model(`${subject}`,subjectSchema);
            }
            else{
                Note = mongoose.model(`${subject}`,NoteSchema);
            }
            let Titles = await Note.find({},data);
            // console.log("Titles : ",Titles)
            res.status(200).json(Titles)
        }
        else{
            res.status(404).json({msg:"Subject Not Availabele."})
        }
        
    } catch (error) {
        console.log("Error  :  ",error)
        res.status(500).json(error)
    }
}


module.exports = fetchdata;
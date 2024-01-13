import mongoose from "mongoose"

const Schema = mongoose.Schema

const addQuestionSchema = new Schema({
    chckbxIndex: {
        type: Number,
        required: false
    },
    answersInputs: {
        type: Object,
        required: false
    },
    questionPoint: {
        type: String,
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    selectedRpValue: {
        type: String,
        required: true
    },

    questionDescText: {
        type: String,
        required: false

    },
    secTypeQsAnswers: {
        type: Object,
        required: false
    },


    thirdTypeQsAnswers: {
        type: Object,
        required: false
    }


})



const AddQuestionItem = mongoose.model('tests', addQuestionSchema)


export default AddQuestionItem


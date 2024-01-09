import { Request, Response } from "express"
import AddQuestionItem from "../models/questionModel"


export const addQuestion = (req: Request, res: Response) => {

    const questionItem = new AddQuestionItem({ ...req.body.info })


    questionItem
        .save()
        .then((data) => res.send(data))
        .catch((error) => {
            console.log(error)
            res.redirect('/')
        })


}



export const getQuestion = (req: Request, res: Response) => {
    AddQuestionItem
        .find()
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.log(error)
        })


}
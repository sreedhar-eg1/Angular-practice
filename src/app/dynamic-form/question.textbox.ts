import { QuestionBase } from "./question.base";

export class TextBox extends QuestionBase<string> {
    override controlType: string = 'textbox'
}
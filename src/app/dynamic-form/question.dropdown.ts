import { QuestionBase } from "./question.base";

export class Dropdown extends QuestionBase<string> {
    override controlType: string = 'dropdown'
}
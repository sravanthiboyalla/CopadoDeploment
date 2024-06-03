import { LightningElement,api } from 'lwc';

export default class Example extends LightningElement {
    message;
    get upperCaseMessage()
    {
        return this.message.toUpperCase();
    }
    handleChange(event)
    {
        this.message=event.target.value;
    }
}
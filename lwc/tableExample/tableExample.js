import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/GetAccountRecord.getAccountRecord';

const columns = [
    {label:'ID',fieldName:'Id'},
    { label: 'Name', fieldName: 'Name' },
    { label: 'Account Number', fieldName: 'AccountNumber', type: 'text' }
];
export default class TableExample extends LightningElement {
    column = columns;
    input='example';
    data=[];
    connectedCallback()
    {
        getAccount()
		.then(result => {
            this.data=result;
            this.error=undefined;
            
        })
        .catch(error => {
            this.error=error;
            this.data=undefined;
        });
    }
    handleChange(event)
    {
        this.input=event.target.value;
    }
}
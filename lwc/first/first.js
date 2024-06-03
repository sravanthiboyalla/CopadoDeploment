import { LightningElement, track } from 'lwc';
import getRecordTypeOfAccount from '@salesforce/apex/GetRecordTypesOfAccount.getRecordTypeOfAccount';

export default class First extends LightningElement {
    @track
    lstRecordTypes=[];
    @track
    value='';
    get current()
    {
        return this.lstRecordTypes;
    }
    connectedCallback()
    {
        this.getRecordTypeInfo();
    }
    getRecordTypeInfo()
    {
        getRecordTypeOfAccount()
		.then(result => {
            let arr=[];
            for(var i=0;i<result.length;i++)
            {
                console.log(result);
                arr.push({label:result[i].Name,value:result[i].Id});
            }
            this.lstRecordTypes=arr;
            
        })
        .catch(error => {
            this.error=error;
        });
    }
    getSelectedValue(event)
    {
        this.value = event.detail.value;
        console.log(this.value);
    }
}
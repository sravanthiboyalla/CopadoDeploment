import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/GetAccountRecord.getAccountRecord';

const columns = [
    {label:'ID',fieldName:'Id'},
    { label: 'Name', fieldName: 'Name',editable:true},
    { label: 'Account Number', fieldName: 'AccountNumber', type: 'text' },
    {
        type:'action',
        typeAttributes:{
            rowActions:[
                {label:'Show details',name:'show_details',iconName:'utility:preview'},
                {label:'remove details',name:'remove_details',iconName:'utility:close'},

            ]
        }
    }
];
export default class Example extends LightningElement {
    columns = columns;
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
    handleSelectedRows(event)
    {
        const rows=event.detail.selectedRows;
        console.log(rows);
    }
    selectedRecords(event)
    {
        const rows=this.template.querySelector('lightning-datatable').getSelectedRows();
        console.log(JSON.stringify(rows));
    }
    handleRowAction(event)
    {

    }
}
import { LightningElement,wire} from 'lwc';
import getAccounts from '@salesforce/apex/GetAccountRecord.getAccountRecord';

const column=[
    {label:'Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name',type:'text'},
    {label:'Rating',fieldName:'Rating',type:'picklist'}
]
export default class DeleteDataTableRow extends LightningElement {
    columns=column;
    accounts=[];
    @wire(getAccounts)
    records({data,error})
    {
        if(data)
        {
            this.accounts=data;
        }
        else if(error)
        {
            console.log('getting Account data');
        }
    }

}
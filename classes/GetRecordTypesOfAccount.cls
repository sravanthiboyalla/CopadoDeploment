public with sharing class GetRecordTypesOfAccount {
    @AuraEnabled
    public static List<RecordType> getRecordTypeOfAccount()
    {
        try{
            return [SELECT Id, Name FROM RecordType where SobjectType='Account'];
        }
        catch(Exception e)
        {
            throw new AuraHandledException(e.getMessage()); 
        }
    }
}
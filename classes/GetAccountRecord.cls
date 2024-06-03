public with sharing class GetAccountRecord {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecord(){
        return [SELECT Id,Name,AccountNumber,Rating from Account];
    }

}
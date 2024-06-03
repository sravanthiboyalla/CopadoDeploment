@isTest
public class GetRecordTypesOfAccountTest {
    
	@isTest
    static void getRecordTypeOfAccountTest()
    {
        Account acc=new Account();
        acc.Name='sravanthi';
        insert acc;
        Test.startTest();
        	GetRecordTypesOfAccount.getRecordTypeOfAccount();
        Test.stopTest();
    }
}
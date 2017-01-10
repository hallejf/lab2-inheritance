class SavingsAccount {
    private initialBalance:number;
    private ownerName:string; 
    private limit = 0; 

    constructor(theInitialBalance:number, theOwnerName:string) {
        this.initialBalance = theInitialBalance;
        this.ownerName = theOwnerName; 
    }

    deposit(addMore:number) {
        this.initialBalance += addMore; 
    }

    withdraw(takeAway:number) {
        if(this.limit < 3) {
           this.initialBalance -= takeAway;  
           this.limit += 1; 
        } else {
            console.log("You have exceeded your max amount of withdrawals"); 
        }
    }

    checkBalance() {
        console.log(`Current balance of ${this.ownerName}'s account:${this.initialBalance}`); 
    }
}
let user1 = new SavingsAccount(21000, "John Smith");
user1.checkBalance();
user1.withdraw(500);
user1.withdraw(5);
user1.withdraw(50);
user1.withdraw(500);
user1.checkBalance();
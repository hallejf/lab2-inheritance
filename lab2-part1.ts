class BankAccount {
    private initialBalance:number;
    private ownerName:string; 

    constructor(theInitialBalance:number, theOwnerName:string) {
        this.initialBalance = theInitialBalance;
        this.ownerName = theOwnerName; 
    }

    deposit(addMore:number) {
        this.initialBalance += addMore; 
    }

    withdraw(takeAway:number) {
        this.initialBalance -= takeAway; 
    }

    checkBalance() {
        console.log(`Current balance of ${this.ownerName}'s account:${this.initialBalance}`); 
    }
}

let user1 = new BankAccount(21000, "John Smith");
user1.checkBalance();
user1.deposit(1500);
user1.withdraw(500);
user1.checkBalance();
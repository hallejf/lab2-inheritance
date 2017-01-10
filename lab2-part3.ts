class Account {
    initialBalance:number;
    ownerName:string; 

    constructor(theInitialBalance:number, theOwnerName:string) {
        this.initialBalance = theInitialBalance;
        this.ownerName = theOwnerName; 
    }

    deposit(addMore:number) {
        this.initialBalance += addMore; 
    }

    checkBalance() {
        console.log(`Current balance of ${this.ownerName}'s account:${this.initialBalance}`); 
    }
}

class BankAccount extends Account { 
    constructor(initialBalance:number, ownerName:string) { super(initialBalance, ownerName); } 
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

class SavingsAccount extends Account {
    private initialBalance:number;
    private ownerName:string; 
    private limit = 0; 

    constructor(initialBalance:number, ownerName:string) { super(initialBalance, ownerName); } 
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
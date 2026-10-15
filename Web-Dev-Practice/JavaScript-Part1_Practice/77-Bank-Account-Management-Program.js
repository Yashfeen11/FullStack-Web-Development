class BankAccount{
  constructor(balance){
    this.balance = 0;
    this.transactions = [];
  }
  deposit(amount){
    if(amount>0){
      this.transactions.push({
        type: "deposit",
        amount: amount
      })
      this.balance+=amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    } 
    else{
      return `Deposit amount must be greater than zero.`
    }
  }
  withdraw(amount){
    if(amount>0 && amount<=this.balance){
      this.transactions.push({
        type: "withdraw",
        amount: amount
      })
      this.balance-= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    }
    else{
      return `Insufficient balance or invalid amount.`
    }
  }
  checkBalance(){
    return `Current balance: $${this.balance}`;
  }
  listAllWithdrawals(){
    let result = "";
      this.transactions.forEach((transaction)=>{
       if(transaction.type==="withdraw"){
        result+=`${transaction.amount},`;
       }
    })
        return `Withdrawals: ${result.replace(/,$/, "")}`;
  }
  listAllDeposits(){
    let result = "";
     this.transactions.forEach((transaction)=>{
      if(transaction.type==="deposit"){
        result+= `${transaction.amount},`;
      }
    });
        return `Deposits: ${result.replace(/,$/, "")}`;
  }
}
let myAccount = new BankAccount();
console.log(myAccount.deposit(10));
console.log(myAccount.deposit(35));
console.log(myAccount.deposit(90));
console.log(myAccount.deposit(90));
console.log(myAccount.deposit(90));
console.log(myAccount.withdraw(90));
console.log(myAccount.withdraw(90));
console.log(myAccount.deposit(65));
console.log(myAccount.checkBalance());
console.log(myAccount.withdraw(150));
console.log(myAccount.deposit(150));



console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());




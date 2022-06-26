/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let transaction = {
      amount,
      type,
      id:this.transactions.length+1
    }
    return transaction
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const newDeposit = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(newDeposit);
    
   },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return "снятие такой суммы не возможно, недостаточно средств.";
    }
    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(newTransaction);},
  

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for(const transaction of this.transactions){
      if(transaction.id=== id){
        return transaction;
      }
    }   
    },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total =0;
    for(const transaction of this.transactions){
      if(transaction.type === type){
        total += transaction.amount;
      }
    }return total;
  },
}

account.deposit(1500)
account.deposit(1700)
console.log(account.withdraw(1200))
console.log(account.balance)
console.log(account.transactions)
console.log(account.getTransactionDetails(2))
console.log(account.getTransactionTotal(Transaction.DEPOSIT))
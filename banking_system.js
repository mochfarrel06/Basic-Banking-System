class BankAccount {
  constructor(saldo, accountNumber) {
    this.accountNumber = accountNumber;
    this.saldo = saldo;
  }

  // This is public instance method
  deposit(amount) {
    amount = parseFloat(prompt('masukkan saldo '));
    if (isNaN(amount) || amount <= 0) {
      alert('masukkan angka yang valid');
      return;
    } else {
      this.saldo += amount;
      setTimeout(() => {
        this.displaySaldo();
        alert(`Saldo anda adalah ${this.saldo}`);
      }, 3000);
      return;
    }
  }

  withDraw(amount) {
    if (this.saldo <= 0) {
      alert('Saldo anda belum bisa ditarik');
    } else {
      amount = parseFloat(prompt('masukkan saldo yang ingin ditarik '));
      if (isNaN(amount) || amount <= 0) {
        alert('Masukkan angka yang valid');
      } else if (amount >= this.saldo) {
        alert('Saldo anda tidak bisa ditarik');
      } else {
        this.saldo -= amount;
        setTimeout(() => {
          this.displaySaldo();
          alert(`Saldo anda adalah ${this.saldo}`);
        }, 3000);
        return;
      }
    }
  }

  displaySaldo() {
    document.getElementById('view-saldo').innerHTML = this.saldo;
  }

  // Private
  #displayNumber = () => {
    console.log(`Account Number: ${this.accountNumber}`);
  };

  talk() {
    console.log(this.#displayNumber());
  }
}

// class inheritance
class AccountUser extends BankAccount {
  constructor(saldo, accountNumber) {
    super(saldo, accountNumber);
  }

  // Overriding
  deposit(amount) {
    super.deposit(amount);
  }

  // Overriding
  withDraw(amount) {
    super.withDraw(amount);
  }
}

// Objek
let money = new AccountUser(0, 'A-120');
money.displaySaldo();
money.talk();

// Function add deposit
const depositBank = () => {
  money.deposit();
};

// Funtion t
const withDrawBank = () => {
  money.withDraw();
};

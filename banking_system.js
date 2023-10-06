class BankAccount {
  constructor(saldo, accountNumber) {
    this.accountNumber = accountNumber;
    this.saldo = saldo;
  }

  deposit(amount) {
    return new Promise((resolve) => {
      amount = parseFloat(prompt('masukkan saldo '));
      setTimeout(() => {
        if (isNaN(amount) || amount <= 0) {
          alert('Masukkan tidak valid');
          return;
        } else {
          this.saldo += amount;
          this.displaySaldo();
          alert(`Saldo terbaru Rp.${this.saldo}`);
          resolve();
        }
      }, 3000);
    });
  }

  withDraw(amount) {
    return new Promise((resolve) => {
      if (this.saldo <= 0) {
        alert('Saldo anda belum bisa ditarik');
      } else {
        amount = parseFloat(prompt('masukkan saldo yang ingin ditarik '));
        setTimeout(() => {
          if (isNaN(amount) || amount <= 0) {
            alert('Masukkan angka yang valid');
          } else if (amount >= this.saldo) {
            alert('Saldo anda tidak bisa ditarik');
          } else {
            this.saldo -= amount;
            setTimeout(() => {
              this.displaySaldo();
              alert(`Saldo terbaru Rp.${this.saldo}`);
              resolve();
            }, 3000);
            return;
          }
        }, 3000);
      }
    });
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

// Function depositBank
const depositBank = () => {
  money.deposit();
};

// Funtion with draw
const withDrawBank = () => {
  money.withDraw();
};

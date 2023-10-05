class BankAccount {
  constructor(saldo) {
    this.saldo = saldo;
  }

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
    }
  }
}

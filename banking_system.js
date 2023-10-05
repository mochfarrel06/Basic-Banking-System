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
}

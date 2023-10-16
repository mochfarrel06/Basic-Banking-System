class BankAccount {
  // Constructor property dengan inisialisasi saldo 0
  constructor() {
    this.saldo = 0;
  }

  // Instance method viewSaldo untuk menampilkan saldo
  viewSaldo() {
    const currentSaldo = document.getElementById('view-saldo');
    currentSaldo.textContent = this.saldo;
  }

  // Instance method tambahSaldo untuk menambahkan saldo
  tambahSaldo() {
    // Variabel untuk menampung angka masukkan
    let number = parseFloat(prompt('Masukkan saldo yang ingin anda tambahkan ?'));
    // Kondisi yang dilakukan pada pertamnbahan
    if (isNaN(number) || number <= 0) {
      alert('Masukkan angka yang valid');
    } else {
      this.saldo += number;
      this.viewSaldo();
      alert(`Saldo anda saat ini ${this.saldo}`);
      return;
    }
  }

  // Instance method kurangiSaldo untuk mengurangi saldo
  kurangiSaldo() {
    // Kondisi jika saldo belum ada
    if (this.saldo <= 0) {
      alert('Saldo anda belum ada');
    } else {
      let number = parseFloat(prompt('Masukkan saldo yang ingin anda tarik ?'));
      if (isNaN(number) || number <= 0) {
        alert('Masukkan angka yang valid');
      } else if (number >= this.saldo) {
        alert('Saldo anda tidak mencukupi');
      } else {
        this.saldo -= number;
        this.viewSaldo();
        alert(`Saldo anda saat ini ${this.saldo}`);
        return;
      }
    }
  }
}

// Objek baru untk class bank
const bank = new BankAccount();

function addSaldo() {
  bank.tambahSaldo();
}

function deleteSaldo() {
  bank.kurangiSaldo();
}

# Challenge Chapter 2

## Basic-Banking-System

Backend JavaScript Binar Academy

### Skill Metrics

- Programming Algorithm
- Melakukan error handling
- Menerapkan Asynchronous process
- Menerapkan OOP
- Menggunakan Git

### Criteria

- Menggunakan modular class OOP (40 points)
- Mengurai proses berpikir dengan menggunakan flowchart (30 points)
- Menggunakan GitHub untuk mengelola repository (30 points)

### pseudocode
"Program Bank System"

class BankAccount
    constructor(saldo, accountNumber)
        saldo = saldo
        accountNumber = accountNumber
    end constructor

    deposit(amount)
        amount = propmt
        If amount is not a number and is less than equal to 0 Then
            Show invalid input alert
        Else the number is equal to the number and more than 0
            saldo += amount
            Show latest balance
        End If
    End deposit

    withDraw(amount)
        If Your balance is less than equal to 0 Then 
            Your balance cannot be withdrawn yet
        Else 
            amount = Enter the balance you want to withdraw at the prompt
            If amount is not a number and is less than equal to 0 Then
                Show invalid input alert
            Else If If the amount is more than the balance Then
                Your balance cannot be withdrawn
            Else
                saldo -= amount
                 Show latest balance
            End If
        End If
    End withDraw

    displaySaldo()
        view-saldo = saldo
        Displays the balance in the browser
    End displaySaldo

    <!-- Private -->
    displayNumber()
        Displays account number
    End displayNumber

    talk()
        Returns displayNumber
    end talk
End BankAccount

class AccountUser inherits BankAccount
    constructor(saldo, accountNumber)
        super(saldo, accountNumber)
    end constructor

    deposit(amount)
        super.deposit(amount)
    End deposit

    withDraw(amount) 
        super.withDraw(amount)
    End withDraw
End class AccountUser

money = create an object from the AccountUser class
depositBank = Create a function to be displayed in the browser
witthDrawBank = Create a function to be displayed in the browser


# Chapter 3

## create_and_insert
Backend JavaScript Binar Academy

### Skill Metrics
- Database
- DBMS (Database Management System)
- Query Language
- Database Indexing and Query Optimazation
- RDBMS

### Delivery
- Analisa struktur data pada challenge 2
- Rancang Entity Relationship Diagram (ERD) sederhana yang mencakup tabel-tabel yang diperlukan
- Buat file SQL dengan nama create_and_insert.sql
- Tulis perintah SQL untuk membuat tabel-tabel sesuai dengan ERD yang Anda rancang
- Isi file SQL dengan perintah SQL untuk mengisi beberapa data awal ke dalam tabel-tabel

### Criteria
- Mampu merancang dan membuat ERD (40 points)
- Membuat Database & tabel menggunakan DDL (30 points)
- Melakukan operasi CRUD dengan DML (30 points)

### Studi Kasus
- Sebuah bank ingin membuat sistem untuk melacak informasi nasabah, akun, dan transaksi mereka. 
- Mereka ingin kamu merancang database yang sesuai dengan kebutuhan mereka.

### Merancang ERD

#### Tahap 1 - Menentukan entintas yang bakal terlibat
- Pada studi kasus ini terdapat entitas:
    - Nasabah
    - Akun
    - Transaksi

#### Tahap 2 - Menentukan atribut dari masing-masing entitas
- Dari ketiga entintas tersebut, maka tentukan atributnya:
    - Nasabah: id_nasabah, nama_nasabah, alamat_nasabah
    - Akun: id_akun, saldo
    - Transaksi: no_transaksi, tanggal, jumlah

#### Tahap 3 - Menentukan hubungan (relasi) antar entitas
- Setelah menentukan atribut diatas, maka langkah selanjutnya adalah menentukan relasi atau hubungan yang bakal terjadi antar entitas:
    - Nasabah (One) memiliki Akun (Many), yaitu satu nasabah dapat memiliki beberapa akun
    - Akun (One) memiliki Transaksi (Many), yaitu satu akun dapat memiliki banyak transaksi

#### Tahap 4 - Membuat Model ERD
- 
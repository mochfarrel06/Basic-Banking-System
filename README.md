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
-- CREATE TABLE NASABAH => Membuat database Nasabah
CREATE TABLE Nasabah (
	NasabahID INT PRIMARY KEY,
	FirstName VARCHAR (50) NOT NULL,
	LastName VARCHAR (50) NOT NULL,
	Address VARCHAR (100) NOT NULL,
	Phone VARCHAR (20) NOT NULL
)

-- CREATE TABLE ACCOUNT => Membuat databse Akun
CREATE TABLE Akun (
	AkunID INT PRIMARY KEY,
	Balance MONEY NOT NULL,
	NasabahID INT NOT NULL
)

-- CREATE TABLE TRANSAKSI => Membuat Database Transaksi
CREATE TABLE Transaksi (
	TransactionID INT PRIMARY KEY,
	TransactionDate DATE NOT NULL,
	TotalAmount MONEY NOT NULL,
	AkunID INT NOT NULL
)

-- Memodifikasi Akun bahwa satu nasabah dapat memiliki beberapa akun (Relasi one to many)
ALTER TABLE Akun
ADD CONSTRAINT FK_Akun_Nasabah
FOREIGN KEY (NasabahID)
REFERENCES Nasabah(NasabahID)

-- Memodifikasi Transaksi bahwa satu akan dapat memiliki banyak transaksi (Relasi one to many)
ALTER TABLE Transaksi
ADD CONSTRAINT FK_Akun_Transaksi
FOREIGN KEY (AkunID)
REFERENCES Akun(AkunID)

-- Operasi CRUD untuk table Nasabah, Akun dan Transaksi

-- Create Nasabah
INSERT INTO Nasabah (NasabahID, FirstName, LastName, Address, Phone)
VALUES (1, 'Moch', 'Farrel', 'Kediri', '081-765')

INSERT INTO Nasabah (NasabahID, FirstName, LastName, Address, Phone)
VALUES (2, 'Dysna', 'Lola', 'Kediri', '081-225')

-- Create Akun
INSERT INTO Akun (AkunID, Balance, NasabahID)
VALUES (1, 1000000.00, 1)

INSERT INTO Akun (AkunID, Balance, NasabahID)
VALUES (2, 600000.00, 1)

INSERT INTO Akun (AkunID, Balance, NasabahID)
VALUES (3, 100000.00, 2)

INSERT INTO Akun (AkunID, Balance, NasabahID)
VALUES (4, 100000.00, 2)

-- Create Transaksi
INSERT INTO Transaksi (TransactionID, TransactionDate, TotalAmount, AkunID)
VALUES (1, '2023-10-17', 200000.00, 1)

INSERT INTO Transaksi (TransactionID, TransactionDate, TotalAmount, AkunID)
VALUES (2, '2023-10-17', 200000.00, 1)

-- Read Nasabah
SELECT * FROM Nasabah

-- Read Akun
SELECT * FROM Akun

-- Read Transaksi
SELECT * FROM Transaksi

-- Update Nasabah
UPDATE Nasabah
SET FirstName = 'John', LastName = 'Doe'
WHERE NasabahID = 2

-- Delete Nasabah
DELETE FROM Akun WHERE NasabahID = 2

	
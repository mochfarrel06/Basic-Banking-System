-- CREATE TABLE NASABAH => Membuat database Nasabah
CREATE TABLE IF NOT EXISTS Nasabah (
	nasabah_id SERIAL PRIMARY KEY,
	full_name VARCHAR (50) NOT NULL,
	address VARCHAR (100) NOT NULL,
	phone VARCHAR (20) NOT NULL,
	updated_at TIMESTAMP NOT NULL,
  	created_at TIMESTAMP NOT NULL DEFAULT NOW()
)

-- CREATE TABLE ACCOUNT => Membuat databse Akun
CREATE TABLE IF NOT EXISTS Akun (
	account_id SERIAL PRIMARY KEY,
	balance BIGINT NOT NULL,
	nasabah_id INT NOT NULL,
	updated_at TIMESTAMP NOT NULL,
  	created_at TIMESTAMP NOT NULL DEFAULT NOW()
)

-- CREATE TABLE TRANSAKSI => Membuat Database Transaksi
CREATE TABLE IF NOT EXISTS Transaksi (
	trans_id SERIAL PRIMARY KEY,
	trans_date TIMESTAMP NOT NULL,
	total_amount BIGINT NOT NULL,
	account_id INT NOT NULL,
	updated_at TIMESTAMP NOT NULL,
  	created_at TIMESTAMP NOT NULL DEFAULT NOW()
)

-- Memodifikasi Akun bahwa satu nasabah dapat memiliki beberapa akun (Relasi one to many)
ALTER TABLE Akun
ADD CONSTRAINT FK_akun_nasabah
FOREIGN KEY (nasabah_id)
REFERENCES Nasabah(nasabah_id)

-- Memodifikasi Transaksi bahwa satu akan dapat memiliki banyak transaksi (Relasi one to many)
ALTER TABLE Transaksi
ADD CONSTRAINT FK_akun_transaksi
FOREIGN KEY (account_id)
REFERENCES Akun(account_id)

-- Indexing Index
CREATE INDEX idx_user_name ON Nasabah(full_name)
SELECT * FROM Nasabah WHERE full_name = 'Moch Farrel'

-- Operasi CRUD untuk table Nasabah, Akun dan Transaksi

-- Create Nasabah
INSERT INTO Nasabah (nasabah_id, full_name, address, phone, updated_at)
VALUES 
	(1, 'Moch Farrel', 'Kediri', '081-765', NOW()),
	(2, 'Dysna Lola', 'Kediri', '081-765', NOW()),
	(3, 'Dysna Lola', 'Kediri', '081-765', NOW())

-- Create Akun
INSERT INTO Akun (account_id, balance, nasabah_id, updated_at)
VALUES 
	(1, 2000000, 1, NOW()),
	(2, 3000000, 1, NOW()),
	(3, 3500000, 1, NOW())
	
-- Create Transaksi
INSERT INTO Transaksi (trans_id, trans_date, total_amount, account_id, updated_at)
VALUES 
	(1, '2023-10-17', 50000, 1, NOW()),
	(2, '2023-10-17 09:12:45', 50000, 1, NOW()),
	(3, '2023-10-11 08:12:45', 20000, 1, NOW())

-- Read Nasabah
SELECT * FROM Nasabah ORDER BY nasabah_id

-- Read Akun
SELECT * FROM Akun ORDER BY account_id

-- Read Transaksi
SELECT * FROM Transaksi ORDER BY trans_id

-- Update Nasabah
UPDATE Nasabah
	SET full_name = 'Angel'
WHERE nasabah_id = 2

-- Delete Nasabah
DELETE FROM Akun WHERE nasabah_id = 2
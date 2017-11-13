create database automotivo
use automotivo

create table Automovel(
    id int NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    Marca VARCHAR(10) NOT NULL,
    Modelo VARCHAR(10) NOT NULL,
    Categoria VARCHAR(8) NOT NULL,
    Combustivel VARCHAR(8) NOT NULL,
    Placa VARCHAR(8) NOT NULL UNIQUE
)ENGINE = Innodb;

create table Montadora(
    id int NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    Montadora VARCHAR(20) NOT NULL,
    Estado VARCHAR(20) NOT NULL
)ENGINE = Innodb;

ALTER TABLE Automovel ADD Montadora INT;
ALTER TABLE Automovel ADD CONSTRAINT fk_pessoa FOREIGN KEY(Montadora) REFERENCES Montadora(id);
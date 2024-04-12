-- Crear tabla de suscripciones

CREATE TABLE Suscripciones (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(255) NOT NULL,
    Correo NVARCHAR(255) NOT NULL,
    Celular NVARCHAR(20)
);

-- Crear tabla de Visitas

CREATE TABLE Visitas (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Fecha DATE UNIQUE,
    VisitasDiarias INT DEFAULT 0
);

-- Crear tabla de Vacantes consultadas

CREATE TABLE Vacantes_Consultadas (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    FechaHoraConsulta DATETIME NOT NULL,
    CodigoVacante VARCHAR(255) NOT NULL
);

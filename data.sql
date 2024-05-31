-- Crear tabla Roles 
CREATE TABLE Roles (id_rol INT AUTO_INCREMENT PRIMARY KEY,
                     nombre VARCHAR(50) NOT NULL); 
                     
-- Crear tabla Usuarios
CREATE TABLE Usuarios (id_user INT AUTO_INCREMENT PRIMARY KEY,     
                    nombre VARCHAR(100) NOT NULL,     
                    email VARCHAR(100) NOT NULL UNIQUE,     
                    password VARCHAR(255) NOT NULL,     
                    id_rol INT,     
                    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol) ); 


                            
-- Crear tabla Tatuajes
CREATE TABLE Tatuajes (     id_tatuaje INT AUTO_INCREMENT PRIMARY KEY,     
                            nombre VARCHAR(100) NOT NULL,     
                            precio DECIMAL(10, 2) NOT NULL,     
                            src VARCHAR(255) NOT NULL); 
                            
                            
-- Crear tabla Ilustraciones
CREATE TABLE Ilustraciones (id_ilustracion INT AUTO_INCREMENT PRIMARY KEY,     
                            nombre VARCHAR(100) NOT NULL,     
                            precio DECIMAL(10, 2) NOT NULL,     
                            src VARCHAR(255) NOT NULL); 
                            
                        

                            
-- Crear tabla Carrito
CREATE TABLE Carrito (
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL
);

-- Crear tabla Carrito_Items
CREATE TABLE Carrito_Items (
    id_carrito_item INT AUTO_INCREMENT PRIMARY KEY,
    id_carrito INT NOT NULL,
    id_tatuaje INT,
    id_ilustracion INT,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_carrito) REFERENCES Carrito(id_carrito),
    FOREIGN KEY (id_tatuaje) REFERENCES Tatuajes(id_tatuaje),
    FOREIGN KEY (id_ilustracion) REFERENCES Ilustraciones(id_ilustracion)
);

-- Crear tabla Compras
CREATE TABLE Compras (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES Usuarios(id_user)
);

-- Crear tabla Compras_Items
CREATE TABLE Compras_Items (
    id_compra_item INT AUTO_INCREMENT PRIMARY KEY,
    id_compra INT NOT NULL,
    id_tatuaje INT,
    id_ilustracion INT,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_compra) REFERENCES Compras(id_compra),
    FOREIGN KEY (id_tatuaje) REFERENCES Tatuajes(id_tatuaje),
    FOREIGN KEY (id_ilustracion) REFERENCES Ilustraciones(id_ilustracion)
);

-- Insertar datos en la tabla roles
INSERT INTO roles (id_rol, nombre) VALUES (1, 'admin');
INSERT INTO roles (id_rol, nombre) VALUES (2, 'user');  

-- Insertar datos en la tabla ilustraciones
INSERT INTO ilustraciones (nombre, precio, src) VALUES ('El descans', 150, '/images/ilustraciones/El_descans_150.jpg');
INSERT INTO ilustraciones (nombre, precio, src) VALUES ('El mateix camí', 150, '/images/ilustraciones/El_mateix_cami_150.jpg'); 
-- Insertar datos en la tabla tatuajes
INSERT INTO tatuajes (nombre, precio, src) VALUES ('El crit que trenca', 170, '/images/TatuajesDisponibles/El_crit_que_trenca_170.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('El gerro viu', 250, '/images/TatuajesDisponibles/El_gerro_viu_250.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('Fora del forat', 400, '/images/TatuajesDisponibles/Fora_del_forat_400.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('Home acuàtic', 450, '/images/TatuajesDisponibles/Home_acuàtic_450.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('La trobada', 400, '/images/TatuajesDisponibles/La_trobada_400.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('Modelat per la tinta', 400, '/images/TatuajesDisponibles/Modelat_per_la_tinta_400.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('Petons que trenquen', 250, '/images/TatuajesDisponibles/Petons_que_trenquen_250.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('Quan els sentiments floreixen', 450, '/images/TatuajesDisponibles/Quan_els_sentiments_floreixen_450.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('Ull a la natura', 250, '/images/TatuajesDisponibles/Ull_a_la_natura_250.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('Ull de moltes mirades', 170, '/images/TatuajesDisponibles/Ull_de_moltes_mirades_170.jpg');
INSERT INTO tatuajes (nombre, precio, src) VALUES ('Ull reflexiu', 250, '/images/TatuajesDisponibles/Ull_reflexiu_250.jpg');
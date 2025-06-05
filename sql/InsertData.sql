-- Tipos de problemática
INSERT INTO CITIZENS.PROBLEM_TYPE (TYPE_NAME) VALUES 
('Servicios'), 
('Mantenimiento'), 
('Limpieza');

-- Servicios
INSERT INTO CITIZENS.PROBLEM (PROBLEM_TYPE_ID, PROBLEM_NAME) VALUES
(1, 'Electricidad fuera de servicio'),
(1, 'Agua fuera de servicio');

-- Mantenimiento
INSERT INTO CITIZENS.PROBLEM (PROBLEM_TYPE_ID, PROBLEM_NAME) VALUES
(2, 'Carretera en mal estado'),
(2, 'Estructuras del parque en mal estado'),
(2, 'Alumbrado público en mal estado'),
(2, 'Señalizaciones en mal estado'),
(2, 'Aceras en mal estado'),
(2, 'Falta de aceras'),
(2, 'Fuga de agua'),
(2, 'Puentes peatonales y/o vehiculares en mal estado'),
(2, 'Cementerio en mal estado'),
(2, 'Edificios públicos municipales en mal estado');

-- Limpieza
INSERT INTO CITIZENS.PROBLEM (PROBLEM_TYPE_ID, PROBLEM_NAME) VALUES
(3, 'Parque sucio'),
(3, 'Caños obstruidos'),
(3, 'Aceras y/o calles con acumulación de residuos'),
(3, 'Fuentes de agua con acumulación de basura');



-- Cantones
INSERT INTO citizens.canton (canton_name) VALUES
('Alajuela'),
('San Ramón'),
('Grecia'),
('San Mateo'),
('Atenas'),
('Naranjo'),
('Palmares'),
('Poás'),
('Orotina'),
('San Carlos'),
('Zarcero'),
('Valverde Vega'),
('Upala'),
('Los Chiles'),
('Guatuso');


-- Distritos
-- Cantón: Alajuela (ID 1)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Alajuela', 1),
('San José', 1),
('Carrizal', 1),
('San Antonio', 1),
('Guácima', 1),
('San Isidro', 1),
('Sabanilla', 1),
('San Rafael', 1),
('Río Segundo', 1),
('Desamparados', 1),
('Turrúcares', 1),
('Tambor', 1),
('Garita', 1),
('Sarapiquí', 1);

-- Cantón: San Ramón (ID 2)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('San Ramón', 2),
('Santiago', 2),
('San Juan', 2),
('Piedades Norte', 2),
('Piedades Sur', 2),
('San Rafael', 2),
('San Isidro', 2),
('Ángeles', 2),
('Alfaro', 2),
('Volio', 2),
('Concepción', 2),
('Zapotal', 2),
('Peñas Blancas', 2);

-- Cantón: Grecia (ID 3)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Grecia', 3),
('San Isidro', 3),
('San José', 3),
('San Roque', 3),
('Tacares', 3),
('Puente de Piedra', 3),
('Bolívar', 3);

-- Cantón: San Mateo (ID 4)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('San Mateo', 4),
('Desmonte', 4),
('Jesús María', 4),
('Labrador', 4);

-- Cantón: Atenas (ID 5)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Atenas', 5),
('Jesús', 5),
('Mercedes', 5),
('San Isidro', 5),
('Concepción', 5),
('San José', 5),
('Santa Eulalia', 5),
('Escobal', 5);

-- Cantón: Naranjo (ID 6)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Naranjo', 6),
('San Miguel', 6),
('San José', 6),
('Cirrí Sur', 6),
('San Jerónimo', 6),
('San Juan', 6),
('El Rosario', 6),
('Palmitos', 6);

-- Cantón: Palmares (ID 7)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Palmares', 7),
('Zaragoza', 7),
('Buenos Aires', 7),
('Santiago', 7),
('Candelaria', 7),
('Esquipulas', 7),
('La Granja', 7);

-- Cantón: Poás (ID 8)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('San Pedro', 8),
('San Juan', 8),
('San Rafael', 8),
('Carrillos', 8),
('Sabana Redonda', 8);

-- Cantón: Orotina (ID 9)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Orotina', 9),
('El Mastate', 9),
('Hacienda Vieja', 9),
('Coyolar', 9),
('La Ceiba', 9);

-- Cantón: San Carlos (ID 10)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Quesada', 10),
('Florencia', 10),
('Buenavista', 10),
('Aguas Zarcas', 10),
('Venecia', 10),
('Pital', 10),
('La Fortuna', 10),
('La Tigra', 10),
('La Palmera', 10),
('Venado', 10),
('Cutris', 10),
('Monterrey', 10),
('Pocosol', 10);

-- Cantón: Zarcero (ID 11)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Zarcero', 11),
('Laguna', 11),
('Tapesco', 11),
('Guadalupe', 11),
('Palmira', 11),
('Zapote', 11),
('Brisas', 11);

-- Cantón: Valverde Vega (ID 12)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Sarchí Norte', 12),
('Sarchí Sur', 12),
('Toro Amarillo', 12),
('San Pedro', 12),
('Rodríguez', 12);

-- Cantón: Upala (ID 13)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Upala', 13),
('Aguas Claras', 13),
('San José', 13),
('Bijagua', 13),
('Delicias', 13),
('Dos Ríos', 13),
('Yolillal', 13),
('Canalete', 13);

-- Cantón: Los Chiles (ID 14)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('Los Chiles', 14),
('Caño Negro', 14),
('El Amparo', 14),
('San Jorge', 14);

-- Cantón: Guatuso (ID 15)
INSERT INTO citizens.district (district_name, canton_id) VALUES
('San Rafael', 15),
('Buenavista', 15),
('Cote', 15),
('Katira', 15);
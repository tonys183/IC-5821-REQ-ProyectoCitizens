CREATE SCHEMA citizens;
CREATE TYPE citizens.role AS ENUM ('NEIGHBOR', 'MUNICIPALITY');

-- Tabla de usuarios
CREATE TABLE citizens.users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role citizens.role DEFAULT 'NEIGHBOR' NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Perfil de vecinos
CREATE TABLE citizens.neighbor_profiles (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  second_last_name VARCHAR(100),
  identification INTEGER UNIQUE NOT NULL,
  phone_number INTEGER,
  user_id INTEGER UNIQUE NOT NULL REFERENCES citizens.users(id) ON DELETE CASCADE
);

-- Perfil de municipalidades
CREATE TABLE citizens.municipality_profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  canton VARCHAR(100) NOT NULL,
  user_id INTEGER UNIQUE NOT NULL REFERENCES citizens.users(id) ON DELETE CASCADE
);

-- Tipos de problemas
CREATE TABLE citizens.problem_type (
  problem_type_id SERIAL PRIMARY KEY,
  type_name TEXT
);

-- Problemas
CREATE TABLE citizens.problem (
  problem_id SERIAL PRIMARY KEY,
  problem_type_id INTEGER REFERENCES citizens.problem_type(problem_type_id),
  problem_name TEXT
);

-- Cantones
CREATE TABLE citizens.canton (
  canton_id SERIAL PRIMARY KEY,
  canton_name VARCHAR(100)
);

-- Distritos
CREATE TABLE citizens.district (
  district_id SERIAL PRIMARY KEY,
  district_name VARCHAR(100),
  canton_id INTEGER REFERENCES citizens.canton(canton_id)
);

-- Reportes
CREATE TABLE citizens.report (
  report_id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES citizens.users(id) ON DELETE SET NULL ON UPDATE CASCADE,
  report_title VARCHAR(100),
  problem_id INTEGER REFERENCES citizens.problem(problem_id),
  canton_id INTEGER REFERENCES citizens.canton(canton_id),
  district INTEGER REFERENCES citizens.district(district_id),
  neighborhood VARCHAR(100),
  street VARCHAR(100),
  report_date DATE,
  report_time TIME,
  status VARCHAR(100) DEFAULT 'Waiting' CHECK (status IN ('Waiting', 'In Progress', 'Completed')),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Alertas
CREATE TABLE citizens.alert (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  author_id INTEGER REFERENCES citizens.users(id) ON DELETE CASCADE
);
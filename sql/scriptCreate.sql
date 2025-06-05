CREATE SCHEMA citizens;

CREATE TABLE citizens.problem_type (
	problem_type_id SERIAL PRIMARY KEY,
	type_name TEXT
);

CREATE TABLE citizens.problem (
	problem_id SERIAL PRIMARY KEY,
	problem_type_id INTEGER REFERENCES citizens.problem_type(problem_type_id),
	problem_name TEXT
);

CREATE TABLE citizens.canton (
	canton_id SERIAL PRIMARY KEY,
	canton_name VARCHAR(100)
);

CREATE TABLE citizens.district (
	district_id SERIAL PRIMARY KEY,
	district_name VARCHAR(100),
	canton_id INTEGER REFERENCES citizens.canton(canton),
);

CREATE TABLE citizens.neighbor (
	identification SERIAL PRIMARY KEY,
	first_name VARCHAR(100),
	last_name VARCHAR(100),
	second_last_name VARCHAR(100),
	email TEXT,
	password TEXT,
	phone_number INTEGER
);

CREATE TABLE citizens.report (
	report_id SERIAL PRIMARY KEY,
	neighbor_id INTEGER REFERENCES citizens.neighbor(identification),
	report_title VARCHAR(100),
	problem_id INTEGER REFERENCES citizens.problem(problem_id),
	canton_id INTEGER REFERENCES citizens.canton(canton_id),
	district INTEGER REFERENCES citizens.district(district_id),
	neighborhood VARCHAR(100),
	street VARCHAR(100),
	report_date DATE,
	report_time TIME,
	status VARCHAR(100) DEFAULT 'Waiting' CHECK (status IN ('Waiting', 'In Progress', 'Completed')),
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE citizens.municipality (
	muni_id SERIAL PRIMARY KEY,
	email TEXT,
	password TEXT
);

CREATE TABLE citizens.alert (
	alert_id SERIAL PRIMARY KEY,
	muni_id INTEGER REFERENCES citizens.municipality(muni_id),
	alert_title VARCHAR(100),
	alert_date DATE,
	alert_time TIME,
	description TEXT
);
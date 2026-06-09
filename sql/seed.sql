-- Schema
CREATE TABLE IF NOT EXISTS bedrifter (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  vlan_id INTEGER NOT NULL,
  subnet TEXT NOT NULL,
  gateway TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  bedrift_id INTEGER REFERENCES bedrifter(id)
);

CREATE TABLE IF NOT EXISTS devices (
  id SERIAL PRIMARY KEY,
  bedrift_id INTEGER REFERENCES bedrifter(id),
  name TEXT NOT NULL,
  ip_address TEXT,
  type TEXT,
  is_online BOOLEAN DEFAULT false
);

-- Seed data
INSERT INTO bedrifter (name, vlan_id, subnet, gateway) VALUES
  ('Bedrift A', 10, '192.168.10.0/24', '192.168.10.1'),
  ('Bedrift B', 20, '192.168.20.0/24', '192.168.20.1'),
  ('Bedrift C', 30, '192.168.30.0/24', '192.168.30.1');

-- Passwords are all "password123" (bcrypt hashed)
INSERT INTO users (email, password_hash, name, bedrift_id) VALUES
  ('admin@bedrift-a.no', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Ola Nordmann', 1),
  ('admin@bedrift-b.no', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Kari Hansen', 2),
  ('admin@bedrift-c.no', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Per Olsen', 3);

INSERT INTO devices (bedrift_id, name, ip_address, type, is_online) VALUES
  (1, 'PC0',      '192.168.10.11', 'pc',      true),
  (1, 'Printer0', '192.168.10.12', 'printer', true),
  (2, 'PC1',      '192.168.20.11', 'pc',      true),
  (2, 'Printer1', '192.168.20.12', 'printer', false),
  (3, 'PC2',      '192.168.30.11', 'pc',      true),
  (3, 'Printer2', '192.168.30.12', 'printer', true);
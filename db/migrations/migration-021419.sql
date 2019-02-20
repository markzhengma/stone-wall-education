\c stonewall_db;

CREATE TABLE IF NOT EXISTS resources (
    id SERIAL PRIMARY KEY,
    title VARCHAR(10485760) NOT NULL,
    intro VARCHAR(10485760),
    img VARCHAR(10485760),
    link VARCHAR(10485760) NOT NULL,
    category INT
);
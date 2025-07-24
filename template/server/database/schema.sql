CREATE TABLE client_game (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL
);

CREATE TABLE video_game (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  video_name VARCHAR(30) NOT NULL,
  date_creation VARCHAR(20) NOT NULL,
  type ENUM("action", "RPG", "FPS") DEFAULT NULL,
  client_game_id INT UNSIGNED,
  FOREIGN KEY (client_game_id) REFERENCES client_game(id) ON DELETE CASCADE
);

INSERT INTO client_game (email, password, firstname, lastname)
VALUES
("john@gmail.com", "coco1234", "Corentin", "Thebaud"),
("john44@gmail.com", "lolo123", "Anthony", "Parabole");

INSERT INTO video_game (video_name, date_creation, type, client_game_id)
VALUES
("Elden Ring", "2022", "RPG", 1),
("The Witcher 3: Wild Hunt", "2015", "RPG", 1),
("Final Fantasy VII Remake", "2020", "RPG", 2),
("Skyrim", "2011", "RPG", 2);









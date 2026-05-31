
CREATE TABLE IF NOT EXISTS Users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  city VARCHAR(100) NOT NULL,
  registration_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS Events (
  event_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  city VARCHAR(100) NOT NULL,
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  status ENUM ('upcoming','completed','cancelled') NOT NULL,
  organizer_id INT,
  CONSTRAINT fk_events_organizer
    FOREIGN KEY (organizer_id) REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS Sessions (
  session_id INT PRIMARY KEY AUTO_INCREMENT,
  event_id INT,
  title VARCHAR(200) NOT NULL,
  speaker_name VARCHAR(100) NOT NULL,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL,
  CONSTRAINT fk_sessions_event
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);


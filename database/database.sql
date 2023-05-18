CREATE TABLE tickets (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    ticket_status VARCHAR(50) NOT NULL DEFAULT "To Do",
    ticket_priority VARCHAR(50) NOT NULL,
    ticket_subject VARCHAR(50) NOT NULL,
    creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ticket_description VARCHAR(255) NOT NULL
)
CREATE TABLE tickets (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL DEFAULT 65349182,
    ticket_status VARCHAR(50) NOT NULL DEFAULT "To Do",
    ticket_priority VARCHAR(50) NOT NULL,
    ticket_subject VARCHAR(50) NOT NULL,
    creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ticket_description VARCHAR(255) NOT NULL
)  ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO tickets (user_id, ticket_status, ticket_priority, ticket_subject, creation_date, ticket_description)
VALUES
  ('82741563', 'To Do', 'High', 'Login issue', '2023-05-18 10:00:00', 'Unable to log in to the system.'),
  ('53682417', 'In Progress', 'Medium', 'Network connectivity problem', '2023-05-18 11:30:00', 'Experiencing intermittent network connectivity issues.'),
  ('94170523', 'To Do', 'Low', 'Software update', '2023-05-18 14:15:00', 'Requesting an update to the latest version of the software.'),
  ('20835974', 'Done', 'High', 'Access privileges', '2023-05-18 16:45:00', 'Requesting additional user access privileges.')
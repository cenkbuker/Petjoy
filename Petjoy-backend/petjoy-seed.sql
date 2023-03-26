INSERT INTO users (username, password, first_name, last_name, email, is_admin)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        'joel@joelburton.com',
        FALSE),
       ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'Admin!',
        'joel@joelburton.com',
        TRUE);

INSERT INTO products ( name,
                       count_in_stock,
                       price,
                       description,
                       img_url)
VALUES 
('Chew Well Ball', 25, 7.99,
        'Our Joyhound Ball Treat Dispenser provides an interactive treat dispensing activity for your dog. Dogs love chew toys and dog treats unconditionally, and our special treat dispenser gives your pet access to both in one engaging toy. Regular use helps tame their chewing activity by focusing it in a healthier way. This durable dispenser toy also works to clean teeth as your pup happily chews the day away.', '/img/Chewball.jpeg'),

('ball', 25, 7.99,
        'Description', '/img/Chewball.jpeg')


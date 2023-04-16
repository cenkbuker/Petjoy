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

INSERT INTO products (name, count_in_stock, price, description, img_url)
VALUES 
  ('KONG Classic Dog Toy', 25, 12.99, 'The KONG Classic Dog Toy is a must-have for any dog who loves to chew. Made of durable, chew-resistant rubber, this toy can withstand even the toughest chewers. It can be stuffed with treats to provide an added challenge for your pup and keep them occupied for hours on end.', 'https://m.media-amazon.com/images/I/61WFOz9XtoL._AC_SX679_.jpg'),
  ('SmartyKat Catnip Toys', 15, 9.99, 'The SmartyKat Catnip Toy Set is perfect for any cat who loves to play. It includes a variety of toys filled with certified organic catnip to stimulate your cat''s natural instincts. These toys are made with high-quality materials that can withstand even the most aggressive play.', 'https://i5.walmartimages.com/asr/ed50bab2-55d2-418f-af96-33fcd7498700.004288cb02e75d2f5d651c6cb2790a78.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'),
  ('Furhaven Pet Dog Bed', 5, 39.99, 'The Furhaven Pet Dog Bed is a cozy and comfortable bed that provides support for your dog''s joints and muscles. The bed is made with high-density foam and a soft, plush cover that is removable and machine-washable. It also has a water-resistant base to protect against accidents and spills.', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStCEI0qooTHNbKMFXwzmRjg5tzskUJsCXSUUT3EQJqDQjLUaPyOz9UCP_NOawEXX30A14AE80nBOz_AwRsN7lKElguJO2QGj-dPQd7v8lGV-ogqMS3aEAHhA'),
  ('Outward Hound Fun Feeder', 10, 12.99, 'The Outward Hound Fun Feeder is a unique bowl that slows down your dog''s eating and promotes healthy digestion. The maze-like design forces your dog to work for their food, providing mental stimulation and preventing bloating and other digestive issues. It is made with non-toxic, food-grade materials that are easy to clean.', 'https://cdn11.bigcommerce.com/s-asivtkjxr8/images/stencil/1280x1280/products/2848/10976/tur-l__59047.1635866361.jpg?c=1'),
  ('Catit Senses 2.0 Food Tree', 15, 24, 'The Catit Senses 2.0 Food Tree is a puzzle feeder that provides mental stimulation and helps slow down your cat''s eating. It features multiple levels and compartments that you can fill with dry food or treats, and is easy to disassemble and clean.', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjCyIoQ-HRrcmYe6ZGkLSLIIkj--i7hzPrRII9L1GFD-uvFNIJZ2uJ1cqwn9tzulfVQsBZJUJweqIEFvSNqhE4js6ozZcn');
  ('Rabbitgoo Dog Harness', 20, 21, 'The Rabbitgoo Dog Harness is a comfortable and adjustable harness that provides better control over your dog during walks. It features a no-pull front clip and a back clip for added versatility, and is made with breathable mesh and padded straps for comfort.', 'https://m.media-amazon.com/images/I/71QaVHD-ZDL._AC_SL1500_.jpg'),
  ('PetFusion Ultimate Cat Scratcher Lounge', 8, 49, 'The PetFusion Ultimate Cat Scratcher Lounge is a 2-in-1 scratcher and lounge that provides a comfortable and durable place for your cat to scratch and rest. It is made with recycled cardboard and non-toxic glue, and features a reversible design for extended use.', 'https://m.media-amazon.com/images/I/71AQkgZmr0L._AC_SL1500_.jpg'),
  ('Chuckit! Ultra Ball', 30, 7, 'The Chuckit! Ultra Ball is a durable and high-bouncing ball that is perfect for games of fetch with your dog. It is made with high-quality rubber and features a bright orange color for easy visibility.', 'https://m.media-amazon.com/images/I/81an+TQ0ouL._AC_SL1500_.jpg')


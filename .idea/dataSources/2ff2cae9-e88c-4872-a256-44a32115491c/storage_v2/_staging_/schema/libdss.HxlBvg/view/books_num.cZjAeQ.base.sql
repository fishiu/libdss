create definer = root@localhost view books_num as
select `libdss`.`books`.`bookID`  AS `bookID`,
       `libdss`.`books`.`pubdate` AS `pubdate`,
       `book_num`.`booksnum`      AS `booksnum`
from (`libdss`.`books`
         join `libdss`.`book_num` on ((`libdss`.`books`.`bookID` = `book_num`.`bookID`)));


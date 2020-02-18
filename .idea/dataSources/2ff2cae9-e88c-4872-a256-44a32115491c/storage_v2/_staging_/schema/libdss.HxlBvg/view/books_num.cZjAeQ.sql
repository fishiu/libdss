create definer = root@localhost view books_num as
select `books`.`bookID`      AS `bookID`,
       `books`.`pubdate`     AS `pubdate`,
       `books`.`price`       AS `price`,
       `books`.`firstKind`   AS `kind`,
       `book_num`.`booksnum` AS `booksnum`
from (`books`
         join `book_num` on ((`books`.`bookID` = `book_num`.`bookID`)));
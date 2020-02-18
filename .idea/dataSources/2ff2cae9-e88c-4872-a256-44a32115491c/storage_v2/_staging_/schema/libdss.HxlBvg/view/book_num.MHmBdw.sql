create definer = root@localhost view book_num as
select `libdss`.`cobooks`.`bookID` AS `bookID`, sum(`libdss`.`cobooks`.`pos`) AS `booksnum`
from `libdss`.`cobooks`
group by `libdss`.`cobooks`.`bookID`;

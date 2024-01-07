---------------------------------------------------------------------------------------------------------
create database highscore;
------------
CREATE TABLE table_name (
    id int,
    games varchar,
    age int
); 
------------
CREATE TABLE table_name2 (
    id int,
    games varchar,
    age int
); 
------------
CREATE TABLE table_name3 (
    GameID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (GameID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
); 
---------------------------------------------------------------------------------------------------------

 INSERT INTO table_name (id, games, age)
 VALUES (id, games, age) 

---------------------------------------------------------------------------------------------------------
SELECT * FROM table_name
DELETE FROM table_name WHERE age;

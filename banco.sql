create database banco_node;
use banco_node;

create table usuario(
id INT auto_increment,
nome varchar(30),
sobrenome varchar(30),
email varchar(50),
nome_usuario varchar(50) UNIQUE key,
genero varchar(100),
senha varchar(50),
primary key(id));

select * from usuario;
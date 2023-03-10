drop database if exists usuarios;
create database usuarios;
use usuarios;

create table pessoas(
	id_pessoa integer not null auto_increment, 
	nome varchar(40) not null,
	primary key (id_pessoa)
);
create table telefones(
	id_pessoa integer not null,
	telefone varchar(15) not null,
	constraint fk_tel_pess foreign key (id_pessoa)
	references pessoas(id_pessoa) on delete cascade
);
create table usuarios(
	id_pessoa integer not null,
	login varchar(20) not null unique,
	senha varchar(50) not null,
	tipo varchar(15) not null,
	constraint fk_possui foreign key (id_pessoa)
	references pessoas(id_pessoa)
);

create view vw_pessoas as
select p.id_pessoa, p.nome, t.telefone
from pessoas p left join telefones t
on p.id_pessoa = t.id_pessoa
order by p.id_pessoa;

insert into pessoas(nome) values
("Leonardo Silva"),
("Rodolpho Vieira"),
("Jurema Andrade"),
("Marcia Souza"),
("Rodrigo Vieira"),
("Robesio"),
("Fulano"),
("Ciclano"),
("Maria Silva");

insert into telefones values 
(1,"19 45677-7897"),
(1,"19 98787-7897"),
(6,"19 99999-1111"),
(7,"19 98888-0000"),
(8,"11 93333-5555"),
(8,"11 92222-4444"),
(3,"19 88888-8888"),
(5,"19 46546-7879");

insert into usuarios values
(1,"silva.leonar",md5("Senh@123"),"comum"),
(3,"andrade.jure",md5("Senh@123"),"comum"),
(4,"souza.marcia",md5("Senh@123"),"adm"),
(6,"robesio@gmail",md5("1"),"comum"),
(7,"fulano@gmail",md5("1"),"comum"),
(8,"ciclano@gmail",md5("1"),"adm"),
(9,"silva.maria",md5("Senh@123"),"adm");

select * from pessoas;
select * from telefones;
select * from vw_pessoas;
select * from usuarios;
show tables;
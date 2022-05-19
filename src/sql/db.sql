CREATE TABLE Uporabnik(
	uporabnikId int,
	ime varchar(20),
	priimek varchar(20),
	uporabniskoIme varchar(20),
	obcinaId int,
	email varchar(50),
	geslo varchar(50),
	slika bytea,
	soprocila int[],
	primary key (uporabnikId)
);

CREATE TABLE Sporocilo(
	sporociloId int,
	posiljateljId int,
	prejemnikId int,
	vsebina varchar[],
	primary key (sporociloId)
);

CREATE TABLE Novica(
	novicaId int,
	naslov varchar(100),
	avtorId int,
	datum date,
	vsebina varchar(10000),
	obcinaId int,
	lokacija varchar(500),
	primary key (novicaId)
);

CREATE TABLE Predlog(
	predlogId int,
	naslov varchar(100),
	avtorId int,
	datum date,
	vsebina varchar(10000),
	obcinaId int,
	steviloVseckov int,
	steviloNevseckov int,
	lokacija varchar(500),
	primary key (predlogId)
);

alter table Novica add foreign key (avtorId) references Uporabnik(uporabnikId);

alter table Predlog add foreign key (avtorId) references Uporabnik(uporabnikId);

alter table Sporocilo add foreign key (posiljateljId) references Uporabnik(uporabnikId), add foreign key (prejemnikId) references Uporabnik(uporabnikId);
# Actividad

## Un centro cultural quiere desarrollar un sistema para mantener y consultar la información de la historia de la música.

### SQL tables 

#### Para esto se organiza la información por épocas, de las cuales se sabe el nombre único,diferentes características relevantes, el período (año de comienzo y año final) y los géneros musicales de la época.

> - Create Table Epocas (
>   * Id Int Not Null Primary Key, 
>   * Nombre Varchar2(30),
>   * Inicio Date,
>   * Final Date,
>   * Caracteristicas varchar2(400)
>  - );

#### A su vez, de cada género, se quiere saber su nombre único, diversas características, sus orígenes, los músicos asociados a ese género y los instrumentos que intervenían en la ejecución de ese género.

> - Create Table Generos (
>   * Id Int Not Null Primary Key,
>   * Nombre Varchar(30),
>   * Origenes Varchar(200),
>   * IdEpoca Int,
>   * FOREIGN KEY (IdEpoca) REFERENCES Epocas(Id)
> - );

### Sabemos que una época tiene varios géneros, pero que un género pertenece a una sola época.

####  De cada músico, se sabe el nombre único, fecha de nacimiento, fecha de muerte y una historia de su vida.

> - Create Table Musicos (
>   * Id Int Not Null Primary Key,
>   * Nombre Varchar(30),
>   * Nacimiento Date,
>   * Muerte Date,
>   * Bibliografia Varchar2(300),
>   * IdGenero Int,
>   * IdObrasFamosas Int,
>   * FOREIGN KEY (IdGenero) REFERENCES Generos(Id),
>   * FOREIGN KEY (IdObrasFamosas) REFERENCES ObrasFamosas(Id)
> - );

### Un género tiene varios músicos, pero un músico pertenece a un solo género.

#### De cada instrumento musical se tiene el nombre único, una foto, el lugar donde se creó, quién fue elcreador, el tipo de instrumento (viento, teclado, etc.) y los materiales con que se hace.

> - Create Table Instrumentos (
>   * Id Int Not Null Primary Key,
>   * Nombre Varchar(30),
>   * LugarCrear Varchar2(300),
>   * Creador Varchar2(300),
>   * TpInstrumento Varchar2(300),
>   * Materiales Varchar2(300),
>   * IdGenero Int,
>   * FOREIGN KEY (IdGenero) REFERENCES Generos(Id)
> - );

### En un género se usan varios instrumentos, y un instrumento aparece en varios géneros.

#### Adicionalmente, se quiere conocer la lista de obras famosas que se hicieron dentro de un género. De las obras famosas, se conoce un nombre único, el año en que se hizo, los músicos autores y la partitura. 

> - Create Table ObrasFamosas (
>   * Id Int Not Null Primary Key,
>   * Nombre Varchar(30),
>   * Lanzamineto Date,
>   * Partitura Varchar2(300),
>   * IdGenero Int,
>   * FOREIGN KEY (IdGenero) REFERENCES Generos(Id)
> - );


### Tenga en cuenta que una obra famosa pertenece a un solo género, que una obra famosa la componen


### SQL Disparadores 
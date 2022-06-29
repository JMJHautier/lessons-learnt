si on a deux tables: 

- mentor: id, name
- quote: id, mentor, text

Comment faire pour que quote.mentor  renvoit mentor.name?



# Créer une foreign key

quote.mentor doit prendre la valeur de mentor.id

C'est un peu perturbant, mais quote.mentor sera donc un integer. C'est à travers le select request qu'on renverra un string


# Faire une query avec des alias 

Voilà la query finale: 

`SELECT q.id, m.name AS mentor, q.text FROM Quote q INNER JOIN mentor m ON m.id = q.mentor;` 


`q` et `mentor` renvoient à quote et mentor. On aurait pu écrire, ça aurait eu le même résultat: 

`SELECT Quote.id, Mentor.name AS mentor, Quote.text FROM Quote INNER JOIN mentor ON mentor.id = Quote.mentor;`

`AS` est un alias. Sans lui, la query aurait renvoyé "name" comme nom de colonne au lieu de mentor.


encore plus court, en ajoutant une *:

`SELECT q.*, m.name AS mentorFROM Quote q INNER JOIN mentor m ON m.id = q.mentor;` 

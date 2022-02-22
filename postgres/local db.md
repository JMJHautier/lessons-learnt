quelques leçons apprises

1) créer la base de donnée en local

pour ça il faut créer la base de données. cela nécessite possiblement de: 
- installer postgresSQL
- -modifier le fichier pg_hba.conf, et indiquer "md5" dans la colonne
- mettre à jour les variables environementales liés à SQL, pour pouvoir utiliser les commandes psql
- se connecter sur postgres avec la commande:
`psql -U postgres`
postgres peut être remplacé par le nom d'un utilisateur qui doit être OWNER

une fois connecté, il suffit d'entrer l'inscruction

`CREATE DATABASE nomDeLaBaseDeDonnées`


2) Il faut ensuite dans son app back donner les coordonnées pour se connecter! 


3) mettre en place sqitch
j'ai d'abord isntallé un truc genre "strawberry" via chocolatey. Ensuite, j'ai utilisé une commande cnam proposé sur le site de sqitch MAIS en passant par powershell, pas gitbash.
Cela prend BEAUCOUP de temps (au moins une heure)
ensuite, 
`sqitch deploy`

4) faire des seeds

`psql -U {ownerUser or postgres} -d yourDatabase -f relativePathToData/xth-seed.sql`

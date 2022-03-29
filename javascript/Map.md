```javascript 
const exams = new Map([
  ['jean', 10], 
  ['ilona', 15],
  ['leo', 20]
])

console.log(exams)
```
![image](https://user-images.githubusercontent.com/13255701/160671461-83395c90-abbe-4a37-878c-ec5e3cd8c73e.png)


# map vs objet

- map est itérable (l'ordre compte) comme un array
- map a une longueur (Map.size) comme un array
- map peut avoir des keys qui sont autre chose que des strings (je vois pas trop à quoi ça sert cependant)

malheureusement, même si ça ressemble à un array, on peut pas utiliser .map() ou .forEach()

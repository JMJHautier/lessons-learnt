React ne render pas les expressions nulles, false etc.

---

# timeout, je te hais

timeout est chiant à gérer sur react, à cause des re-render qui peuvent en créer à la chaine, ou interrompre les timeout existant
Je voulais avoir un timeout affichant un message d'erreur, et ce timeout devait être cleared si les données nécessaires étaient chargés.
Voilà ce que j'ai du faire:

```javascript
const [checkIfExist, setCheckIfExist] = useState("no timeout yet");

useEffect(() => {
  if (allCards) {
    clearTimeout(checkIfExist);
    setLoading(false);
  } else {
    if (checkIfExist === "no timeout yet") {
      setCheckIfExist(
        setTimeout(() => {
          setLoading(false);
          setShowError(true);
        }, 1000)
      );
      console.log("timeout créé");
    }
  }
}, [allCards, checkIfExist]);
```

une ressource sur le sujet: https://stackoverflow.com/questions/57995978/why-is-cleartimeout-not-clearing-the-timeout-in-this-react-component

# Cannot flush updates when React is already rendering

Attention, on doit éviter de modifier le DOM avant que le composant soit monté (par exemple en callant des if en dehors de useEffect ;)) 
https://stackoverflow.com/questions/58040892/cannot-flush-updates-when-react-is-already-rendering

# intégrer des images

Pour le src des images, si on utilise un lien relatif, React considère que le dossier "public" est la racine! Donc pas besoin d'ajouter pleins de ../../.. pour sortir des dossiers composants ;) 

il suffit  de mettre son image dans /public puis, dans ses composants: 
```
<img src="/image.jpg"/>
```

# Diffing / reconciliation et les keys

Quand React compare le DOM virtuel et le vrai DOM, il le fait récursivement, allant enfant après enfant, sibling après sibling.
Autant que possible, il évite de répéter le travail: si certaines nodes ne sont pas modifiés, inutile de les re-render.
C'est ce qui rend si important les "keys" dans les listes: elles permettent d'éviter à React de re-render tous les éléments de la liste, si, par exemple, on a ajouté un élément au début.

C'est avant tout une question de performance. si React n'est pas sur, il va juste tout re-render. 

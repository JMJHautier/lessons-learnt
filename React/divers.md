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

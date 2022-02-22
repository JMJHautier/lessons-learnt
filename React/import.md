# dynamic imports

exemple d'un import dynamique pour changer le contenu en fonction des langues! 

```javascript

useEffect(()=> {
    const cleantTitle = projectTitle.toLowerCase().replace("'", "").replace(" ", "")
    import(`../../text/projects/slides/${cleantTitle}`).then((response)=> {
      const {tab1, tab2, tab3, tab4} = response
      setProjectTabs(prevState => (Object.values({
        tab1:tab1[language],
        tab2:tab2[language],
        tab3: tab3[language],
        tab4: tab4[language]
      }
      )
    ))
    })

  }, [projectTitle, language])

```

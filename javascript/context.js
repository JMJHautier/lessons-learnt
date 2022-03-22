{/*JS crée trois contextes: 

le contexte global (aka, lexicalement, aka là où toute l'applicaiton est créé)

puis

le contexte de PlanterUnClou (aka, lexicalement, aka là où la fonction a été créé)

puis

le contexte de taperLeClou (aka, lexicalement, aka où la fonction a été créé), car la fonction PlanterUnClou l'appelle


Dans chaque contexte, on retrouve: 
* le mot clé "this" (pour sa valeur, voir le md qui correspond)
* l'environnement lexical, qui contient: 
  son propre environement (environement record)
  son environnement extérieur (reference to outer environment)

L'environement extérieur est le premier à être déterminé (lors d'une "creation phase").
L'environement intérieur est ensuite déterminé (lors de l'execution phase)

Les fonctions sont ensuite executés: quand il a besoin d'une variable ou d'une fonction, JS regarde d'abord le l'environement intérieur puis extérieur. */}

{
  //1 : taperLeClou utilise son environement intérieur (l'argument "outil")
  function planterUnClou () {
    const outil = "marteau"
    return taperLeClouAvec(outil)
  }
  
  function taperLeClouAvec (monOutil) {
    console.log(`J'ai planté le clou avec ${monOutil}`)
  }
  
  planterUnClou() // avec le marteau
  }


{
  // 2 taperLeClou utilise encore son environement intérieur (l'argument outil) et n'a don cpas besoin de son environement extérieur ("maillet")
  const monOutil = "maillet"

const planterUnClou=  () =>{
  const outil = "marteau"
  return taperLeClouAvec(outil)
}


const taperLeClouAvec=  (monOutil)=> {
  console.log(`J'ai planté le clou avec ${monOutil}`)
}

planterUnClou() // "avec mon marteau"

}

{
  //3 taperLeClou n'a pas d'outil dans son environement intérieur. Il va donc dans son environement extérieur (qui est, lexicalement, le contexte global, et pas celui de "planter un clou") pour trouver "maillet"
const outil = "maillet"


const planterUnClou=  () =>{
  const outil = "marteau"
  return taperLeClouAvec()
}

const taperLeClouAvec=  () =>{
  console.log(`J'ai planté le clou avec ${outil}`)
}

planterUnClou() // "avec mon maillet"
}

{
  //4 pareil que ci-dessus! On a beau créé d'autres fonctions "wrapper" avec leurs propres contexte/environnement, taperLeClou définit son contexte lexicalement, et va donc taper dans le ocntexte global
  const outil = "maillet"
  const planterUnClou=  () =>{
    const outil = "marteau"
    const planterClou=  () =>{
      taperLeClouAvec()
    } 
    return planterClou()
  }
  
  const taperLeClouAvec=  () =>{
    console.log(`J'ai planté le clou avec ${outil}`)
  }
  
  planterUnClou() // "avec mon maillet"
}

// 5 taperLeClou va chercher dans son environnement extérieur, qui cette fois ci, est l'environement intérieur de PlanterUnClou (car c'est là qu'il est créé)
{
    const outil = "maillet"
    const planterUnClou=  () =>{
      const outil = "marteau"
      const taperLeClouAvec =  () =>{
        console.log(`J'ai planté le clou avec ${outil}`)
      }
      return taperLeClouAvec()
    }
    

    
    planterUnClou() // "avec mon marteau"
  }
  // https://javascript.info/closure
  // refs: https://amnsingh.medium.com/lexical-environment-the-hidden-part-to-understand-closures-71d60efac0e0
  // http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/#scope

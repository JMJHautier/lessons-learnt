
# à faire
pour changer mon email dans des commit qui n'ont pas été signé:
`git filter-branch --commit-filter ' if [ "$GIT_AUTHOR_EMAIL" = "jmjhautier@gmail.com" ]; then GIT_AUTHOR_NAME="JMJHautier"; GIT_AUTHOR_EMAIL="jhautier@hotmail.fr"; git commit-tree "$@"; else git commit-tree "$@"; fi' HEAD`

mais ce n'est plus recommandé par git. Il faudrait utiliser git filter repo

# git commit

Pour avoir un éditeur de commit plus confortable que le terminal

# git revert / git reset

git reset "réécrit l'histoire" en revenant en arrière et supprimant les commits jusqu'à la référence indiquée 

git revert crée un nouveau commit qui annule les changements du/des commits indiquées 

git revert est donc bien pour les choses en remote, reset pour le local.

Aussi perturbant: ils n'ont pas le même input! dans `git reset HEAD`, `HEAD` est la référence de la fin du reset. En l'occurence, ici, on ne fait rien (enfin si, on "unstaged" les modifications actuelles);) par contre, dans `git revert HEAD`, `HEAD` fait référence au commit à "revert", donc on créérait bien un commit qui "annule" les modifications du dernier commit. 

Penser à utiliser `--soft` pour `reset` (qui se contente de déplacer HEAD sur le commit en question, tout en laissant les modifications en "unstaged", et `--no-commit` pour `revert` (même principe). 

Discussion chatGpt: https://chat.openai.com/share/3da3cf71-f581-4b0a-9c3e-9a53cbefd896

# git rebase 

git rebase est une autre commande qui réécrit l'histoire. Quand on commande `git rebase main bugFix`, les commits de bugFix sont sauvegardés en cache, bugFix est reset sur le dernier commit de main, puis tous les commits sauvegardés localement sont ajoutés un par un à main, avec de nouveaux hashes. L'histoire créé est ainsi linéaire. C'est très semblable à un "fast-forward merge" dans le sens où le rebase (comme le fast-forward merge) ne crée pas un commit spécifiquement lié à cette réunion, mais c'est différent car techniquement, les commits copiés dans main ne sont pas les commits originaux de bugFix. 

C'est sans doute cette particularité qui permet de faire des modifications sur les commits: leur ordre, leur présence dans le rebase, etc. 

Discussion chatGpt: 
https://chat.openai.com/share/b15b7dd9-af40-46d9-9271-f8a24598131b

# git cherry-pick 

Permet de faire des copies de commits dans la branche où on se trouve. Plutot cool, si on a pas envie de modifier les branches originales. 

En plus, on peut en faire plusieurs d'un coup: `git cherry-pick C1 C2 C3 C4`. 

on peut aussi utiliser `--no-commit` pour voir le résultat avant commit. Mais si on a cherry-picked plusieurs commits, tous les changements seront combinés. 


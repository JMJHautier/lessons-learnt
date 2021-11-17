pour changer mon email dans des commit qui n'ont pas été signé:
`git filter-branch --commit-filter ' if [ "$GIT_AUTHOR_EMAIL" = "jmjhautier@gmail.com" ]; then GIT_AUTHOR_NAME="JMJHautier"; GIT_AUTHOR_EMAIL="jhautier@hotmail.fr"; git commit-tree "$@"; else git commit-tree "$@"; fi' HEAD`

mais ce n'est plus recommandé par git. Il faudrait utiliser git filter repo

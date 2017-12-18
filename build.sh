#!bin/sh

npm run build

git add -f dist && git commit -m "$2"

if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
git subtree push --prefix $1 origin gh-pages

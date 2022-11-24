#!/usr/bin/env bash
mkdir -p ./public/
hugo --theme=mainroad
npm run index
firebase deploy
git add .
# echo "Please provide a brief message for the commit:"
# read commitmessage
# outfile="Latest Site Updated Commit From: $(date +%Y%m%d)
# $commitmessage
# "
# git commit -m "${outfile}"
git commit
git push -u origin develop
pwd


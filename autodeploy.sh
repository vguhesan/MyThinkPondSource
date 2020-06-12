#!/usr/bin/env bash
mkdir -p ./public/
hugo --theme=mainroad
npm run index
firebase deploy
git add .
outfile="Latest Site Updated Commit From: $(date +%Y%m%d)"
git commit -m "${outfile}"
git push -u origin master
pwd

## DEMO APP ON PRODUCTION ##

https://wordle42.herokuapp.com/

## USAGE ON DEVELOPMENT ##

make

See it in https://localhost:4200


## REQUIRED DEPENDENCIES ##

- npm

- angular

- python3

## RUN ON PRODUCTION ##

cd ./FRONTEND

See it in https://localhost:3001

## NPM MODULES ##

- express

- path

- dotenv

## UPLOAD CONTENTS TO HEROKU SERVER ##

git remote add heroku https://git.heroku.com/wordle42.git && git subtree push --prefix FRONTEND heroku master

git remote add herokuback2 https://git.heroku.com/wordle42-back.git && git subtree push --prefix BACKEND herokuback2 master

## BACKEND MADE WITH 42 API LIBRARY ##

https://github.com/hivehelsinki/42api-lib
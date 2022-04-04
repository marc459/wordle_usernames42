## DEMO APP ON PRODUCTION ##

https://wordle42.herokuapp.com/

## USAGE ON DEVELOPMENT ##

## FRONTEND ##
cd ./FRONTEND && ng serve

See it in https://localhost:4200

## BACKEND ##

python3 get_campus_users.py



## REQUIRED DEPENDENCIES ##

- npm

- angular

## RUN ON PRODUCTION ##

cd ./FRONTEND

npm run heroku-postbuild

npm run start

See it in https://localhost:3001

## NPM MODULES ##
- express

- path

- dotenv

## UPLOAD CONTENTS TO HEROKU SERVER ##

git subtree push --prefix FRONTEND heroku master

git subtree push --prefix backend heroku master

## BACKEND MADE WITH 42 API LIBRARY ##

https://github.com/hivehelsinki/42api-lib
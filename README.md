# Portfolio Data API

## Tools

- Node >= 16.x
- NPM >= 8.x (update NPM executing `npm i -g npm`)
- Unix-like shell (Gitbash/bash/zsh)

## Project Set Up

- clone and `npm install`.
- Start the server using `npm run server` or `npm run start`.

## Project Instructions

create a .env file using the example .env file provided and fill in the data with your own
Start the server of the api and use the endpoint `localhost:9000/data/github` to pull in the projects public to the github account in the .env file

## /data/github endpoint

When making a get request to this endpoint it will return a array list of all the projects the user specidied in the .env file has publically available.
when calling the enpoint it will return a array of objects each object being a individual project with relative information and a html link to the project.

## Future Updates

If youd like to add on to the API to pull in from other sources as well, like linked in.
Create a issue asking for the implementation and i will integrate it into a future update.
If you notice or find any bugs, please let me know for them to be patched, Thankyou.
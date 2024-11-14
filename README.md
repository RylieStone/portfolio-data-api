# Portfolio Data API

## Tools

- Node >= 16.x
- NPM >= 8.x (update NPM executing `npm i -g npm`)
- Unix-like shell (Gitbash/bash/zsh)

## Project Set Up

- clone and `npm install`.
- Run tests locally executing `npm test`.
- Start the server using `npm run server` or `npm run start`

## Project Instructions

create a .env file using the example .env file provided and fill in the data with your own
Start the server of the api and use the endpoint `localhost:9000/data/github` to pull in the projects public to the github account in the .env file

## /data/github endpoint

When making a get request to this endpoint it will return a array list of all the projects the user specidied in the .env file has publically available.
when calling the enpoint it will return a array of objects that will look like
{
      id: the id of the project
      name: the name of the project
      html_url: the html URL of the project
      description: the description of the project
      homepage: the home page of the project
      size: the size of the project
      stargazers_count: the amount of star gazers on a project
      watchers_count: the amount of watchers on a project
      language: the language a project is in
      open_issues: the amount of open issues the project has
      forks: the amount of forks made
      archived: true/false whether or not the project is archived
      disabled: true/false whether or not the project is disabled
      watchers: amount of watchers on the project
      license: project license
    }

## Future Updates

If youd like to add on to the API to pull in from other sources as well, like linked in.
Create a issue asking for the implementation and i will integrate it into a future update.
If you notice or find any bugs, please let me know for them to be patched, Thankyou.
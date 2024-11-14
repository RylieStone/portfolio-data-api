// DO NOT MAKE CHANGES TO THIS FILE
const axios = require('axios')
module.exports = {
  github,
};
async function github(GithubUsername) {
  let repos = []
  let projects = []
  await axios.get(`https://api.github.com/users/${GithubUsername}/repos`).then(res => {
    repos = [...res.data]
  }).catch(err => console.log(err))
  for (let i in repos) {
  }
  return GithubUsername
}

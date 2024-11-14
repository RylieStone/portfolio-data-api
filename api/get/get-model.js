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
    let project = repos[i]
    projects.push({
      id: project.id,
      name: project.name,
      html_url: project.html_url,
      description: project.description,
      homepage: project.homepage,
      size: project.size,
      stargazers_count: project.stargazers_count,
      watchers_count: project.watchers_count,
      language: project.language,
      open_issues: project.open_issues,
      open_issues_count: project.open_issues_count,
      fork_count: project.fork_count,
      forks: project.forks,
      archived: project.archived,
      disabled: project.disabled,
      watchers: project.watchers,
      license: {...project.license}
    })
  }
  return GithubUsername
}
//   license: {
//     key: 'mit',
//     name: 'MIT License',
//     spdx_id: 'MIT',
//     url: 'https://api.github.com/licenses/mit',
//     node_id: 'MDc6TGljZW5zZTEz'
//   },
//   watchers: 0,
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata= {
    "login": "topfunky",
    "id": 26,
    "node_id": "MDQ6VXNlcjI2",
    "avatar_url": "https://avatars.githubusercontent.com/u/26?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/topfunky",
    "html_url": "https://github.com/topfunky",
    "followers_url": "https://api.github.com/users/topfunky/followers",
    "following_url": "https://api.github.com/users/topfunky/following{/other_user}",
    "gists_url": "https://api.github.com/users/topfunky/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/topfunky/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/topfunky/subscriptions",
    "organizations_url": "https://api.github.com/users/topfunky/orgs",
    "repos_url": "https://api.github.com/users/topfunky/repos",
    "events_url": "https://api.github.com/users/topfunky/events{/privacy}",
    "received_events_url": "https://api.github.com/users/topfunky/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
res.send("hi my name is Ritika")
})
app.get('/login',(req,res)=>{
    res.send('<h1>hii this is login page</h1>')
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
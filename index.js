// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const posts = [
{
id: 1,
username: "Ray Chen",
handle: "@raycodes",
profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
content: "Late night coding session. Built my first mini social app.",
likes: 42,
comments: 8,
timestamp: "2h"
},
{
id: 2,
username: "Aisha Khan",
handle: "@aishathinks",
profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
content: "Coffee and debugging. Perfect combo.",
likes: 31,
comments: 5,
timestamp: "3h"
},
{
id: 3,
username: "Marcus Lee",
handle: "@marcusdev",
profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
content: "Front end design finished. Clean timeline layout looks good.",
likes: 27,
comments: 4,
timestamp: "5h"
},
{
id: 4,
username: "Sofia Rivera",
handle: "@sofiacodes",
profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
content: "Learning web development feels rewarding.",
likes: 55,
comments: 12,
timestamp: "6h"
},
{
id: 5,
username: "Daniel Park",
handle: "@dparktech",
profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
content: "UI update coming tomorrow. Dark mode looks clean.",
likes: 63,
comments: 9,
timestamp: "8h"
}
]

// 6) Add static file middleware here
app.use(express.static('public'))

// 7) Set the view engine to ejs here
app.set('view engine', 'ejs')

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


// 9) Create a route handler to your overview route from your planning document
// Pass in your data array

app.get('/overview', (req, res) => {
    res.render('overview', { posts: posts })
})


// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})
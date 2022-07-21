// need to refactor and move routes into separate file

const express = require("express");
const {formatHtml} = require("./formatHtml");
const {addWord, getStory} = require("./storyUtils");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    const story = getStory();
    res.send( formatHtml(story) );
})

app.post('/word', (req, res) => {
    const newWord = req.body.word;
    addWord(newWord);
    const story = getStory();
    res.send( {story} );
})

app.listen(PORT, () => {
    console.log("Listening on port "+PORT);
})
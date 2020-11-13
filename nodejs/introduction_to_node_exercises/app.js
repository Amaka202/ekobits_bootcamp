const fs = require("fs");
const process = require("process");
const request = require("request");
const intro = require("./main")

    

    // const options = {
    //     url: `https://icanhazdadjoke.com/search?term=${term}`,
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Accept-Charset': 'utf-8',
    //         // 'User-Agent': 'my-reddit-client'
    //     }
    // };

    


    function getJokes(term){
        return request({url: `https://icanhazdadjoke.com/search?term=${term}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            // 'User-Agent': 'my-reddit-client'
        }}, function(err, res, body) {
            let json = JSON.parse(body);
            let jokesArray = json.results
            // console.log(jokesArray);
            jokesArray.forEach(jokeObj => {
                console.log(jokeObj.joke);
                fs.writeFile("jokes.txt", jokeObj.joke, (err) => {
                    if (err) throw err;
                    console.log("saved!")
                })
            })
        });
    }

    getJokes("hipster");






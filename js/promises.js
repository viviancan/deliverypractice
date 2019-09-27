(function () {
    'use strict';

    const wait = ((milliseconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`This will show up after ${milliseconds/1000} seconds.`);
            }, milliseconds);
        })
    })

   // wait(1000).then((message) => {
   //     console.log(message);
   // })
   //
   // wait(3000).then((message) => {
   //     console.log(message);
   // })
   //
   //  wait(5000).then((message) => {
   //     console.log(message);
   // })
   //
   // wait(10000).then((message) => {
   //     console.log(message);
   // })


let githubRequest = (username) => {
    let githubEventEndpoint = `https://api.github.com/users/${username}/events/public`;

    return fetch(githubEventEndpoint, {
        headers: {'Authorization': `token ${githubToken}`}
    })
    .then(response => {
        console.log(response.body);
        return response.json()
    }).then(ghStats => {
        console.log(ghStats);
        // const pushEvents = ghStats.filter( (stat) => {
        //     return stat.type == "PushEvent"
        // })
        // return pushEvents

        // return ghStats.filter( (stat) => {
        //      return stat.type == "PushEvent"
        // })

        return ghStats.filter( stat => stat.type == "PushEvent")

    }).then(pushEvents => {
        console.log(`Last commit by ${username}: ${pushEvents[0].created_at}`)
        return pushEvents[0].created_at;
    })

}

let username = prompt("What user do you want to check on github?");

console.log(githubRequest(username));



})();
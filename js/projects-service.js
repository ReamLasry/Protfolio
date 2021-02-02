'use strict';
var gProjects = [{
    id: 1,
    name: "Mine Sweeper!",
    title: "Lets catch mines!",
    desc: `The Mine Sweeper is a fantastig game who takes you to a period time of concentration,
            in this game you need to understang exactly where are the mines by calculate the number of mined
            around each chell(you get the number of each cell when you press on it).
            if you think you have the time and guts do solve it you are more than welcome to give it a shot!`,
    url: "img/portfolio/01-thumbnail.jpg",
    publishedAt: 1611693000000,
    labels: ["Pepole who like to think!", "Thinking games"],
}, {
    id: 2,
    name: "Theater Seat Book!",
    title: "Time to see a movie!",
    desc: `If you like theater you came to the right place,
            we are proud to give you the app who books you seats to the movie you choose from ahead.
            the app will also let you know exactly the number of seats available around the places You will choose.
            so, will see you at the movie theater? 😉`,
    url: "img/portfolio/02-thumbnail.jpg",
    publishedAt: 1611059280000,
    labels: ["Theater lovers", "Movies"],
}, {
    id: 3,
    name: "Touch the Numbers!",
    title: "Find the numbers as fast as you can",
    desc: `The numbers app! the next up contains the number between 1-16(includes),
            the app will help you kids who still dont know number to learn them.
            and before you think its so eazy, think again!
            you have 8 seconds to click the number one by one till you reach the 16
            g🙃🙃d luck! `,
    url: "img/portfolio/03-thumbnail.jpg",
    publishedAt: 1611313920000,
    labels: ["Kids", "Education number learning apps"],
}]

function projectsForDisplay() {
    var displayProjects = gProjects.filter(function(project) {
        return project;
    })
    return displayProjects;
}

function getProjectFromId(projectId) {
    var project = gProjects.find(function(project) {
        return project.id === projectId;
    })
    return project;
}
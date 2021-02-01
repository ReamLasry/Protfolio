console.log('Starting up');
'use strict';

projectsRender();

function projectsRender() {
    var projects = [{
        id: 1,
        name: "Mine Sweeper!",
        title: "Better push those boxes",
        // desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/portfolio/01-thumbnail.jpg",
        // publishedAt: 1448693940000,
        // labels: ["Matrixes", "keyboard events"],
    }, {
        id: 2,
        name: "Theater Seat Book!",
        title: "Better push those boxes",
        // desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/portfolio/02-thumbnail.jpg",
        // publishedAt: 1448693940000,
        // labels: ["Matrixes", "keyboard events"],
    }, {
        id: 3,
        name: "Touch the Numbers!",
        title: "Better push those boxes",
        // desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/portfolio/03-thumbnail.jpg",
        // publishedAt: 1448693940000,
        // labels: ["Matrixes", "keyboard events"],
    }]
    var strHTMLs = projects.map(function(project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="${project.url}" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${project.name}</h4>
                <p class="text-muted">${project.title}</p>
            </div>
        </div>`
    }).join('');

    var $elProjects = $('.projects');
    $elProjects.html(strHTMLs);
}
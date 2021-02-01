console.log('Starting up');
'use strict';

projectsRender();

function projectsRender() {

    var strHTMLs = projects.map(function(project) {
        `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="${project.imgURL}" alt="">
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
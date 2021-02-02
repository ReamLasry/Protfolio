console.log('Starting up');
'use strict';



$(function onInit() {
    projectsRender();
})

function projectsRender() {
    var projects = projectsForDisplay();

    var strHTMLs = projects.map(function(project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${project.id}')">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
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

    var $elProjects = $('.new-projects');
    $elProjects.html(strHTMLs);
}

function renderModal(projectId) {
    console.log('renderModals');
    var project = getProjectFromId(+projectId);
    console.log(project);
    console.log(project);
    var strHTMLsModals =
        `<!-- Project Details Go Here -->
        <h2>${project.name}</h2>
        <p class="item-intro text-muted">${project.title}.</p>
        <img class="img-fluid d-block mx-auto" src="${project.url}" alt="">
        <p>${project.desc}</p>
            <ul class="list-inline">
                <li>Date:${formatedTime(project.publishedAt)}</li>
                <li>Client:${project.labels[0]}</li>
                <li>Category:${project.labels[1]}</li>
            </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
        `

    var $elModals = $('.modal-display');
    $elModals.html(strHTMLsModals);
}
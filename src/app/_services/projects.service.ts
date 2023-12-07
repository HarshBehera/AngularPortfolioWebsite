import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    { id: 0, name: "Sample Full Stack Project", pictures: ["../../assets/simple_ang_sb/image_1.jpg", "../../assets/simple_ang_sb/image_2.jpg", "../../assets/simple_ang_sb/image_2.jpg"], projectLink: "//www.github.com", summary: "CRUD operation using Angular and Spring Boot", description: "Simple project to understand full stack using angular and spring boot. Implemented frontend using angular framework and backend using spring framework", tags: [Tag.ANGULAR,Tag.SPRINGBOOT,Tag.TYPESCRIPT ]},
    { id: 1, name: "Sample Frontend Projects", pictures: ["../../assets/frontend_projects/1_flipkart_1.jpg", "../../assets/frontend_projects/2_flipkart_2.jpg", "../../assets/frontend_projects/3_clock.jpg","../../assets/frontend_projects/4_todo_list.jpg","../../assets/frontend_projects/5_password_vallidator.jpg","../../assets/frontend_projects/6_login.jpg","../../assets/frontend_projects/7_rating_1.jpg","../../assets/frontend_projects/8_rating_2.jpg","../../assets/frontend_projects/9_profile_card.jpg","../../assets/frontend_projects/10_credit_card.jpg","../../assets/frontend_projects/11_product_preview_card.jpg","../../assets/frontend_projects/12_result_summary.jpg","../../assets/frontend_projects/13_single-price-grid.jpg"], projectLink: "//www.github.com", summary: "Basic frontend projects to practice", description: "Created basic frontend clone of FlipKart home page using HTML5,CSS and JavaScript.Build a responsive clock which displays real time date and day using HTL5, CSS3 and JavaScript. Build an interactive and responsive to-do list app which stores to do list of the user in local storage in json format and we can manipulate the list using DOM. Build an interactive and responsive password-validator-component which validate the input password based on length ,uppercase , lowercase, number and special character using HTML CSS3 and JavaScript. Build an interactive and responsive login-form using HTML5,CSS3 and JavaScript. Created a responsive and interactive-rating-system using HTML5,CSS3 and JavaScript. It is a nice, small project in which user gives rating to the client in an interactive way and updating the DOM. Created a responsive profile card, general credit card , product-preview-card-component, results-summarycomponent, single-price-grid-component of a user using HTML5 and CSS3. ", tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT] }



  ];
  constructor() { }
  GetProjects(){
    return this.projects;
  }
  GetProjectById(id : number) : Project {
    let project=this.projects.find(project => project.id === id);
    if(project===undefined){
      throw new TypeError("There is no project that matches the id: "+ id)
    }
    return project;
  }
  GetProjectsByFilter(filterTags:Tag[]){
    let filteredProjects:Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll=true;
      filterTags.forEach( function (filterTag) {
        if(project.tags.includes(filterTag)==false){
          foundAll=false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
  
}

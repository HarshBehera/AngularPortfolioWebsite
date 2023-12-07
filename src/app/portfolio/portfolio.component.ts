import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  isCollapsed: boolean=true
  projects={} as Project[];

  typescript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;
  springboot: boolean = false;
  javascript: boolean = false;
  nodejs: boolean = false;
  html: boolean = false;
  css: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Harsh - Portfolio')
  }
  ngOnInit(): void {
    this.projects=this.projectsService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET)
    }
    if(this.react){
      filterTags.push(Tag.REACT)
    }
    if(this.springboot){
      filterTags.push(Tag.SPRINGBOOT)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS)
    }
    if(this.html){
      filterTags.push(Tag.HTML)
    }
    if(this.css){
      filterTags.push(Tag.CSS)
    }
    if(this.angular || this.typescript || this.python || this.csharp || this.java || this.aspnet || this.react || this.springboot || this.javascript || this.nodejs || this.html || this.css){
      this.filtering=true
    }
    else{
      this.filtering=false
    }

    this.projects=this.projectsService.GetProjectsByFilter(filterTags);
  }
  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.aspnet = false;
    this.react = false;
    this.springboot = false;
    this.javascript = false;
    this.nodejs = false;
    this.html=false;
    this.css=false;
    this.filtering = false;

    this.projects=this.projectsService.GetProjects();
  }
}

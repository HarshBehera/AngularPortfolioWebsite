import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;
  constructor(private modalService : BsModalService){

  }
  OpenProjectModal(){
    const modalOptions: ModalOptions={
      class:'modal-lg',
      initialState:{
        project: this.project
      }
    };
    this.bsModalRef=this.modalService.show(ProjectModalComponent,modalOptions);
  }
}

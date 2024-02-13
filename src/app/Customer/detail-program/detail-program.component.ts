import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styleUrls: ['./detail-program.component.css']
})
export class DetailProgramComponent implements OnInit {
  currentId: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.currentId = params.get('id');
    });
  }


  getImageUrl(programmeId: string, imageNumber: number): string {
    let folderName: string;
    switch (programmeId) {
      case '3.1':
        folderName = 'Débutant';
        break;
      case '3.2':
        folderName = 'Avancé';
        break;
      case '3.3':
        folderName = 'Bodybuilder';
        break;
      default:
        folderName = '';
    }

    return `./assets/images/${folderName}/${folderName}programme${imageNumber}.png`;
  }
}

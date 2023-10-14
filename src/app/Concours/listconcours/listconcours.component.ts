import { Component, OnInit } from '@angular/core';
import { ConconrsService } from '../conconrs.service';
import { Concours } from '../Concours.model';

@Component({
  selector: 'app-listconcours',
  templateUrl: './listconcours.component.html',
  styleUrls: ['./listconcours.component.css']
})



export class ListconcoursComponent implements OnInit {
  concoursList: Concours[];

  constructor(private concoursService: ConconrsService) {
    this.concoursList = [];
  }

  ngOnInit() {
    this.concoursService.getConcoursList().subscribe(
      (data: Concours[]) => {
        this.concoursList = data;
      },
      (error: any) => {
        console.error("There was an error in fetching the data", error);
      }
    );
  }
}


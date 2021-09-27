import { Dog } from './../../models/dog';
import { DogsService } from './../../services/dogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pug',
  templateUrl: './pug.component.html',
  styleUrls: ['./pug.component.css']
})
export class PugComponent implements OnInit {

  dogInfo: any[] = [];

  constructor(
    private dogService: DogsService,
  ) { }

  ngOnInit(): void {
    this.dogService.getDogByBreed('pug').subscribe((response: any) => {
      this.dogInfo = response;
      // console.log(this.dogInfo)
    });
  }

  image(id: string): string {
    return `https://cdn2.thedogapi.com/images/${id}_1280.jpg`
  }

}

import { Dog } from './../../models/dog';
import { DogsService } from './../../services/dogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pudle',
  templateUrl: './pudle.component.html',
  styleUrls: ['./pudle.component.css']
})
export class PudleComponent implements OnInit {

  dogInfo: any[] = [];

  constructor(
    private dogService: DogsService,
  ) { }

  ngOnInit(): void {
    this.dogService.getDogByBreed('pudle').subscribe((response: any) => {
      this.dogInfo = response;
      // console.log(this.dogInfo)
    });
  }

  image(id: string): string {
    return `https://cdn2.thedogapi.com/images/${id}_1280.jpg`
  }

}

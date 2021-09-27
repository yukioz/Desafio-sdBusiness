import { Dog } from './../../models/dog';
import { DogsService } from './../../services/dogs.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pinscher',
  templateUrl: './pinscher.component.html',
  styleUrls: ['./pinscher.component.css']
})
export class PinscherComponent implements OnInit {

  dogInfo: any[] = [];

  constructor(
    private dogService: DogsService,
  ) { }

  ngOnInit(): void {
    this.dogService.getDogByBreed('pinscher').subscribe((response: any) => {
      this.dogInfo = response;
      // console.log(this.dogInfo)
    });
  }

  image(id: string): string {
    return `https://cdn2.thedogapi.com/images/${id}_1280.jpg`
  }

}

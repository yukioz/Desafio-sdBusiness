import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogsService } from 'src/app/services/dogs.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dogList: Dog[] = [];
  filteredDogs: Dog[] = [];
  text: string = '';

  selectedDog: Dog;
  dogImageurl: string;
  dogHeight: string;
  dogName: string;
  dogTemperament: string;
  dogOrigin: string;

  constructor(
    private dogService: DogsService
  ) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((response: any) => {
      this.dogList = response;
      this.filteredDogs = this.dogList;
    });
  }

  filterDog() {
    this.filteredDogs = this.dogList.filter(dog => dog.name.toLowerCase().includes(this.text.toString().toLowerCase()));
  }

  displayFn(state) {
    return state?.name;
  }

  updateMySelection(event) {
    console.log(event.source.value, "eventooo");
    this.dogImageurl = event.source.value.image?.url;
    this.dogName = event.source.value.name;
    this.dogHeight = event.source.value.height?.metric;
    this.dogOrigin = event.source.value.origin;
    this.dogTemperament = event.source.value.temperament;
    this.selectedDog = event.source.value;
    console.log(this.selectedDog, "dog name");
  }

}

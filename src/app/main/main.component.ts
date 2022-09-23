import { Component, OnInit } from '@angular/core';
import {CitiesService} from "../http/cities/cities.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private cities = [];


  constructor(private citiesService: CitiesService) { }

  public ngOnInit(): void {
    this.citiesService.getData().subscribe((res:any) => {
      this.cities = res.data[0];
      this.test()
    })
  }

  private test() {
    console.log(this.cities)
  }


}



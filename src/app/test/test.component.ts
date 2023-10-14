import { Component,OnInit } from '@angular/core';
import { AxiosService } from '../axios.service';
import { AxiosResponse } from 'axios';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public isMenuOpen = false;
  data : string[] = [];
  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private axiosService : AxiosService){}
    ngOnInit(): void{
      this.axiosService.request("GET","/messages",null).then(
        (response: AxiosResponse<any>) => this.data = response.data
      );
    
  }
}

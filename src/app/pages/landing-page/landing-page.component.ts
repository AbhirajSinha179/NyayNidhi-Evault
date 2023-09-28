import { Component} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent{

  constructor() { }
  userID="";
  ngOnInit(): void {
  }
  getID(val:string){
    this.userID=val;
  }
}

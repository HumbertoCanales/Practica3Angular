import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations/animations';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [ fade ]
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValues:any){
    console.log(formValues);
  }

}

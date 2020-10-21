import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/model/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  firstName: string="Scott"

  //firstName: string ="Uma"

  countryList: Country [] = [
    new Country(1, "India"),
    new Country(2, "USA"),
    new Country(3, "Australia")
  ]

  contactForm = new FormGroup({
    firstName: new FormControl(this.firstName),
    lastName: new FormControl('Desatnick'),
    email: new FormControl('scott.desatnick@ef.com'),
    gender: new FormControl('male'),
    isMarried: new FormControl(true),
    country: new FormControl(2),
    address: new FormGroup({
      city: new FormControl('Boston'),
      state: new FormControl('massachusetts'),
      pincode: new FormControl('02101')
    })
  })

  onSubmit(){
    console.log(this.contactForm.value)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  Username=""
  Password=""
  Name=""
  EmailID=""
  MobileNo=""
  Gender=""
  BloodGroup=""
  Pincode=""
  readRegister=()=>{
    let data={
      "Username":this.Username,
      "Password":this.Password,
      "Name":this.Name,
      "EmailID":this.EmailID,
      "MobileNo":this.MobileNo,
      "Gender":this.Gender,
      "BloodGroup":this.BloodGroup,
      "Pincode":this.Pincode
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}

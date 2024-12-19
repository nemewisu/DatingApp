import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";
import { NgxSpinnerComponent } from 'ngx-spinner';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet, NavComponent, NgxSpinnerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private accountService = inject(AccountService)
  form: FormGroup;
  maxDate = new Date(); //დღევანდელის დაყენება რა მაქსიმუმზე რო მომავალი ვერ მონიშნოს

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dateOfBirth: [null],
    });
  }

}

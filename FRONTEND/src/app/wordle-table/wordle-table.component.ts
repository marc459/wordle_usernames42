import { Component, OnInit } from '@angular/core';
import {AfterViewInit} from '@angular/core';
import { Api42Service } from '../services/api42.service';
import users42 from '../../assets/json/users.json'



@Component({
  selector: 'app-wordle-table',
  templateUrl: './wordle-table.component.html',
  styleUrls: ['./wordle-table.component.scss']
})
export class WordleTableComponent implements OnInit , AfterViewInit{
  sentword: string = ""
  podiumword: string
  splitword: string[][] = []
  num: number = 0
  successcount: number
  alert: string = ""
  attempts: number
  users:string[] = users42;

  private getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  constructor(private api42Service: Api42Service) {
    api42Service = this.api42Service;
    this.api42Service.getRandomUser().subscribe((data: any) =>{
      this.podiumword = data.login;
    })
    //this.podiumword = this.users[this.getRndInteger(0,this.users.length - 1)]
    this.successcount = 0
    this.attempts = 0
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {

  }

  validate()
  {
    if(this.attempts < 6)
    {
      
      if(this.sentword.length != this.podiumword.length)
        this.alert= "WRITE A WORD WITH " + this.podiumword.length + " LENGTH"
      else if(this.sentword.toLowerCase() == this.podiumword.toLowerCase())
      {
        this.alert = "YOU WON";
        this.attempts = 7;
        this.splitword[this.num++] = this.sentword.split('')
      }
      else if(this.attempts >= 5)
      {
        this.alert = "YOU LOST, THE WINNING LOGIN WAS <" + this.podiumword.toUpperCase() +">";
        this.attempts = 7;
        this.splitword[this.num++] = this.sentword.split('')
      }
      else
      {
        this.alert = "KEEP TRYING"
        this.splitword[this.num++] = this.sentword.split('')
        this.attempts++;
      }
      this.sentword = "";
    }

  }

}

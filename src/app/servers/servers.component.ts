import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  Allowbutton = false ; 
  ServerCreationStatus = 'server was not created';
  ServerName  = '' ; 
  ServerCondition= false ;
  servers = [ 'servertest1 ' , 'servertest2'] ;
  constructor(

  ) {

    setTimeout( ()=>{

      this.Allowbutton = true ; 
    },2000) ;
   }

  ngOnInit(): void {
  }

  onCreationServer (){
    this.ServerCondition= true ;
    this.ServerCreationStatus="server is created "  + this.ServerName; 
    this.servers.push(this.ServerName) ; 
  }

  onUpdateServer(event :Event){

this.ServerName= (<HTMLInputElement>event.target).value ;

  }
}

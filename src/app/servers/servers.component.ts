import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  // serverWasCreated = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  //   if (this.serverWasCreated==false){
  //   this.serverWasCreated = true;    
  //   this.serverCreationStatus = 'Server was created!';
  // } else {
  //   this.serverWasCreated = false;
  //   this.serverCreationStatus = 'Server was destroyed!';  
  // }
  }
  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  allowEdit = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    console.log('.... recoger queryparams y fragment');
    console.log(this.route.snapshot.queryParams['modo']); //.modo
    console.log(this.route.snapshot.fragment);

    let id = 1;
    if (this.route.snapshot.params.id !== undefined){
      id = +this.route.snapshot.params.id;
    }

    console.log('editar servidor id ' + id);
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;



    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['modo'] === '1' ? false : true;
        }
      );
  }

  onUpdateServer(): void {

  

    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}

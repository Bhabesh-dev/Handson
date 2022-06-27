import {
  loadRemoteEntry,
  loadRemoteModule,
} from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header-host',
  templateUrl: './header-host.component.html',
  styleUrls: ['./header-host.component.scss'],
})
export class HeaderHostComponent implements OnInit {
  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  constructor() {}

  async ngOnInit() {
    const m = await loadRemoteModule({
      remoteEntry: 'http://localhost:8080/remoteEntry.js',
      type: 'module',
      exposedModule: './Component',
    });
    const ref = this.viewContainer.createComponent(m.AppComponent);
  }
}

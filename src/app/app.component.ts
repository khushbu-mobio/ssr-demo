import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr';
  renderer: string;
  /**
   *  Returns whether a platform id represents a browser platform or Server.
   */
  constructor(@Inject(PLATFORM_ID) platformId:any) { 
    this.renderer = isPlatformBrowser(platformId) ? "Browser" : "serve";
    console.log(isPlatformBrowser(platformId));
  }
}

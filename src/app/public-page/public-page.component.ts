import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {

 renderer: string;
  /**
   *  Returns whether a platform id represents a browser platform or Server Platform.
   */
  constructor(@Inject(PLATFORM_ID) platformId:any) { 
    this.renderer = isPlatformBrowser(platformId) ? "Browser" : "serve";
    console.log(isPlatformBrowser(platformId));
  }

  ngOnInit() {
  }

}

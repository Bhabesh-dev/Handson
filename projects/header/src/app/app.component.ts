import { AfterViewChecked, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  title = 'header';

  constructor(private elementRef: ElementRef) {}
  ngAfterViewChecked() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../assets/js/sidebar.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}

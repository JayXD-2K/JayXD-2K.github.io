import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options1 : AnimationOptions  = {
    path: '/assets/lottie/question.json'
  }
  title = 'personal-website';
}

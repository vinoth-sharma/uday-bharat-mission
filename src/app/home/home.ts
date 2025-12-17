import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vision } from '../vision/vision';

@Component({
  selector: 'app-home',
  imports: [Vision, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

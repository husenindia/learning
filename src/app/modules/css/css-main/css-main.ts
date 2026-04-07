import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-css-main',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './css-main.html',
  styleUrl: './css-main.css',
})
export class CssMain {}

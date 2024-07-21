import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherSummaryComponent } from "./components/weather-summary/weather-summary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
}

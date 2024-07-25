import { Component, inject } from '@angular/core';
import { MeteoService } from '../../services/meteo.service';

@Component({
    selector: 'app-weather-summary',
    standalone: true,
    templateUrl: './weather-summary.component.html',
    styleUrls: ['./weather-summary.component.scss'],
    imports: [

    ]
})
export class WeatherSummaryComponent {

    // get localisation
    // try get weather info from api

    private meteoService = inject(MeteoService);

    constructor() {
        this.meteoService.getSummaryForToday();
    }

    /*
    display summary
        location    
        temperature
        wind
        humidity
    */

}
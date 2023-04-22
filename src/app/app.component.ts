import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';
import { WeatherData } from './WeatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData! : WeatherData;
  private readonly weatherMapUul = 'https://api.openweathermap.org/data/2.5/weather';
  private readonly apiKey = environment.weatherApiKey; 

  constructor(private http: HttpClient) {}

  getWeatherByCity(city:string){ 
    const apiUrl = `${this.weatherMapUul}?q=${city}&appid=${this.apiKey}&units=metric`;
    this.getWeather(apiUrl);
  }

  getWeatherByZip(zip:string){ 
    const apiUrl = `${this.weatherMapUul}?zip=${zip}&appid=${this.apiKey}&units=metric`;
    this.getWeather(apiUrl);
  }

  getWeather(apiUrl : string){
    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherData = data;
    },
    () => {
      alert('location not found');
    }
    );
  }

}

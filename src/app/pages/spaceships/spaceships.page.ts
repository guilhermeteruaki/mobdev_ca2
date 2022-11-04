import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.page.html',
  styleUrls: ['./spaceships.page.scss'],
})
export class SpaceshipsPage implements OnInit {

 
  spaceship: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.spaceship = this.http.get('https://swapi.dev/api/starships');
  }
 
  openDetails(spaceship) {
    let split = spaceship.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/starships/${filmId}`);
  }

}

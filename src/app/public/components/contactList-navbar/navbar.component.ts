import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  iconoMoon = faMoon;
  iconoInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}

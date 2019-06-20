import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  clientId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('client');
  }

}

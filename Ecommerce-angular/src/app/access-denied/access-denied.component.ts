import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.route.navigate(['home']).then(x => {window.location.reload(); });
  }
}

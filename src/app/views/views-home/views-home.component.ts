import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Riviews' }
  ];

  items = [
    { image: '/assets/Images/couch.jpeg', title: 'Couch', description: 'This is a fantastic couch to si on' },
    { image: '/assets/Images/dresser.jpeg', title: 'Drasser', description: 'This is a great drasser to put stuff in' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

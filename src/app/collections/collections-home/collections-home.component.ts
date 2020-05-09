import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink = 'Hi';
  data = [
    {
      name: 'James', age: 24, job: 'Designer', employed: true
    },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true }
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'employed', label: 'Has a Job?' },
    { key: 'job', label: 'Job' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

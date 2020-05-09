import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'The sky i ble because it is' },
    { title: 'What dows an orange taste like?', content: 'An orange tastes like and orange' },
    { title: 'What color is that cat?', content: 'the cat is an orange color' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}

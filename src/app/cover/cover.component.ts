import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { hinge, jello } from 'ng-animate';

@Component({
  selector: 'cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
animations: [
  trigger('hinge', [transition('* => *', useAnimation(hinge, {
    params: { timing: 3, delay: 5 }
  }))]),
  trigger('jello', [transition('* => *', useAnimation(jello, {
    params: { timing: 2, delay: 3 }
  }))])
  ]
})
export class CoverComponent implements OnInit {

  hinge: any;
  jello: any;
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'left': '0',
      'top': '0',
      'bottom': '0'
    };

    this.myParams = {
          particles: {
              number: {
                  value: 35,
              },
              color: {
                  value: '#ff0000'
              },
              shape: {
                  type: 'triangle',
              },
      }
    };
  }

  scroll(id) {
    const x = document.querySelector(id);
    if (x) {
        x.scrollIntoView();
    }
}

}

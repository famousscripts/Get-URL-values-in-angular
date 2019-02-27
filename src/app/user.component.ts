import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  template: `
    <h1>This is {{ username }}'s profile!</h1>
  `
})
export class UserComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // snapshot way
    console.log('thing', this.route.snapshot.params.username);

    // observable way
    this.route.paramMap.subscribe(params => {
      console.log(params.get('username'));
      this.username = params.get('username');
    });
  }

}

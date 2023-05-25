import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  title: string = 'Bonjour!'

  isAdmin: boolean = true;

  toggleIsAdmin() {
    this.isAdmin = !this.isAdmin
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heros: string[] = ['Spiderman','Iron Man','Hulk'];
  public deletedHero: string | undefined = '';

  deleteLastHero(): void {
    this.deletedHero = this.heros.pop();
  }
}

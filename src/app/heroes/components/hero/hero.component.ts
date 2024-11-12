import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public realName: string = 'Peter Parker';
  public age: number = 24;
  public showNameButton: boolean = true;
  public showAgeButton: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  onChangeHeroNameHandler(newName: string): void {
    this.name = newName;
    this.showNameButton = false;
  }

  onChangeHeroAgeHandler(newAge: number): void {
    this.age = newAge;
    this.showAgeButton = false;
  }

  pnResetFormHandler(): void {
    this.name = 'Spiderman';
    this.age = 24;
    this.showNameButton = true;
    this.showAgeButton = true;
  }
}

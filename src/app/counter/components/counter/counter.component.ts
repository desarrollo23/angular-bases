import {Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent {

    public counter: number = 10;

    increment = (value: number): void => {
        this.counter += value;
    }
    
    decrement = (value: number): void => {
        this.counter -= value;
    
        this.counter = ( this.counter < 0) ? 0 : this.counter;
    }
    
    reset = (value: number): void => {
        this.counter = value;
    }
}
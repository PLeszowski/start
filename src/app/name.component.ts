import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-name",
    template: `
        <input type="text" [(ngModel)]="name">
        <input type="text" [(ngModel)]="surname">
        <button type="button" *ngIf="isButton" (click)="press()">Show!</button>
    `
})
export class NameComponent {
    name: string = "";
    surname: string = "";

    @Input()
    isButton:boolean;

    @Output()
    buttonPress: EventEmitter<string> = new EventEmitter<string>();

    press() {
        this.buttonPress.emit(this.name + " " + this.surname);
    }
}
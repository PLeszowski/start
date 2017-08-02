import { Component, OnChanges, OnInit, DoCheck, 
    AfterContentInit, AfterContentChecked, AfterViewInit, 
    AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: "app-function",
    template: '<p *ngFor="let text of texts">{{text}}</p>'
})
export class FunctionComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    texts: string[] = new Array();

    ngOnChanges() {
        this.texts.push("ngOnChanges");
    }

    ngOnInit() {
        this.texts.push("ngOnInit");
    }

    ngDoCheck() {
        this.texts.push("ngDoCheck");
    }

    ngAfterContentInit() {
        this.texts.push("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        this.texts.push("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        this.texts.push("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        this.texts.push("ngAfterViewChecked");
    }

    ngOnDestroy() {
        this.texts.push("ngOnDestroy");
    }
}
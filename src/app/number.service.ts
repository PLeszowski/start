import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {
    getNumber(): number {
        if(localStorage.getItem("num") == undefined) {
            return 0;
        } else {
            return parseInt(localStorage.getItem("num"));
        }
    }

    setNumber(num: number) {
        localStorage.setItem("num", num + "");
    }
}
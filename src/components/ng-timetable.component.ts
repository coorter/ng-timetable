import {Component} from '@angular/core';

@Component({
    selector: 'ng-timetable',
    template: `
    <div>
        <h2>
            {{Title}}
        </h2>
    </div>`
})
export class NgTimetable {
    Title: string = "ng-timetable here it comes!";
}
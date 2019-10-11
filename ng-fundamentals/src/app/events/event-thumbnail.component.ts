import { Component, Input, Output, EventEmitter} from '@angular/core'


@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{ event?.name }} </h2>
            <div>Date: {{ event?.date }}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
              Time: {{ event?.time }}
              <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
              <span *ngSwitchCase="'10:00 am'">(late Start)</span>
              <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{ event?.price }}</div>
            <div *ngIf="event?.location">
                <span>Location: {{ event?.location?.address }} </span>
                <span class="pad-left"> {{ event?.location?.city }}, {{ event?.location?.country }} </span>
            </div>

            <div *ngIf="event?.location">
              Online URL: {{ event?.onlineUrl }}
            </div>
        </div>
    `,
    styles: [`
        .green {
          color: #003300 !important;
        }
        .bold {
          font-weight: bold;
        }
        .thumbnail {
          min-height: 210px;
        }

    `]
})


export class EventThumbnailComponent {
    @Input() event:any
    @Output() eventClick = new EventEmitter()


    handleClickMe() {
        //console.log('clicked');
        this.eventClick.emit('foo')
    }

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart,
                bold: isEarlyStart
              }
    }
}

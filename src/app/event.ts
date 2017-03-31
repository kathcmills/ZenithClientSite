import {Activity} from 'app/activity';

export class Event {
    EventId: number;
    EventFrom: Date;
    EventTo: Date;
    EnteredBy: string;
    Activity: Activity;
    CreateDate: Date;
    IsActive: boolean;
}

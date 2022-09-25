import { Component } from "@angular/core";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: 'app-contactList',
    templateUrl: './contactList.component.html',
    styleUrls: ['./contactList.component.scss']
})

export class ContactListComponent{
    faMoon=faMoon;
}
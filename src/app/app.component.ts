import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgMultiselectDropdownComponent} from './components/ng-multiselect-dropdown/ng-multiselect-dropdown.component';
import {IDropdownSettings} from './components/ng-multiselect-dropdown/multiselect.model';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NgMultiselectDropdownComponent,
        FormsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    title = 'convert-component-from-library';

    dropdownList = [
        { item_id: 1, item_text: 'Mumbai' },
        { item_id: 2, item_text: 'Bangaluru' },
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' },
        { item_id: 5, item_text: 'New Delhi' }
    ];

    selectedItems = [
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' }
    ];

    dropdownSettings: IDropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
    };

    ngOnInit() {}

    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
}

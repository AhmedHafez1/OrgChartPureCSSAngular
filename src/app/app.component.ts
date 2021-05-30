import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tree-view';

  response = [
    { uid: 'abc', pid: null, type: 'Main', name: 'Ahmed' },
    { uid: 'def', pid: 'abc', type: 'Sub', name: 'Hafez' },
    { uid: 'ghi', pid: 'kkk', type: 'Sub', name: 'Wael' },
    { uid: 'jkl', pid: 'ghi', type: 'Sub', name: 'Hany' },
    { uid: 'mno', pid: 'ghi', type: 'Sub', name: 'Mohamed' },
    { uid: 'pqr', pid: 'def', type: 'Sub', name: 'Amjad' },
    { uid: 'hdr', pid: 'def', type: 'Sub', name: 'Nader' },
    { uid: 'uht', pid: null, type: 'Main', name: 'Emam' },
    { uid: 'eft', pid: 'uht', type: 'Sub', name: 'Mohamed' },
    { uid: 'orf', pid: 'uht', type: 'Sub', name: 'Ali' },
    { uid: 'fjy', pid: 'eft', type: 'Sub', name: 'Waleed' },
    { uid: 'trf', pid: 'eft', type: 'Sub', name: 'Ramy' },
    { uid: 'kkk', pid: null, type: 'Sub', name: 'Gamal' },
    { uid: 'sgt', pid: 'trf', type: 'Sub', name: 'Ryadh' }
  ];

}

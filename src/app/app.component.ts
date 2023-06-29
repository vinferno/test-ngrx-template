import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store';
import { addDocumentDocuments } from './store/document.actions';
import { allDocumentsSelector } from './store/document.selectors';
import { addUserAction } from './store/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-tutorial';
  public allDocuments$: Observable<any[]>;
  constructor(
    private store: Store<AppState>
  ) {

    // this.store.dispatch(addUserAction({data: {id: '123'}}));
    // this.store.dispatch(addDocumentDocuments({data: {id: '123', user: '123'}}));
    this.allDocuments$ = this.store.select(allDocumentsSelector);
  }
}

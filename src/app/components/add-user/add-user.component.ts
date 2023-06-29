import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { addDocumentDocuments } from 'src/app/store/document.actions';
import { allDocumentsSelector } from 'src/app/store/document.selectors';
import { addUserAction } from 'src/app/store/users.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {



  }

  ngOnInit(): void {
  }

  addUser() {
    this.store.dispatch(addUserAction({data: {id: '123'}}));
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { addDocumentDocuments } from 'src/app/store/document.actions';
import { allDocumentsSelector } from 'src/app/store/document.selectors';
import { addUserAction } from 'src/app/store/users.actions';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {


  }

  ngOnInit(): void {
  }

  addDocument() {
    this.store.dispatch(addDocumentDocuments({data: {id: '123', user: '123'}}));
  }

}

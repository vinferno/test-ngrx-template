import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { addDocumentDocuments } from 'src/app/store/document.actions';
import { allDocumentsSelector } from 'src/app/store/document.selectors';
import { addUserAction } from 'src/app/store/users.actions';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {
  public allDocuments$: Observable<any[]>;
  constructor(
    private store: Store<AppState>
  ) {
    this.allDocuments$ = this.store.select(allDocumentsSelector);
  }

  ngOnInit(): void {
  }

}

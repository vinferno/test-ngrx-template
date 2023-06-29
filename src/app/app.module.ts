import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { ListDocumentsComponent } from './components/list-documents/list-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddDocumentComponent,
    ListDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

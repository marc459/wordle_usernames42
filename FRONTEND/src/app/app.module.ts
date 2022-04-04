import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleTableComponent } from './wordle-table/wordle-table.component';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    WordleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './view/navbar/navbar.component';
import { FooterComponent } from './view/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { InsertEquipComponent } from './components/insert-equip/insert-equip.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RealTimeComponent,
    InsertEquipComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

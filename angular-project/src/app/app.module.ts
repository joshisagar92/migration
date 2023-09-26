import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './components/blank/blank.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { installDowngradedAngularJsComponenet } from './downgrade-angular-js';
import { ModalService } from './service/modal-service.service';



@NgModule({
  declarations: [
    AppComponent,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
 
})


export class AppModule implements DoBootstrap {
  private upgrade : UpgradeModule
  
  constructor(upgrade : UpgradeModule){
    this.upgrade = upgrade
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(AppComponent)
    
    
    installDowngradedAngularJsComponenet()
    this.upgrade.bootstrap(document.getElementById("studentApp") as Element,["studentApp","ngRoute","oc.lazyLoad"]) 
    //setUpModalWrapper()
    this.bootstrapAngularjs()
    
  }

  private bootstrapAngularjs(){
    
  }
}

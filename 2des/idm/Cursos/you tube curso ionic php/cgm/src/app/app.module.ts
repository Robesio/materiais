import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServidorProvider } from '../providers/servidor/servidor';

import { HttpModule } from '@angular/http';
import { DetalhesContatosPage } from '../pages/detalhes-contatos/detalhes-contatos';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [ //Chama pagina
    MyApp,
    HomePage,
    ListPage,
    DetalhesContatosPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [  //Chama pagina
    MyApp,
    HomePage,
    ListPage,
    DetalhesContatosPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServidorProvider
  ]
})
export class AppModule { }

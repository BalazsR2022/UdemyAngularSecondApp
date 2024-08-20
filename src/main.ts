import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


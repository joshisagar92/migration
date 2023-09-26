import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


document.addEventListener('DOMContentLoaded', function(){
  
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});


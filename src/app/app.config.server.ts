import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { ChildComponent} from './child/child.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { NotFoundPageComponent} from './not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: 'child-component', component: ChildComponent },
  { path: 'font-size', component: FontSizeComponent },
  { path: '**', component: NotFoundPageComponent}
];

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    [provideRouter(routes)]
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);



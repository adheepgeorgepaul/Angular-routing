import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'users', component: UsersComponent },
{ path: 'users/:id/:name', component: UserComponent },
{ path: 'servers', component: ServersComponent },
{ path: 'servers/:id/edit', component: EditServerComponent },
{ path: 'servers/:id', component: ServerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

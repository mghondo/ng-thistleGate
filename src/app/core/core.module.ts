import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AuthModule],
  providers: [AuthService],
})
export class CoreModule {}

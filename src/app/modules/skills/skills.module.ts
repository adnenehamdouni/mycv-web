import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from 'src/app/components/client/skills/skills.component';
import { SESSION_STORAGE } from 'ngx-webstorage-service';
import {
  MY_AWESOME_SERVICE_STORAGE,
  SessionStorageService
} from 'src/app/shared/services/storage/session-storage.service';

@NgModule({
  providers: [
    { provide: MY_AWESOME_SERVICE_STORAGE, useExisting: SESSION_STORAGE },
    SessionStorageService
  ],
  declarations: [SkillsComponent],
  imports: [CommonModule]
})
export class SkillsModule {}

import { Injectable, Inject, InjectionToken } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Skills } from 'src/app/model/skills.model';

export const MY_AWESOME_SERVICE_STORAGE = new InjectionToken<StorageService>(
  'MY_AWESOME_SERVICE_STORAGE'
);

const STORAGE_KEY = 'pure-awesomeness';
const SKILLS_CONTEXT_KEY = 'skills';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  public data: any = [];

  constructor(
    @Inject(MY_AWESOME_SERVICE_STORAGE) private storage: StorageService
  ) {}

  public setSkillsContext(skills: Skills[]): void {
    console.log(
      'SessionStorageService: setSkillsContext -> skills = ' +
        JSON.stringify(skills)
    );
    this.storage.set(STORAGE_KEY, skills);
  }

  public getSkillsContext(): Skills[] {
    console.log(
      'SessionStorageService: getSkillsContext -> key:' + SKILLS_CONTEXT_KEY
    );
    const value: Skills[] = this.storage.get(SKILLS_CONTEXT_KEY);
    //this.data[key] = this.storage.get(key);
    console.log(
      'SessionStorageService: getSkillsContext -> value = ' +
        JSON.stringify(value)
    );
    return value;
  }

  /**
   *
   */

  public setToLocal(): number {
    const awesomenessLevel: number = this.storage.get(STORAGE_KEY) || 1337;

    const valueTosTore: number = awesomenessLevel + 1;

    console.log(
      'SessionStorageService: getFromLocal -> STORAGE_KEY = ' +
        STORAGE_KEY +
        ' and data to store = ' +
        valueTosTore
    );
    this.storage.set(STORAGE_KEY, awesomenessLevel + 1);
    return awesomenessLevel;
  }

  public getFromLocal(key: string): any {
    console.log('recieved= key:' + key);
    const value: number = this.storage.get(key);
    //this.data[key] = this.storage.get(key);
    console.log(
      'SessionStorageService: getFromLocal -> value = ' + JSON.stringify(value)
    );
    return value;
  }
}

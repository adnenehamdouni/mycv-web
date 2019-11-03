import { Injectable, Inject, InjectionToken } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";

export const MY_AWESOME_SERVICE_STORAGE = new InjectionToken<StorageService>(
  "MY_AWESOME_SERVICE_STORAGE"
);

const STORAGE_KEY = "pure-awesomeness";

@Injectable({
  providedIn: "root"
})
export class SessionStorageService {
  public data: any = [];

  constructor(
    @Inject(MY_AWESOME_SERVICE_STORAGE) private storage: StorageService
  ) {}

  public doSomethingAwesome(): number {
    const awesomenessLevel: number = this.storage.get(STORAGE_KEY) || 1337;
    this.storage.set(STORAGE_KEY, awesomenessLevel + 1);
    return awesomenessLevel;
  }
}

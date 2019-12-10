import { TestBed } from "@angular/core/testing";

import { SessionStorageService } from "./session-storage.service";

describe("StorageService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: SessionStorageService = TestBed.get(SessionStorageService);
    expect(service).toBeTruthy();
  });
});

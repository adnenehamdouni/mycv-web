import { Component, OnInit } from "@angular/core";
import { SkillsService } from "src/app/services/skills.service";
import { Skills } from "src/app/model/skills.model";
import { SkillsResponse } from "src/app/core/responses/skills-response.model";
import { isStorageAvailable } from "ngx-webstorage-service";
import { SessionStorageService } from "src/app/shared/services/storage/session-storage.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  //private heroes = HEROES;
  skillss: Skills[];
  response: SkillsResponse;

  constructor(
    private skillsServie: SkillsService,
    private sessionStorageService: SessionStorageService
  ) {}

  public hasSkillss: boolean = false;

  ngOnInit() {
    console.log("SkillsComponent: ngOnInit");
    const sessionStorageAvailable = isStorageAvailable(sessionStorage);

    this.trySaveSessionStrogage();
    this.tryLoadSessionStrogage();

    console.log(`Session storage available: ${sessionStorageAvailable}`);
    this.getSkills();
  }

  trySaveSessionStrogage() {
    this.sessionStorageService.setToLocal();
  }

  tryLoadSessionStrogage() {
    this.sessionStorageService.getFromLocal("pure-awesomeness");
  }

  /**
   *
   */

  getSkills() {
    this.skillsServie.getSkillss().subscribe(response => {
      this.response = response;
      console.log(
        "SkillsComponent: retreive skillsResponse : " + JSON.stringify(response)
      );
      if (this.response.skillsList != null) {
        this.skillss = this.response.skillsList;
        // Save session data - Skills list
        this.sessionStorageService.setSkillsContext(this.skillss);
        // Retrieve session data - Skills list
        this.sessionStorageService.getSkillsContext();

        this.hasSkillss = true;
      }
    });
  }
}

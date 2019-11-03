import { Component, OnInit } from "@angular/core";
import { SkillsService } from "src/app/services/skills.service";
import { Skills } from "src/app/model/skills.model";
import { SkillsResponse } from "src/app/core/responses/skills-response.model";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  //private heroes = HEROES;
  skillss: Skills[];
  response: SkillsResponse;

  constructor(private skillsServie: SkillsService) {}

  public hasSkillss: boolean = false;

  ngOnInit() {
    console.log("SkillsComponent: ngOnInit");
    this.getSkills();
  }

  getSkills() {
    this.skillsServie.getSkillss().subscribe(response => {
      this.response = response;
      console.log(
        "SkillsComponent: retreive skillsResponse : " + JSON.stringify(response)
      );
      if (this.response.skillsList != null) {
        this.skillss = this.response.skillsList;

        this.hasSkillss = true;
      }
    });
  }
}

import { Skills } from 'src/app/model/skills.model';

export class SkillsResponse {
  status: string;
  message: string;
  skills: Skills;
  skillsList: Array<Skills>;
}

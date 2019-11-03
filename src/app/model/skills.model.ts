import { Deserializable } from "../core/utils/deserializable.model";

export class Skills implements Deserializable {
  id: number;
  name: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

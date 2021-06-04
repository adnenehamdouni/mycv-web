export class Skills {
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

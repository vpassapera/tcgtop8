export class League {
  private readonly _name: string;
  private readonly _description: string;
  private readonly _private: boolean = false;
  private readonly _logoUrl: string;
  private readonly _createdBy: string = null;
  private readonly _updatedBy: string = null;
  private readonly _createdAt: Date = null;
  private readonly _updatedAt: Date = null;
  private _members: string[] = [];
  private _moderators: string[] = [];

  constructor(
    name: string,
    description: string,
    isPrivate: boolean,
    logoUrl: string,
    createdBy?: string,
    updatedBy?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this._name = name;
    this._description = description;
    this._private = isPrivate;
    this._logoUrl = logoUrl;
    this._createdBy = createdBy;
    this._updatedBy = updatedBy;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  public addMember(member: string) {
    this._members.push(member);
  }

  public removeMember(member: any) {
    this._members.splice(this._members.indexOf(member), 1);
  }

  get members(): string[] {
    return this._members.slice(0);
  }

  public addModerator(moderator: any) {
    this._moderators.push(moderator);
  }

  public removePlayer(moderator: any) {
    this._moderators.splice(this._moderators.indexOf(moderator), 1);
  }

  get moderators(): string[] {
    return this._moderators.slice(0);
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get isPrivate(): boolean {
    return this._private;
  }

  get logoUrl(): string {
    return this._logoUrl;
  }

  get createdBy(): string | null {
    return this._createdBy;
  }

  get updatedBy(): string | null {
    return this._updatedBy;
  }

  get createdAt(): Date | null {
    return this._createdAt;
  }

  get updatedAt(): Date | null {
    return this._updatedAt;
  }
}

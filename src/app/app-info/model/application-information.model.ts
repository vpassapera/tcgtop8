export class ApplicationInformation {
  constructor(
    private _appName: string,
    private _version: string,
    private _sourceRef: string,
    private _buildDateTime: string
  ) {}

  get appName(): string {
    return this._appName;
  }

  get version(): string {
    return this._version;
  }

  get sourceRef(): string {
    return this._sourceRef;
  }

  get buildDateTime(): string {
    return this._buildDateTime;
  }
}

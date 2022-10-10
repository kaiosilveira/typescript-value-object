export default class Tag {
  private _text: string;

  constructor({ text }: { text: string }) {
    this._text = text;
  }

  get text(): string {
    return this._text;
  }

  equals(other: Tag): boolean {
    return other instanceof Tag && this.text === other.text;
  }
}

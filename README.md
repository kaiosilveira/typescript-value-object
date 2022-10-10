# Value Object - Typescript

A small simple object, like money or a date range, whose equality isn’t based on identity.

## Implementation considerations

It's tricky to implement a value object "by the book" in Javascript/Typescript as we can't override the equality operators `==` and `===`. An alternative to that would be defining an `equals` operation that takes as a parameter another value object and compares the `instanceof` the object as well as its value. It's also possible to simply use the `==` operator (value equality) to compare between two objects, although it looks weak.

## Implementation details

A `Tag` can be modeled as a value object. Simple tags contain only a text label and are considered equal if the text of one tag matches the text of another. The code is detailed below:

```typescript
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
```

## Test suite

Tests for the `Tag` object are straightforward:

```typescript
describe('Tag', () => {
  it('should have a text', () => {
    const tag = new Tag({ text: 'work' });
    expect(tag.text).toEqual('work');
  });

  it('should be equal another tag with the same text', () => {
    const tag1 = new Tag({ text: 'work' });
    const tag2 = new Tag({ text: 'work' });
    expect(tag1.equals(tag2)).toBe(true);
  });

  it('should not be equal an object of another type', () => {
    const tag1 = new Tag({ text: 'work' });
    const tag2 = { text: 'work' } as Tag;
    expect(tag1.equals(tag2)).toBe(false);
  });

  it('should not be equal null', () => {
    const tag1 = new Tag({ text: 'work' });
    const tag2 = null as unknown as Tag;
    expect(tag1.equals(tag2)).toBe(false);
  });
});
```

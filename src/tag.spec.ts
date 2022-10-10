import Tag from './tag';

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

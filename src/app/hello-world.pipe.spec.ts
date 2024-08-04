import { HelloWorldPipe } from './hello-world.pipe';

describe('HelloWorldPipe', () => {
  it('create an instance', () => {
    const pipe = new HelloWorldPipe();
    expect(pipe).toBeTruthy();
  });
});

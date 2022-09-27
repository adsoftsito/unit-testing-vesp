import { greet } from './greet';

describe('greet test suite', () => {
  it('Should include the name in the message', () => {
    expect(greet('adsoft')).toBe('Welcome adsoft');  
  })

})

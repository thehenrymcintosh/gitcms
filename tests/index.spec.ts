import { domain } from '@domain/index';

describe('Test suite', () => {
  it('Should execute', () => {
    const f = domain();
    expect(f).toEqual('domaininfrastructure');
  });
});

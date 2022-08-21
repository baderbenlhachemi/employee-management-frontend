import {Company} from './company.model';

describe('Company', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Company()).toBeTruthy();
  });
});

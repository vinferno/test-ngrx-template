import * as fromUsers from './users.actions';

describe('addUserUserss', () => {
  it('should return an action', () => {
    expect(fromUsers.addUserUserss().type).toBe('[Users] AddUser Userss');
  });
});

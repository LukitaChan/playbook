const UserService = require("../../app/services/UserService");

describe("Test for UseService", () => {
  test("1. Create a new user using the UserService", () => {
  const user = UserService.create(1, "Luka", "Lucy");
    expect(user.username).toBe("Luka");
    expect(user.name).toBe("Lucy");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  })

  test("2. Get all user data in a list", () => {
    const user = UserService.create(2, "Chisto", "Chris");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(2);
    expect(userInfoInList[1]).toBe("Chisto");
    expect(userInfoInList[2]).toBe("Chris");
    expect(userInfoInList[3]).toBe("Sin Bio");
  })

  test("3. Update username", () => {
    const user = UserService.create(3, "Galleta", "Pukis");
    UserService.updateUserUsername(user, "Galle")
    expect(user.username).toBe("Galle")
  })

    test("4. Given a list of users give me the list of usernames", () => {
      const user1 = UserService.create(4, "asuka1", "Asuka");
      const user2 = UserService.create(4, 'asuka2', 'Asuka');
      const user3 = UserService.create(4, 'asuka3', 'Asuka');
      const usernames = UserService.getAllUsernames([user1, user2, user3]);
      expect(usernames).toContain("asuka1");
      expect(usernames).toContain('asuka2');
      expect(usernames).toContain('asuka3');
      
    });
  });
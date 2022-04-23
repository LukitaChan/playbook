const User = require("../../app/models/User");

describe('Unit Tests for User class', () => {
  test('Create an User object', () => {
    const user = new User(1, "Lukarita", "Lucy", "myBio");

    expect(user.id).toBe(1)
    expect(user.username).toBe("Lukarita")
    expect(user.name).toBe("Lucy")
    expect(user.bio).toBe("myBio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined();
  });

  test('Add getters', () => {
    const user = new User(2, 'Chistoperez', 'Christo', 'LeBio');

    expect(user.getUsername).toBe('Chistoperez');
    expect(user.getBio).toBe('LeBio');
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });

  test('Add setters', () => {
    const user = new User(3, "Galleta", "Pukis", "BioGalle");
    user.setUsername = "Pituka";
    expect(user.username).toBe("Pituka");

    user.setBio = "New Galle Bio";
    expect(user.bio).toBe('New Galle Bio');
  });
});


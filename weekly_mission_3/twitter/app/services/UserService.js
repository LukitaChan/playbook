const User = require('./../models/User');

class UserService {
	static create(id, username, name) {
		return new User(id, username, name, 'Sin Bio');
	}

	static getInfo(user) {
		return [user.id, user.username, user.name, user.bio];
	}

	static updateUserUsername(user) {
		return user.username = "Galle";
	}

  static getAllUsernames(user) {
    const mapeoUsuarios = user.map((el) => el.username);
    return mapeoUsuarios;
  }
}

  module.exports = UserService;
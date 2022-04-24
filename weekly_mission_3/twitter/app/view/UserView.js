const User = require("../models/User");

class UserView {
  static createUser(payload) {
    if(payload !== null) {
      if (payload.username !== null && payload.name !== null && payload.id !== null) {
        if (typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
					return new User(payload.id, payload.username, payload.name);
				} else {
					return { error: 'necesitan tener un valor valido' };
				}
      } else {
        return {error: "necesitan tener un valor valido"}
      }
    } else {
      return {
        error: "payload no existe"
      }
    }
  }
}
module.exports = UserView;

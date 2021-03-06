const users = [];

//add User
const addUser = ({ id, username, room }) => {
  //Clean the date
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Validate the date
  if (!username || !room) {
    return {
      error: 'Username and room are required',
    };
  }
  //Check for existing user

  const existingUser = users.find(user => {
    return user.room === room && user.username === username;
  });
  //Validate username
  if (existingUser) {
    return {
      error: 'Username is in use in this room',
    };
  }
  //Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

//remove User

const removeUSer = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room =>
  users.filter(user => user.room === room.trim().toLowerCase());

module.exports = {
  addUser,
  getUsersInRoom,
  getUser,
  removeUSer,
};

const users = [
  {
    id: 1,
    name: "John Doe",
    password: "password123",
    email: "abcd@mail.com",
    roles: ["USER"],
  },
  {
    id: 2,
    name: "Jane Smith",
    password: "123",
    email: "aryalnaresh4@gmail.com",
    roles: ["ADMIN","MILD"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    password: "password123",
    email: "alice@mail.com",
    roles: ["SUPER_ADMIN"],
  },
];

export const getUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};

export const verifyUserCredentials = (email, password) => {
  const user = getUserByEmail(email);

  if (user && user.password === password) {
      const { password, ...userWithoutPassword } = user;

       return {
      ...userWithoutPassword,
      isAuthenticated: true, 
    };
  }

  return null;
};
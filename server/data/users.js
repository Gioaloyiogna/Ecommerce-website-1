import bcrypt from "bcrypt";
const users = [
  {
    name: "Giovanni",
    email: "admin@gmail.com",
    password:bcrypt.hashSync("123456",10),
    isAdmin: true,
   
  },
  {
    name: "User",
    email: "user@gmail.com",
    password:bcrypt.hashSync("123456",10),
    isAdmin:false,
    
  },
];
export default users;

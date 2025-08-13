import { UserBuilder } from "./UserBuilder";

const user = UserBuilder.create()
  .setName("Alice Johnson")
  .setEmail("alice@example.com")
  .setAge(28)
  .setAddress("123 Maple St, Springfield")
  .build();

console.log("Built user:", user);

// You can also build with only required fields:
// const minimalUser = UserBuilder.create()
//   .setName("Bob Smith")
//   .setEmail("bob@example.com")
//   .build();
// console.log("Built minimal user:", minimalUser);

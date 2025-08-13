import { User } from "./User";

// Staged builder interfaces (enforce required fields in order)
export interface NameStep {
  setName(name: string): EmailStep;
}

export interface EmailStep {
  setEmail(email: string): OptionalStep;
}

export interface OptionalStep {
  setAge(age: number): OptionalStep;
  setAddress(address: string): OptionalStep;
  build(): User;
}

// Concrete builder implementing all steps
class _UserBuilder implements NameStep, EmailStep, OptionalStep {
  private user: Partial<User> = {};

  setName(name: string): EmailStep {
    this.user.name = name;
    return this;
  }

  setEmail(email: string): OptionalStep {
    this.user.email = email;
    return this;
  }

  setAge(age: number): OptionalStep {
    this.user.age = age;
    return this;
  }

  setAddress(address: string): OptionalStep {
    this.user.address = address;
    return this;
  }

  build(): User {
    const { name, email, age, address } = this.user;

    if (!name || !email) {
      throw new Error("Missing required fields: name and email");
    }

    // Return an immutable User object
    return Object.freeze({ name, email, age, address } as User);
  }
}

// Entry point for clients
export class UserBuilder {
  static create(): NameStep {
    return new _UserBuilder();
  }
}

// Domain model: User
export interface User {
  readonly name: string;
  readonly email: string;
  readonly age?: number;
  readonly address?: string;
}

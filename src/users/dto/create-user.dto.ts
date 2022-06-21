export class CreateUserDto {
  readonly name;
  readonly email;
  readonly password;
}

export class LoginUserDto {
  readonly email;
  readonly password;
}

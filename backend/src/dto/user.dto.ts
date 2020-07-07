import {validate, Length} from "class-validator";

export class UserDto {

	@Length(4)
	username: string;

	@Length(8)
	password: string;

	constructor(username: string, password: string) {
		this.password = password;
		this.username = username;
	}
}
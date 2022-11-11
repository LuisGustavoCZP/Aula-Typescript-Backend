import { validators } from "../../base";
import { IUser } from "../interfaces";

export class UserValidator extends validators.Validator
{
    constructor (data : IUser)
    {
        super(data);

        this.data.email = this.checkEmail(data.email);
        this.data.name = this.checkName(data.name);
        this.data.password = this.checkPassword(data.password);
    }

    checkEmail (email : string)
    {
        const validator = new validators.EmailValidator(email, {max_length:255});
        if(validator.errors) this.errors += `email:${validator.errors},`;
        return validator.data;
    }

    checkName (name : string)
    {
        const validator = new validators.NameValidator(name, {max_length:255});
        if(validator.errors) this.errors += `name:${validator.errors},`;
        return validator.data;
    }

    checkPassword (password : string)
    {
        const validator = new validators.PasswordValidator(password, {max_length:255});
        if(validator.errors) this.errors += `password:${validator.errors},`;
        return validator.data;
    }
}
import { User } from "./User";

export class Serviceman extends User {

    constructor(id: string, firstName: string, lastName: string, email: string, password: string, phoneNumber: string) {
        super(id, firstName, lastName, email, password, phoneNumber);
    }

    static fromJson(json: any): Serviceman {
        return new Serviceman(json.id, json.firstName, json.lastName, json.email, json.password, json.phoneNumber);
    }

    isServiceman(): boolean {
        return true;
    }
}

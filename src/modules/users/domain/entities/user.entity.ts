export class User {
    public readonly role: string = '2';
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string
    ) {}
}

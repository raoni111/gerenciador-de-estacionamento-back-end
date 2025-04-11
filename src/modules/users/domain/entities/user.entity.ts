export class User {
    public readonly rule = '2';
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string
    ) {}
}

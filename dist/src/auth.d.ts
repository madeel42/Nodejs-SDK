export declare class Auth {
    private key;
    private secret;
    constructor(key: string, secret: string);
    generateToken(): string;
}

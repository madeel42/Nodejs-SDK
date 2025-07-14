export declare class APIClient {
    private key;
    private secret;
    private token;
    constructor(key: string, secret: string);
    uploadFile(filePath: string): Promise<string[]>;
    getToken(): string;
}

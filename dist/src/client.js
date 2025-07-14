import { Auth } from './auth';
import fs from 'fs/promises';
export class APIClient {
    constructor(key, secret) {
        this.key = key;
        this.secret = secret;
        const auth = new Auth(key, secret);
        this.token = auth.generateToken();
    }
    async uploadFile(filePath) {
        const file = await fs.readFile(filePath);
        const chunkSize = 1024;
        const parts = [];
        for (let i = 0; i < file.length; i += chunkSize) {
            const slice = file.subarray(i, i + chunkSize);
            parts.push(`Uploaded slice ${i / chunkSize + 1} of size ${slice.length}`);
        }
        return parts;
    }
    getToken() {
        return this.token;
    }
}

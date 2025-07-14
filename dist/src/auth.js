import jwt from 'jsonwebtoken';
export class Auth {
    constructor(key, secret) {
        this.key = key;
        this.secret = secret;
    }
    generateToken() {
        const payload = { key: this.key };
        return jwt.sign(payload, this.secret, { expiresIn: '1h' });
    }
}

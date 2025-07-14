import jwt from 'jsonwebtoken';

export class Auth {
  constructor(private key: string, private secret: string) {}

  generateToken(): string {
    const payload = { key: this.key };
    return jwt.sign(payload, this.secret, { expiresIn: '1h' });
  }
}

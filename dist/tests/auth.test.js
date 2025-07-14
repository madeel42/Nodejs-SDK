import { Auth } from '../src/auth';
import jwt from 'jsonwebtoken';
describe('Auth', () => {
    it('generates a valid JWT token', () => {
        const auth = new Auth('demoKey', 'demoSecret');
        const token = auth.generateToken();
        const decoded = jwt.verify(token, 'demoSecret');
        expect(decoded.key).toBe('demoKey');
    });
});

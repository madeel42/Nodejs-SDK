import { APIClient } from '../src/client';
import fs from 'fs/promises';

jest.mock('fs/promises');

describe('APIClient', () => {
  it('generates auth token and uploads file in parts', async () => {
    const client = new APIClient('demoKey', 'demoSecret');
    (fs.readFile as jest.Mock).mockResolvedValue(Buffer.alloc(3072)); // 3KB

    const result = await client.uploadFile('dummy.txt');
    expect(result.length).toBe(3); 
    expect(result[0]).toMatch(/Uploaded slice 1/);
  });
});

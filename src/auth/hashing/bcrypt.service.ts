/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { HashingService } from './hashing.service';
import * as bcrypt from 'bcryptjs';

export abstract class BcryptService extends HashingService {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async compare(password: string, passwordHash: any): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}

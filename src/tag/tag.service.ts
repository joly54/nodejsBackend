import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['nestjs', 'nodejs', 'django', 'flask'];
  }
}

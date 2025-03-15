import { DefaultOptionsEntity } from '../../models/default-options.entity';
import { e6aiFileOptionsEntity } from './e6ai.file.options';

// tslint:disable-next-line: class-name
export class e6ai {
  static readonly FileOptions = e6aiFileOptionsEntity;
  static readonly NotificationOptions = DefaultOptionsEntity;
}

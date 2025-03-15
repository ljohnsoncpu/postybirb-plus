import { DefaultFileOptions } from '../../submission/default-options.interface';

// tslint:disable-next-line: class-name
export interface e6aiFileOptions extends DefaultFileOptions {
  sources: string[];
  parentId?: string;
}

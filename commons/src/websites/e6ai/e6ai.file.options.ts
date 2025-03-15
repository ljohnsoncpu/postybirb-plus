import { Expose } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { DefaultFileOptions } from '../../interfaces/submission/default-options.interface';
import { e6aiFileOptions } from '../../interfaces/websites/e6ai/e6ai.file.options.interface';
import { DefaultValue } from '../../models/decorators/default-value.decorator';
import { DefaultFileOptionsEntity } from '../../models/default-file-options.entity';

// tslint:disable-next-line: class-name
export class e6aiFileOptionsEntity extends DefaultFileOptionsEntity implements e6aiFileOptions {
  @Expose()
  @IsArray()
  @DefaultValue([])
  sources!: string[];

  @Expose()
  @IsOptional()
  @IsString()
  parentId?: string;

  constructor(entity?: Partial<e6aiFileOptions>) {
    super(entity as DefaultFileOptions);
  }
}

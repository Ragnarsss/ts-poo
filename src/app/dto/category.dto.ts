import { AccesType, Category } from '../models/category.model';
import {
  IsUrl,
  IsNotEmpty,
  IsEnum,
  validateOrReject,
  IsOptional,
  Length,
} from 'class-validator';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 10)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccesType)
  acces?: AccesType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'a';
    await validateOrReject(dto);
  } catch (error) {
    console.error(error);
  }
})();

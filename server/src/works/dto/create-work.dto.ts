import { IsString } from "class-validator";

export class CreateWorkDto {
  @IsString()
  subtitle: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  images: string[];
}

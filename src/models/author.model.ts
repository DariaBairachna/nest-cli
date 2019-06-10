import { ApiModelProperty } from '@nestjs/swagger';

export class AuthorModel {
    @ApiModelProperty()
    name: string;
}

import { ApiModelProperty } from '@nestjs/swagger';

export class UserModel{
    @ApiModelProperty()
    name: string;

    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    password: string;

    @ApiModelProperty()
    role: string;
}

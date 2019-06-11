import { ApiModelProperty } from '@nestjs/swagger';
export class BookModel {
    @ApiModelProperty()
    readonly title: string;

    @ApiModelProperty()
    readonly publishing: string;

    @ApiModelProperty()
    readonly year: string;

    @ApiModelProperty()
    readonly price: string;

}

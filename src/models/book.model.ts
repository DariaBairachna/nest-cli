import { ApiModelProperty } from '@nestjs/swagger';
import { AuthorModel } from '.';
export class BookModel {
    @ApiModelProperty()
    readonly title: string;

    @ApiModelProperty()
    readonly publishing: string;

    @ApiModelProperty()
    readonly year: string;

    @ApiModelProperty()
    readonly price: string;

    @ApiModelProperty()
    readonly authorId: AuthorModel[];

}

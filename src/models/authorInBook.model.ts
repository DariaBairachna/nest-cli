import { ApiModelProperty } from '@nestjs/swagger';

export class AuthorInBookModel {
    @ApiModelProperty()
    bookId: string;
    @ApiModelProperty()
    authorId: string[];
}

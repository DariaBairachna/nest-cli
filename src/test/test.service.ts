import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

    public result: string;
    calculate(Model) {
       this.result = "";
        for (let i = 0; i < Model.num; i++) {
            this.result += "a";
        }
    }
}

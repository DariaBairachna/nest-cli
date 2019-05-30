import { Injectable, Inject } from '@nestjs/common';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
@Injectable()
export class TestService {
 
    constructor(@Inject('DATABASE_CONNECTION') private databaseContext: any) {
       
    }
  

    public result: string;
    calculate(Model) {
        this.result = "";
        for (let i = 0; i < Model.num; i++) {
            this.result += "a";
        }
    }

    test() {
        const Schema = this.databaseContext.Schema;

        // установка схемы
        const userScheme = new Schema({
            name: String,
            age: Number
        });

        const User = this.databaseContext.model("User", userScheme);
        const user = new User({
            name: "Bill",
            age: 41
        });

        user.save(function (err) {
            this.databaseContext.disconnect();  // отключение от базы данных
        });
    }
}

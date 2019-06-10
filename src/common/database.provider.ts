import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://admin_dasha:123qwe@cluster0-3ruic.mongodb.net/booksShop?retryWrites=true&w=majority',
      { useNewUrlParser: true }),
  },
];

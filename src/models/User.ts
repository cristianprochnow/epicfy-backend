import knex, { Knex } from 'knex';
import { db } from '../config/db';
import {
  UserInsertRow,
  UserRow
} from '../types/user';

export class User {
  private db: Knex;

  constructor() {
    this.db = db;
  }

  async add(user: UserInsertRow) {
    return this.db<UserInsertRow>('user').insert(user);
  }

  async getByEmail(email: string): Promise<number | null> {
    const user = await this.db<UserRow>('user')
      .select('id')
      .where('email', email)
      .first();
    let id = null;

    if (user && user.id) {
      id = user.id;
    }

    return id;
  }
}

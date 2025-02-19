import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const count = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(count).length;
  } catch (error) {
    if (error.code == 'ENOENT') {
      return 'File doesn`t exists';
    }
    return error.message;
  }
};

console.log(await countContacts());

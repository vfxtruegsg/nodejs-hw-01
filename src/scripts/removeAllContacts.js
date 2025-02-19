import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
  } catch (error) {
    if (error.code == 'ENOENT') {
      return 'File doesn`t exists';
    }
    return error.message;
  }
};

removeAllContacts();

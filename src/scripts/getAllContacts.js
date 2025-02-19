import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const dataArray = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(dataArray);
  } catch (error) {
    if (error.code == 'ENOENT') {
      return 'File doesn`t exists';
    }
    return error.message;
  }
};

console.log(await getAllContacts());

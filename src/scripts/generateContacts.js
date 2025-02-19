import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const generateContacts = async (number) => {
  try {
    let data = [];

    try {
      const fileContent = await fs.readFile(PATH_DB, 'utf-8');
      data = JSON.parse(fileContent);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        return 'File doesn`t exists';
      }
      return error.message;
    }

    for (let i = 0; i < number; i++) {
      data.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(data));
  } catch (error) {
    return error.message;
  }
};

generateContacts(5);

import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const data = JSON.parse(fileContent);
    if (data.length === 0) {
      return 'Data is empty';
    }

    const updateData = data.slice(0, -1);
    await fs.writeFile(PATH_DB, JSON.stringify(updateData));
  } catch (error) {
    if (error.code == 'ENOENT') {
      return 'File doesn`t exists';
    }
    return error.message;
  }
};

removeLastContact();

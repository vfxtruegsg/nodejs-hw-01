import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    let data = [];

    try {
      data = await readContacts();
    } catch (error) {
      if (error.code !== 'ENOENT') {
        return 'File doesn`t exists';
      }
      return error.message;
    }

    data.push(createFakeContact());

    await writeContacts(data);
  } catch (error) {
    return error.message;
  }
};

addOneContact();

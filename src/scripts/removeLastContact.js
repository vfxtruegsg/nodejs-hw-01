import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const fileContent = await readContacts();
    if (fileContent.length === 0) {
      return 'Data is empty';
    }

    await writeContacts(fileContent.slice(0, -1));
  } catch (error) {
    if (error.code == 'ENOENT') {
      return 'File doesn`t exists';
    }
    return error.message;
  }
};

removeLastContact();

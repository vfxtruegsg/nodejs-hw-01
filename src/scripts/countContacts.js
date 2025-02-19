import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const count = await readContacts();
    return count.length;
  } catch (error) {
    if (error.code == 'ENOENT') {
      return 'File doesn`t exists';
    }
    return error.message;
  }
};

console.log(await countContacts());

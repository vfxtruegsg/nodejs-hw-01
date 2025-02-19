import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const dataArray = await readContacts();
    console.log(dataArray);

    return dataArray;
  } catch (error) {
    if (error.code == 'ENOENT') {
      return 'File doesn`t exists';
    }
    return error.message;
  }
};

console.log(await getAllContacts());

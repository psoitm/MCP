
import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


export const readData = (filePath) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fullPath = resolve(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(content);
};
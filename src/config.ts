import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface IConfig {
  Bot: {
    botToken: string;
  };
  database: {
    host: string;
    port: number;
    name: string;
    username?: string;
    password?: string;
  };
}

const configPath = path.join(__dirname, '..', 'config.yaml');
let config: IConfig;

try {
  const fileContents = fs.readFileSync(configPath, 'utf8');
  config = yaml.load(fileContents) as IConfig;
} catch (error) {
  console.error('Ошибка чтения конфигурационного файла:', error);
  process.exit(1);
}

export default config;

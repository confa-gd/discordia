import 'dotenv/config.js';
import { client } from './src/client.js';

const token = process.env.DISCORDIA_TOKEN;
client.login(token);
import Axios from 'axios';
import * as http from 'http';
import * as https from 'https';
import * as ProxyAgent from 'https-proxy-agent';
import * as querystring from 'querystring';
import * as url from 'url';
import * as zlib from 'zlib';
import { Config } from './config.helper';

let HttpClient = Axios.create();
if (Config.get('PROXY')) {
    const agent = new ProxyAgent(Config.get('PROXY'));
    HttpClient = Axios.create({ httpsAgent: agent });
}
export default HttpClient;

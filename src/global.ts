import { Config } from './helpers/config.helper';

export class Global {
    static get sfsupportHost() {
        if (Config.get('APP_MODE') === 'local') {
            return 'http://localhost:3000';
        } else if (Config.get('APP_MODE') === 'development') {
            return 'http://localhost:3001';
        } else {
            return 'https://firas-technology.com';
        }
    }
}

import { existsSync } from 'fs';
import * as mkdirp from 'mkdirp';
import { join } from 'path';
import { Config } from './config.helper';

export class StorageHelper {
    static basePath(): string {
        return Config.get('STORAGE_PATH');
    }

    static storagePath(dir: string): string {
        const path = join(this.basePath(), dir);
        if (!existsSync(path)) {
            mkdirp.sync(path);
            // mkdirSync(path, { recursive: true }); // node 10.12.0++
        }
        return path;
    }

    static mkdir(dir: string) {
        if (!existsSync(dir)) {
            mkdirp.sync(dir);
            // mkdirSync(dir, { recursive: true }); // node 10.12.0++
        }
    }

    static baseFullPath(storagePath: string, container: string, fileName: string) {
        let basePath: string = this.basePath();
        switch (storagePath) {
            case 'storagePagebuilder':
                basePath = this.storagePath('pagebuilder');
                break;
            default:
                basePath = basePath;
                break;
        }

        return {
            basePath,
            container,
            fileName,
        };
    }
}

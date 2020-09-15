/*
 * Author: 卓文理
 * Email: zhuowenligg@gmail.com
 * Date: 2020-09-02 11:08:45
 */

import { Application } from 'egg';
import Queue = require('bull');

export default async (app: Application) => {
    const config = app.config.bull;
    if (!config) {
        throw new Error('please config bull in config file');
    }

    app.addSingleton('bull', (config: any, app: Application) => {
        const { name, redis } = config;

        if (!name) {
            app.logger.error('[egg-bull]', 'name is required on config');
            return;
        }

        if (!redis || !redis.host || !redis.port) {
            app.logger.error('[egg-bull]', 'host and port of redis are required on config');
            return;
        }

        const queue = new Queue(name, config);

        queue.on('error', error => {
            app.logger.error(error);
            process.exit(1);
        });

        app.beforeStart(() => {
            app.logger.info(`[egg-bull] ${name} 连接成功`);
        });

        return queue;
    });
};

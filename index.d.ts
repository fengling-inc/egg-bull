/*
 * Author: 卓文理
 * Email: zhuowenligg@gmail.com
 * Date: 2020-09-17 18:28:43
 */

import { QueueOptions } from 'bull';

interface IBullConfig extends QueueOptions {
    name ? : string;
}

declare module 'egg' {
    interface EggAppConfig {
        bull: {
            client ? : IBullConfig;
            clients ? : {
                [key: string]: IBullConfig;
            };
            default ? : IBullConfig;
        };
    }
}

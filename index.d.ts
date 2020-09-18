/*
 * Author: 卓文理
 * Email: zhuowenligg@gmail.com
 * Date: 2020-09-17 18:28:43
 */

import { Queue } from 'bull';

declare module 'egg' {
    export interface Application {
        bull: Queue;
    }
}

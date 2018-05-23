/**
 * Created by Aus on 2018/5/23.
 */
import Base from './base';

export default class Support extends Base {
    constructor () {
        super();
        this.sendSMSCodeForSign = this.sendSMSCodeForSign.bind(this);
    }
    sendSMSCodeForSign (ctx) {
        ctx.body = '123';
    }
}
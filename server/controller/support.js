/**
 * Created by Aus on 2018/5/17.
 */
import Base from './base';

export default class support extends Base {
    constructor(props){
        super(props);
    }
    sendSMSCodeForSign (ctx) {
        // 验证参数
        console.log(this);
        this.parameterCheck(ctx);
        // 调用server
        console.log('2222');
        // 返回结果
    }
}
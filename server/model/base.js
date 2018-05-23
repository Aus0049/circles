/**
 * Created by Aus on 2018/5/23.
 */
import helper from '../common/helper';

export default function (schema, options) {
    //获取当前数据的创建时间
    schema.methods.create_at_ago = function () {
        return helper.formatDate(this.create_at, true);
    };
};
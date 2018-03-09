/**
 * Created by Aus on 2018/3/9.
 */
import tool from '../common/tool';

export default function (schema, options) {
    //获取当前数据的创建时间
    schema.methods.create_at_ago = function () {
        return tool.formatDate(this.create_at, true);
    };
};
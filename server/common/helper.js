/**
 * Created by Aus on 2018/5/23.
 */
import moment from 'moment';

moment.locale('zh-cn'); // 使用中文

// 格式化时间
function formatDate (date, friendly) {
    date = moment(date);

    if (friendly) {
        return date.fromNow();
    }

    return date.format('YYYY-MM-DD HH:mm');
}

export default {
    formatDate
}
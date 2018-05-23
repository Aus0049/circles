/**
 * Created by Aus on 2018/5/23.
 */

export default class ParameterException extends Error {
    constructor(param, message){
        super(message);

        this.name = 'ParameterException';

        this.detail = {
            [param]: message
        };
    }
}
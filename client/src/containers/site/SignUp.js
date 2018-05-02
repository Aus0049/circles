/**
 * Created by Aus on 2018/4/27.
 */
import React from 'react';
import { Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Icon from 'component-font-awesome';
const FormItem = Form.Item;

// 注册
class SignUp extends React.Component {
    constructor (props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit () {

    }
    getFormItem() {
        const { getFieldDecorator } = this.props.form;
        const result = [];
        // 注册表单构成

        // 1. email
        result.push(
            <FormItem key="email">
                {getFieldDecorator('email', {
                    rules: [
                        {required: true, message: '邮箱不能为空!'},
                        {type: 'email', message: '邮箱格式错误！'}
                    ],
                    validateTrigger: 'onBlur'
                })(
                    <Input prefix={<Icon type="envelope-o" />} placeholder="请输入邮箱地址" />
                )}
            </FormItem>
        );
        // 2. username
        // 3. password
        // 4. phone
        // 5. protocol
        return result;
    }
    render () {
        const formItem = this.getFormItem();
        console.log(this.props);

        return (
            <div className="delayering-panel sign-up-container">
                <h1 className="title">注册圈子</h1>
                <h2 className="sub-title">一个前端技术试验场</h2>
                <Form onSubmit={this.handleSubmit} className="standard-form">
                    {formItem}
                </Form>

            </div>
        );
    }
}

export default Form.create()(SignUp);
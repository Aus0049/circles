/**
 * Created by Aus on 2018/4/27.
 */
import React from 'react';
import {Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import Icon from 'component-font-awesome';
import {verifyMobile, verifyTrue} from '../../public/validate';
const FormItem = Form.Item;

// 注册
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // 提交检查
        let hasError = false;

        this.props.form.validateFields((err) => {
            if (err) {
                hasError = true;
            }
        });

        if(hasError) return;
        // 请求
        console.log(this.props.form.getFieldsValue());
    }

    getFormItem() {
        const {getFieldDecorator} = this.props.form;
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
                    <Input prefix={<Icon type="envelope"/>} placeholder="请输入邮箱地址"/>
                )}
            </FormItem>
        );

        // 2. username
        result.push(
            <FormItem key="username">
                {getFieldDecorator('username', {
                    rules: [
                        {required: true, message: '密码不可为空！'},
                        {type: 'string', min: 2, max: 10, message: '用户名2-10个字符！'}
                    ],
                    validateTrigger: 'onBlur'
                })(
                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                )}
            </FormItem>
        );

        // 3. password
        result.push(
            <FormItem key="password">
                {getFieldDecorator('password', {
                    rules: [
                        {required: true, message: '密码不可为空！'},
                        {type: 'string', min: 6, max: 10, message: '密码长度6-10个字符！'}
                    ],
                    validateTrigger: 'onBlur'
                })(
                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                )}
            </FormItem>
        );

        // 4. mobile
        result.push(
            <FormItem key="mobile">
                {getFieldDecorator('mobile', {
                    rules: [
                        {required: true, message: '手机号不可为空！'},
                        {validator: verifyMobile, message: '手机号不正确！'}
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true
                })(
                    <Input prefix={<Icon type="mobile"/>} type="mobile" placeholder="请输入手机号码"/>
                )}
            </FormItem>
        );

        // 5. verification code 验证码接入 调研一下
        // 6. protocol
        result.push(
            <FormItem key="protocol">
                {getFieldDecorator('protocol', {
                    valuePropName: 'checked',
                    initialValue: true,
                    rules: [
                        {validator: verifyTrue, message: '请阅读《注册用户须知》！'},
                    ],
                })(
                    <Checkbox>我同意<a>《注册用户须知》</a></Checkbox>
                )}
            </FormItem>
        );

        return result;
    }

    render() {
        const formItem = this.getFormItem();

        return (
            <div className="delayering-panel sign-up-container">
                <h1 className="title">注册圈子</h1>
                <h2 className="sub-title">一个前端技术试验场</h2>
                <Form
                    className="standard-form"
                    layout="horizontal"
                >
                    {formItem}
                    <FormItem>
                        <Button
                            className="submit"
                            type="primary"
                            size="large"
                            onClick={this.handleSubmit}
                        >
                            注册
                        </Button>
                        <Button
                            className="sign-in"
                            type="primary"
                            size="large"
                            ghost
                        >
                            登录
                        </Button>
                    </FormItem>
                </Form>

            </div>
        );
    }
}

// export default Form.create({
//     mapPropsToFields: (props)=>{
//         return {
//             protocol: Form.createFormField({
//                 value: true
//             })
//         }
//     }
// })(SignUp);
export default Form.create()(SignUp);
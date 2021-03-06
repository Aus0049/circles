/**
 * Created by Aus on 2018/4/27.
 */
import React from 'react';
import {Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, message} from 'antd';
import Icon from 'component-font-awesome';
import {verifyMobile, verifyTrue} from '../../public/validate';
const FormItem = Form.Item;

let seconds = 10;

// 倒计时效果
function countdown (that) {
    const button = document.querySelector('#sendSMS');

    button.innerHTML = `<span>重新获取（${seconds}）</span>`;

    const timer = setInterval(()=>{
        button.innerHTML = `<span>重新获取（${seconds}）</span>`;

        if(seconds > 0){
            seconds--;
            return;
        }

        clearTimeout(timer);
        button.innerHTML = '<span>重新发送</span>';
        that.setState({captchaDisabled: false});
        seconds = 60;

    }, 1000);
}

// 注册
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSendSMS = this.handleSendSMS.bind(this);
        this.state = {
            sendCaptchaLoading: false,
            captchaId: null,
            captchaDisabled: false,
            submitLoading: false
        };
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

        // 检查验证码
        if(!this.state.captchaId){
            message.error('请先获取验证码！');
            return;
        }

        // 请求
        // 准备数据
        const fetchData = {};
        let {email, username, password, mobile} = this.props.form.getFieldsValue();

        fetchData.email = email;
        fetchData.username = username;
        fetchData.password = password;
        fetchData.mobile = mobile;

        // 前端密码加密到底有没有意义？ 有总比没有强

    }
    handleSendSMS () {
        // 发送验证码
        // 1. 验证手机号
        let hasError = false;

        this.props.form.validateFields('mobile', {}, (err)=>{
            if(err) hasError = true;
        });

        if(hasError) return;

        // loading
        this.setState({sendCaptchaLoading: true});
        // 发送验证码
        this.props.fetchCaptcha(this.props.form.getFieldValue('mobile'))
            .then((result)=>{
                this.setState({sendCaptchaLoading: false});

                if(result.status){
                    this.setState({
                        captchaId: result.data.captchaId,
                        captchaDisabled: true
                    });
                    // 倒数数秒
                    countdown(this);
                    return;
                }

                message.error(result.message);
            });
    }
    getFormItem() {
        const {getFieldDecorator} = this.props.form;
        const {sendCaptchaLoading, captchaDisabled} = this.state;
        const result = [];
        // 注册表单构成

        // 1. username
        result.push(
            <FormItem key="username">
                {getFieldDecorator('username', {
                    rules: [
                        {required: true, message: '用户名不可为空！'},
                        {type: 'string', min: 2, max: 10, message: '用户名2-10个字符！'}
                    ],
                    validateTrigger: 'onBlur'
                })(
                    <Input
                        prefix={<Icon type="user"/>}
                        placeholder="请输入用户名"
                        size="large"
                    />
                )}
            </FormItem>
        );

        // 2. password
        result.push(
            <FormItem key="password">
                {getFieldDecorator('password', {
                    rules: [
                        {required: true, message: '密码不可为空！'},
                        {type: 'string', min: 6, max: 10, message: '密码长度6-10个字符！'}
                    ],
                    validateTrigger: 'onBlur'
                })(
                    <Input
                        prefix={<Icon type="lock"/>}
                        type="password"
                        placeholder="请输入密码"
                        size="large"
                    />
                )}
            </FormItem>
        );

        // 3. mobile
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
                    <Input
                        prefix={<Icon type="mobile"/>}
                        type="mobile"
                        placeholder="请输入手机号码"
                        size="large"
                    />
                )}
            </FormItem>
        );

        // 5. captcha
        result.push(
            <FormItem key="captcha">
                <Col span={14}>
                    <FormItem >
                        {getFieldDecorator('captcha', {
                            rules: [
                                {required: true, message: '验证码不可为空！'},
                                {type: 'string', min: 6, max: 6, message: '验证码长度6位'}
                            ],
                            validateTrigger: 'onBlur',
                            validateFirst: true
                        })(
                            <Input
                                prefix={<Icon type="mobile"/>}
                                type="mobile"
                                placeholder="请输入手机号码"
                                size="large"
                            />
                        )}
                    </FormItem>
                </Col>
                <Col className="sms-box" span={10}>
                    <FormItem>
                        <Button
                            id="sendSMS"
                            className="send-sms"
                            type="primary"
                            size="large"
                            disabled={captchaDisabled}
                            loading={sendCaptchaLoading}
                            onClick={this.handleSendSMS}
                        >
                            发送验证码
                        </Button>
                    </FormItem>
                </Col>
            </FormItem>
        );

        // 6. protocol
        result.push(
            <FormItem key="protocol">
                {getFieldDecorator('protocol', {
                    valuePropName: 'checked',
                    initialValue: true,
                    rules: [
                        {validator: verifyTrue, message: '请同意《注册用户须知》！'},
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
                    <div className="button-group">
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
                    </div>
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
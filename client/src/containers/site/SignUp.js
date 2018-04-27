/**
 * Created by Aus on 2018/4/27.
 */
import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;

// 注册
class SignUp extends React.Component {
    constructor (props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit () {

    }
    render () {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="delayering-panel sign-up-container">
                <h1 className="title">注册圈子</h1>
                <h2 className="sub-title">一个技术试验的demo</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('phone', {
                            rules: [
                                {required: true, message: '手机号不能为空!'},
                                {type: 'phone', message: '请输入正确的手机号码!'},
                            ],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                        )}
                    </FormItem>
                </Form>

            </div>
        );
    }
}

export default Form.create()(SignUp);
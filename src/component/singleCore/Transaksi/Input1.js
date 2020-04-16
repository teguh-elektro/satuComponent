import React, { Component } from 'react';
import {Col, Row, Input} from 'antd';

class Input1 extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <label>Input1</label>
                    </Col>
                    <Col span={8}>
                        <Input/>
                    </Col>
                </Row>
                <br/>
            </div>
        );
    }
}

export default Input1;
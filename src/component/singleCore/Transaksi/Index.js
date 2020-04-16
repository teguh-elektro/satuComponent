import React, { Component } from 'react';
import { Col, Row } from 'antd'
import Input1 from './Input1'
import Input2 from './Input2'


const components = {
    input1: Input1,
    input2: Input2,
};


class Transaksi extends Component {

    render() {
        console.log(components);
        const nameComponents = Object.getOwnPropertyNames(components);
        const {
            data
        } = this.props;
        const col1 = data[0]; 
        const col2 = data[1]; 
        
        return (
            <Row>
                <Col span={12}>
                    {
                        col1.map((e, i) => {
                            if(nameComponents.indexOf(e) === -1){
                                console.warn("item component tidak ditemukan");
                            }else{
                                const Specific = components[e];
                                return(
                                    <Specific key={`C1${i}`}/>
                                )
                            }
                        })
                    }
                </Col>
                <Col span={12}>
                    {
                        col2.map((e, i) => {
                            if(nameComponents.indexOf(e) === -1){
                                console.warn("item component tidak ditemukan");
                            }else{
                                const Specific = components[e];
                                return(
                                    <Specific key={`C2${i}`}/>
                                )
                            }
                        })
                    }
                </Col>
            </Row>
        );
    }
}

export default Transaksi;
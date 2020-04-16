import React, { Component } from 'react';
import TransaksiComponent from  '../../component/singleCore/Transaksi/Index'



//tampilan tab hanya mengubah isi ini
const struct = [
    [
        "input1",
        "input2",
        "input1",
        "input2",
    ],
    [
        "input2",
        "input1",
        "input1",
    ]
]

class Transaksi extends Component {
  render(){
    return (
      <div> 
        <TransaksiComponent
          data = {struct}
        />
      </div>
    )
  }
}

export default Transaksi;

import { SettingOutlined } from '@ant-design/icons';
import { Row, Card, Input, Select, Space, Button } from 'antd';
import {useState} from 'react';



const OneTrust = () => {
  const foods = [
    {
      name: "US Burge",
      price: 10.0,
      currency: 'USD'
    }
  ]

  function onClick(food) {
    console.log(`You purchased: ${food.name}`)
    window.cbq('track', 'Purchase', {'value': food.price, currency:food.currency})
  }

  const layouts = foods.map(food => <Card title="Food Option" size="large">
      <h1>{food.name}</h1>
      <h2><strong>Price:</strong>{food.price} {food.currency} </h2>
      <Button type="primary" onClick = {()=> onClick(food)}>
        Purchase
      </Button>
    </Card>)

  return (
    <>
  <Space direction="horizontal">
  <br />
  {<div class="ot-form-wrapper">

  <iframe
    src="https://fb-dev-privacy.my.onetrust.com/hosted-webform/consent/31f6086f-e2a5-4d11-b16a-66251cf4b604/b1d01f60-06f5-45fa-a9eb-7b88179b8291">
  </iframe>

</div>}
  </Space>
  </>
  );
};

export default OneTrust;

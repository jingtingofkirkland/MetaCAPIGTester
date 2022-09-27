import { SettingOutlined } from '@ant-design/icons';
import { Row, Card, Input, Select, Space, Button } from 'antd';
import {useState} from 'react';



const Independent = () => {
  const foods = [
    {
      name: "US Burge",
      price: 10.0,
      currency: 'USD'
    },
    {
      name: "British Dish",
      price: 15.0,
      currency: 'GBP'
    },
    {
      name: "India Buffet",
      price: 20.0,
      currency: 'INR'
    }
  ]

  function onClick(food) {
    console.log(`You purchased: ${food.name}`)
    window.cbq('track', 'Purchase', {'value': food.price, currency:food.currency})
  }

  async function getScript() {
    fetch('https://independent-pixel-devo.cbinternal.com/sdk/capig-events.js', {
      mode: 'no-cors',
    })
  }

  function loadTest(number=1000) {
    for(let i=0;i<number;i++) {
       getScript();
    }
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
  {layouts}
  </Space>
  <br/>
  <Space direction="vertical">
  <Card title="Food Option" size="large">
    <Button type="primary" onClick = {()=> loadTest(500)}>
        LoadTesting
      </Button>
  </Card>
  </Space>
  </>
  );
};

export default Independent;

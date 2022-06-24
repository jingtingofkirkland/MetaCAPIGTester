import { SettingOutlined } from '@ant-design/icons';
import { Card, Input, Select, Space, Button } from 'antd';
import {useState} from 'react';
const { Option } = Select;
const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="/events" className="select-after">
    <Option value="/events">/events</Option>
  </Select>
);


const Contents = () => {
const [domain, setDomain] = useState('localhost:8080');
const [pixel, setPixel] = useState('');

const onClick = () => {
  console.log("Clicked:", domain, pixel);
  let bodyObj = {};
  bodyObj['pixel'] = pixel;
  bodyObj['data'] = {};
  fetch(`${domain}`, {
    method: 'POST',
    body: JSON.stringify(bodyObj),
  });
}

const onChange =(event) => {
    const input = event.target;
    if (!input.value?.length) {
      return;
    }
    if(input.id=='domain') {
      setDomain(input.value);
    }
    if(input.id=='pixel') {
      setPixel(input.value);
    }
  };

  return (<>
  <Space direction="horizontal">
  <Card title="Post To Endpoint" size="large">
      <Input id = 'domain' placeholder="Domain, e.g. http://localhost:8080/events" onChange= {onChange}/>
      <Input id = 'pixel' placeholder="Meta PixelId" onChange = {onChange} required/>
      <Button type="primary" onClick = {onClick}>
        Purchase
    </Button>
    </Card>
  </Space>
  </>);
};

export default Contents;

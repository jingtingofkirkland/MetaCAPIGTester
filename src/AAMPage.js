import { SettingOutlined } from '@ant-design/icons';
import { Card, Input, Select, Space, Button } from 'antd';
import {useState, useEffect} from 'react';
import {interval, take, Subject} from 'rxjs';
import {catchError, map, mergeMap } from 'rxjs/operators';

const AAMPage = () => {
  return (
  <Space direction="horizontal">
  <Card title="AAM Page" size="large">
     <Input id='test' placeholder="/events" />
     <Input id='currency' placeholder="Currency" />
     <Input id='event' placeholder="event" />
     <Input id='email' placeholder="Email" />
     <Input id='first_name' placeholder="First Name" />
     <Input id='phone' placeholder="Phone Number" />
     <Button type="primary" >
        Submit
    </Button>
    </Card>
  </Space>
  );
};

export default AAMPage;

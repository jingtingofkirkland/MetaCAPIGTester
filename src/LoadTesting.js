import { SettingOutlined } from '@ant-design/icons';
import { Card, Input, Select, Space, Button } from 'antd';
import {useState, useEffect} from 'react';
import {interval, take, Subject} from 'rxjs';
import {catchError, map, mergeMap } from 'rxjs/operators';

function genPayload(pixel) {
  return `
  {"event_name":"ViewContent","conversion_value":{"value":10,"currency":"USD"},"fb.dynamic_product_ads":{"content_type":"product","value":10,"currency":"USD","content_ids":["singleID"]},"custom_data":{"value":10,"currency":"USD","content_type":"product","content_ids":"singleID"},"event_id":"ob3_plugin-set_36663a49b4dde4e1780e00ace9e6522a22fb98f439261bec078f7394fcd028c5","fb.pixel_id":"${pixel}","plugin.oneTrustId":"","fb.advanced_matching":{},"website_context":{"location":"http://localhost:3000/","referrer":"","isInIFrame":false}}
`
}

function creatDataSubject(concurrency) {
  const dataSubject = new Subject();
  dataSubject
.pipe(
    mergeMap(event => {
      const payload = genPayload(event.pixel);
      console.log('first mergeMap',event);
      return interval(1)
      .pipe(
        take(event.total),
        map(i =>{
            console.log("Generationg " + i)
            return {...event, payload}
          })
      )
    }),
    mergeMap(async (event: any) => {
        await fetch(event.domain, {
          method:'POST',
          body: event.payload
        });
        await new Promise(r => setTimeout(r, 100));
      }, concurrency),
      catchError(err => console.log(err))
    )
.subscribe();
    return dataSubject;
}


const LoadTesting = () => {
const [domain, setDomain] = useState('http://localhost:8080/events');
const [pixel, setPixel] = useState('443221930567828');
const [concurrency, setConcurrency] = useState(5);
const [total, setTotal] = useState(1000);
var dataSubject = creatDataSubject(5);
useEffect(
  () => {
    dataSubject = creatDataSubject(concurrency)
  }, [concurrency]
)


const onClick = () => {
  // window.fbq('consent', 'grant');
   console.log("clicked");
    dataSubject.next({
      domain,
      pixel,
      total
    });
}

const onChange =(event) => {
    const input = event.target;
    if (!input.value?.length) {
      return;
    }
    switch(input.id){
      case 'domain':
        setDomain(input.value);
        break;
      case 'pixel':
        setPixel(input.value);
        break;
      case 'concurrency':
        setConcurrency(input.value);
        break;
      case 'total':
        setTotal(input.value);
        break;
    }
  };

  return (
  <Space direction="horizontal">
  <Card title="Purchase" size="large">
     <Input id='domain' placeholder="http://localhost:8080/events" onChange ={onChange}/>
     <Input id='pixel' placeholder="443221930567828" onChange ={onChange}/>
     <Input id='concurrency' placeholder="Concurrent default 5" onChange ={onChange}/>
     <Input id='total' placeholder="total events to fire, default 1000" onChange ={onChange}/>
     <Button type="primary" onClick = {onClick}>
        Start
    </Button>
    </Card>
  </Space>
  );
};

export default LoadTesting;

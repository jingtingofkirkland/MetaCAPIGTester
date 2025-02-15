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
const [domain, setDomain] = useState('http://localhost:8080');
const [pixel, setPixel] = useState('443221930567828');

const onClick = (am) => {
  // window.fbq('consent', 'grant');
  window.fbq('track', 'ViewContent', {value:10, currency:'USD', content_type:'product', content_ids:"singleID"});
  /*fetch("http://localhost:8080/events", {
    "referrer": "https://investment.zeey.foundation/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{"event_name":"FormSubmitClick","custom_data":{},"event_id":"ob3_plugin-set_41f71542ae57fe8a175bb12070cb2f062eb6dafbacf9f2379e7d79c5d7802308","fb.pixel_id":"12345678001","fb.advanced_matching":${JSON.stringify(am)},"website_context":{"location":"https://investment.zeey.foundation/","referrer":"","isInIFrame":false},"fb.fbp":"fb.1.1677024568192.220088425"}`,
    "method": "POST",
    "credentials": "include"
  });*/
}

const onClickPurchase = (am) => {
  // window.fbq('consent', 'grant');
  //window.fbq('track', 'ViewContent', {value:10, currency:'USD', content_type:'product', content_ids:"singleID"});
  fetch("http://localhost:8080/events", {
    "referrer": "https://investment.zeey.foundation/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{"event_name":"Purchase","custom_data":{},"event_id":"ob3_plugin-set_41f71542ae57fe8a175bb12070cb2f062eb6dafbacf9f2379e7d79c5d7802308","fb.pixel_id":"12345678001","fb.advanced_matching":${JSON.stringify(am)},"website_context":{"location":"https://investment.zeey.foundation/","referrer":"","isInIFrame":false},"fb.fbp":"fb.1.1677024568192.220088425"}`,
    "method": "POST",
    "credentials": "include"
  });
}

const onGet = () => {
  // window.fbq('consent', 'grant');
  //window.fbq('track', 'ViewContent', {value:10, currency:'USD', content_type:'product', content_ids:"singleID"});
  fetch("http://localhost:8080/sdk/error?ue=0&e=Suppressed+command+dispatch+error&p=independent_pixel&s=Error%3A+Suppressed+command+dispatch+error%0A++++at+eval+%28webpack-internal%3A%2F%2F%2F.%2Fsrc%2Ffbq%2FFBQCommandDispatch.ts%3A49%3A17%29%0A++++at+new+Promise+%28%3Canonymous%3E%29%0A++++at+new+Wrapper+%28webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fcore-js-pure%2Finternals%2Fexport.js%3A15%3A24%29%0A++++at+FBQCommandDispatch.dispatch+%28webpack-internal%3A%2F%2F%2F.%2Fsrc%2Ffbq%2FFBQCommandDispatch.ts%3A47%3A14%29%0A++++at+_callee2%24+%28webpack-internal%3A%2F%2F%2F.%2Fsrc%2Ffbq%2FfbqRunner.ts%3A57%3A40%29%0A++++at+tryCatch+%28webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fregenerator-runtime%2Fruntime.js%3A63%3A40%29%0A++++at+Generator.invoke+%5Bas+_invoke%5D+%28webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fregenerator-runtime%2Fruntime.js%3A293%3A22%29%0A++++at+Generator.eval+%5Bas+next%5D+%28webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fregenerator-runtime%2Fruntime.js%3A118%3A21%29%0A++++at+asyncGeneratorStep+%28webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2F%40babel%2Fruntime-corejs3%2Fhelpers%2FasyncToGenerator.js%3A5%3A24%29%0A++++at+_next+%28webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2F%40babel%2Fruntime-corejs3%2Fhelpers%2FasyncToGenerator.js%3A27%3A9%29&v=unknown&rs=stable");
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

   if(false) {
    return null;
  } else {
    return (
  <Space direction="horizontal">
  <Card title="Purchase" size="large">
      <Button type="primary" onClick = {() => onClick({"em":"e5857b335afdf35ca81a110bc81f38682f8a89892cc597f5398dfef82d42b513"})}>
        FSC - em
    </Button>
    <Button type="primary" onClick = {() => onClick({"em":"e5857b335afdf35ca81a110bc81f38682f8a89892cc597f5398dfef82d42b513", "ph": "e5857b335afdf35ca81a110bc81f38682f8a89892cc597f5398dfef82d42b513"})}>
        FSC - em, ph
    </Button>
    <Button type="primary" onClick = {() => onClickPurchase({})}>
        Purchase
    </Button>
    <Button type="primary" onClick = {() => onGet()}>
        Get Error Log
    </Button>
    </Card>
  </Space>
  );
  }
};

export default Contents;

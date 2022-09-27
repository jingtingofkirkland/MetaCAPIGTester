import { SettingOutlined } from '@ant-design/icons';
import { Checkbox, Row, Card, Input, Select, Space, Button } from 'antd';
import {useState} from 'react';
import Login from './Login'

async function submitConsent(id, consented) {
  let purpose = [];
  if(consented) {
    purpose = [{
      "Id": "8efe8e1a-598c-4337-8902-be5dce223388"
    }]
  }
  const sha256Id = id;
  const req = {
    identifier: sha256Id,
    requestInformation:"eyJhbGciOiJSUzUxMiJ9.eyJvdEp3dFZlcnNpb24iOjEsInByb2Nlc3NJZCI6ImM3YmQxN2I2LTBkNDEtNDk5MS05NjllLTIwNTdiMmNiNWRmMSIsInByb2Nlc3NWZXJzaW9uIjoxLCJpYXQiOiIyMDIyLTA4LTE3VDE5OjMxOjM0LjM1MyIsIm1vYyI6IldFQl9GT1JNIiwicG9saWN5X3VyaSI6bnVsbCwic3ViIjoiQ29va2llIFVuaXF1ZSBJZCIsImlzcyI6bnVsbCwidGVuYW50SWQiOiIzMWY2MDg2Zi1lMmE1LTRkMTEtYjE2YS02NjI1MWNmNGI2MDQiLCJkZXNjcmlwdGlvbiI6IkNBUElHIENvbnNlbnQgRm9ybSAtIFRlc3QgIiwiY29uc2VudFR5cGUiOiJPUFRJTkNIRUNLQk9YIiwiYWxsb3dOb3RHaXZlbkNvbnNlbnRzIjp0cnVlLCJkb3VibGVPcHRJbiI6ZmFsc2UsInB1cnBvc2VzIjpbeyJpZCI6IjhlZmU4ZTFhLTU5OGMtNDMzNy04OTAyLWJlNWRjZTIyMzM4OCIsInZlcnNpb24iOjIsInBhcmVudElkIjpudWxsLCJ0b3BpY3MiOltdLCJjdXN0b21QcmVmZXJlbmNlcyI6W10sImVuYWJsZUdlb2xvY2F0aW9uIjpmYWxzZX1dLCJub3RpY2VzIjpbXSwiZHNEYXRhRWxlbWVudHMiOltdLCJhdXRoZW50aWNhdGlvblJlcXVpcmVkIjpmYWxzZSwicmVjb25maXJtQWN0aXZlUHVycG9zZSI6ZmFsc2UsIm92ZXJyaWRlQWN0aXZlUHVycG9zZSI6dHJ1ZSwiZHluYW1pY0NvbGxlY3Rpb25Qb2ludCI6ZmFsc2UsImFkZGl0aW9uYWxJZGVudGlmaWVycyI6W10sIm11bHRpcGxlSWRlbnRpZmllclR5cGVzIjpmYWxzZSwiZW5hYmxlUGFyZW50UHJpbWFyeUlkZW50aWZpZXJzIjpmYWxzZSwicGFyZW50UHJpbWFyeUlkZW50aWZpZXJzVHlwZSI6bnVsbCwiYWRkaXRpb25hbFBhcmVudElkZW50aWZpZXJUeXBlcyI6W10sImVuYWJsZUdlb2xvY2F0aW9uIjpmYWxzZX0.GLWS65R1ptUXsMr6e3zXX-fLbWFjprpokHMdkWzARakRn5AKfYf0v6az7dhQdblKyHpZJHbeM38n4NWjkxVPkczQX-9R0Wu62KwQh5p-Au8l6mnHFdg3y60f3g4zGHGNPAcO6GaqCek8BKi6c_PzDtg-suSVLXQ1Ryjh-VbcVZXDrrOqLrj4Hqb9LD_NwPv6Lv6R8dhZvTWMcAlvfl5w-QYOuN7PlWZBuknXOaT1xwlVU33UUOOKjWdBiIrM7ucjnyQ_m6Lanqe8Odaw29lkgxn2sfxqEGx3DA51Mio1r5v4flawpN3nNlyamrThkOTck6zC3gWvPV7xt5yv5ADgz9P71UmXNxAw3CLv7qZ8MjuJWAhrXHgjMMZz0FGKCOcpG5IY6dJc5y1mdnL06nviv_EdhnVic7WiNipRJC8BbLWcpviZy64slyCtbyckiB3Bu3E9fmRMliIRPEDeIznJawf_3GyNxhBpjZ5NRVWOIiQ5p22OewGz9eBdtWJkesUEeXIJCgJ2GxEggItvRUzrM44FLvZ3Ii5zR7h3uYI1UFMLY3PxuY5jPpco8Qc7feZBF43m9qzzPZohXsWvTCzoMZaATWO1y61lSK6r5LyWBdxW_xQVsy1Zs97NdprobaaEyd4hSdJisQu1MADcDvg-846HFLFz3pr6e0EMN8YnCWA",
    "purposes": purpose
  }
  fetch("https://fb-dev-privacy.my.onetrust.com/request/v1/consentreceipts", {
    method:'POST',
    body: JSON.stringify(req)
  });
}
const OneTrust = () => {
  const [consent, setConsent] = useState(false);
  const foods = [
    {
      name: "US Burge",
      price: 10.0,
      currency: 'USD'
    }
  ]
  if(sessionStorage.getItem("userId")==null){
    return (<Login />);
  }
  const email = sessionStorage.getItem("userId");
  function onClick(food) {
    console.log(`You purchased: ${JSON.stringify(food)}`)
    window.fbq('track', 'PageViewTest')
    //window.fbq('track', 'Purchase', {'value': food.price, 'currency':food.currency})
  }

  const onCheckBoxChange = (e) => {
    setConsent(e.target.checked);
  };

  const layouts = foods.map(food => <Card title="Food Option" size="large">
      <h1>{food.name}</h1>
      <h2><strong>Price:</strong>{food.price} {food.currency} </h2>
      <Button type="primary" onClick = {()=> onClick({...food})}>
        Purchase
      </Button>
    </Card>)

  return (
    <>
  <Space direction="horizontal">
  <Card title="Allow Ads Marketing" size="large">
    <Checkbox onChange={onCheckBoxChange}>Ads Marketing</Checkbox>
    <Button type="primary" onClick = {()=> submitConsent(email, consent)}>
        Submit
      </Button>
  </Card>
   {layouts}
  </Space>
  </>
  );
};

export default OneTrust;

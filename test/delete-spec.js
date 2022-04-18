//---> working fine


const axios = require('axios');
const { expect } = require('chai');
const token = '7f7de43da00fdcca6ef9a5f5707c138c96f260ce583edc8f81413feff7d5fee3'
const url = 'https://gorest.co.in/public/v2'

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

describe("API Test",async() =>{
  it("post Users", async () => {
axios.delete( 
  url+`/users/3147`,
  config
).then(response => {
            console.log(response.data);
            expect(response.status).equals(204); 
            
            }).catch((error) => {
              console.log(error);
            
            });

          })
        })
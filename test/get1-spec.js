

const axios = require('axios');
const { expect } = require('chai');

const api = 'https://gorest.co.in/public/v2/users/3021';
const token = '7f7de43da00fdcca6ef9a5f5707c138c96f260ce583edc8f81413feff7d5fee3';


describe("API Test",async() =>{
    it("Get Users", async () => {
        const response = await axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
        console.log(response.data);
        expect(response.status).equals(200); 
        
        })
        .catch((error) => {
          console.log(error);
        
        });

})
})



    
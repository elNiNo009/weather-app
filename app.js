const request=require('request')

const url='http://api.weatherstack.com/current?access_key=24d42d30033dfe0e9d3cca492e9b6af3&query=New%20York'

request({url:url},
    (error,response)=>
    {
        //console.log(response)
        const data=JSON.parse(response.body)
        console.log(data.current)
        
    }
)
const request=require('request')

const url='http://api.weatherstack.com/current?access_key=24d42d30033dfe0e9d3cca492e9b6af3&query=30.3165,78.0322&units=m'

request({url:url,json:true},
    (error,response)=>
    {
        //console.log(response)
       // const data=JSON.parse()
        console.log(response.body.current)
        console.log("temperature outside= "+ response.body.current.temperature)
        
    }) 

const request=require('request')

const weathercode=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=24d42d30033dfe0e9d3cca492e9b6af3&query='+latitude+ ',  '+longitude+'&units=m'
    request({
        url:url,json:true},(error,response)=>
        {
             if(error)
             {
               callback("unable to connect to weather server",undefined)
             }
             else if(response.body.error)
             {
                callback("unable to find given coordinates ",undefined)
             }
             else
             {
               
                callback(undefined,
                    {
                          temperature: response.body.current.temperature,
                          feels_like: response.body.current.feelslike
                    })
             }
        })
}

module.exports=weathercode
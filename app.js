const request=require('request')

const chalk=require('chalk')
const geocode=require('./utility/geocode.js')

// const location_url='https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoibXQyMDE4MTAzIiwiYSI6ImNsMTR1d2s2aDAwMmsza280djlncTMzeXUifQ.vmRkAQSrsSbtbXQyKvzacQ&limit=1'

// request({url:location_url,json:true},             //location handler
//     (error,response)=>
//     {
//         if(error) 
//         {
//             console.log(chalk.red("unbale to connect to location server"))
//         }   
//         else if(response.body.features.length===0)
//         {
//           console.log(chalk.red("unable to find location"))
//         }   
//         else
//         {  
//         console.log(chalk.yellow("latitide of location : ")+ response.body.features[0].center[0] + chalk.yellow(" longitude of location: ")+ response.body.features[0].center[1])
//         }
        
//     }) 

// const weather_url='http://api.weatherstack.com/current?access_key=24d42d30033dfe0e9d3cca492e9b6af3&query=37.7648,-122.463'

// request({url:weather_url,json:true},          //weather handler 
//     (error,response)=>
//     {   
//         if(error)
//         {
//           console.log(chalk.red("unabale to conenct to weather server"))
//         }
//         else if(response.body.error)
//         {
//            console.log(chalk.red("unable to find location"))
//         }
//         else
//         {
//         console.log(chalk.yellow("Temperature outside :  ")+ chalk.green(response.body.current.temperature))
//         }
//     }) 



geocode('dehradun',(error,data)=>
{
   console.log('Error ',error)
   console.log('Data ',data)
})
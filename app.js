const request=require('request')

const chalk=require('chalk')
const geocode=require('./utility/geocode.js')

const weathercode = require('./utility/weathercode.js')


const address=process.argv[2]

if(!address)
{
    console.log(chalk.red.bold("Pkease provide the address"))
}
else
{
    geocode(address,(error,data)=>
{
    if(error)
   console.log(error)
   else
   {
    weathercode(data.latitude,data.longitude,(error,forecastdata)=>
    {
        if(error)
        {
       console.log(error)
        }
        else
       {
        console.log(chalk.red.bold(data.location))   
       console.log(chalk.yellow("Temperature outside :  ")+ chalk.green(forecastdata.temperature))
       console.log(chalk.yellow("Temperature feels like :  ")+ chalk.green(forecastdata.feels_like))
       }
    })
   }
})


}




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
    geocode(address,(error,{latitude,longitude,location}={})=>
{
    if(error)
   console.log(error)
   else
   {
    weathercode(latitude,longitude,(error,{temperature,feels_like}={})=>
    {
        if(error)
        {
       console.log(error)
        }
        else
       {
        console.log(chalk.red.bold(location))   
       console.log(chalk.yellow("Temperature outside :  ")+ chalk.green(temperature))
       console.log(chalk.yellow("Temperature feels like :  ")+ chalk.green(feels_like))
       }
    })
   }
})


}




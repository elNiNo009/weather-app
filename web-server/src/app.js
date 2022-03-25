const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app=express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsdir=path.join(__dirname,'../template/views')
const partialsdir=path.join(__dirname,'../template/partials')

app.set('view engine','hbs')
app.set('views',viewsdir)
hbs.registerPartials(partialsdir)


app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>                    //home page
{
    res.render( 'index',
    {
        title:'HOME',
        name:'Sarthak Chauhan' 
    })
})

app.get('/about',(req,res)=>              //about page
{
    res.render( 'about',
    {
        title:'ABOUT',
        name:'Sarthak Chauhan'  
    })
})

app.get('/help',(req,res)=>              //help page
{
    res.render( 'help',
    {
        title:'HELP',
        name:'Sarthak Chauhan' 
    })
})

app.get('/weather',(req,res)=>              //help page
{
    if(!req.query.address)
    {
      return  res.send({
            error:'No address given' 
        })
    }
    console.log(req.query.address)

    res.send( {
        forecast:"sunny",
        location:'Dehradun'
    }
    )
})


app.get('/help/*',(req,res)=>                 //error_help
{
    res.render('404',{
        title:'404',
        name:'Sarthak Chauhan',
        error_message:'Help Page Not Found'
})
})

app.get('*',(req,res)=>                 //error
{
 res.render('404',{
     title:'404',
     name:'Sarthak Chauhan',
     error_message:'Page Not Found'

 })   
})


app.listen(3000,()=>{
    console.log("server running")
})
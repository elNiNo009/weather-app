console.log("client JS")




const weatherform=document.querySelector('form')
const search=document.querySelector('input')

const msgone=document.querySelector('#message-1')
const msgtwo=document.querySelector('#message-2')

  


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value
  
    msgone.textContent='Loading....'
    msgtwo.textContent=''
    //console.log(location)
    
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            msgone.textContent=data.error
            //console.log(data.error)
        }
        else
        {
            msgone.textContent='Location: '+data.location
            //console.log(data.location)
            msgtwo.textContent='Temperature: '+data.Temperature
            //console.log(data.Temperature)
            //console.log(data.Feels_Like)
        }
     //  console.log(data)

    })
})
})
let input = document.getElementById('url')
let form = document.getElementById('form')
let param = document.getElementById('parameter')
let heading2 = document.getElementById('heading2')
form.addEventListener('submit',(e)=>{
    e.preventDefault() 
    let a = input.value
    input.value = null
    let theurl = `/myurl?url=${a}`
    fetch(theurl).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                let mystr =''
                heading2.innerHTML = `<h2>Your shortened url is</h2>`
                mystr += `<a target="_blank" href=${data.url_shortened}>${data.url_shortened}</a>`
                console.log(mystr)
                param.innerHTML = mystr          
                parameter.classList.add('parametercss')  
            }
        })
    })
})

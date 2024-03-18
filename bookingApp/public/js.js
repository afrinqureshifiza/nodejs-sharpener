
async function handleFormSubmit(event){
    event.preventDefault();

    const name=document.querySelector('#username').value
    const phone=document.querySelector('#phone').value
    const email=document.querySelector('#email').value

    const myObj={
        name:name,
        email:email,
        phone:phone,
    }
  
    // localStorage.setItem(myObj.username,JSON.stringify(myObj))
   axios.post('http://localhost:3000/user/add-user', myObj)
   .then((response)=>{
    console.log(response)
    showData(response.data)
   })
   .catch((err)=>{console.log(err)})
    
    

}


async function showData(myObj){
  let display=document.querySelector('ul')

  //display list item
  let li=document.createElement('li')
  li.textContent=`${myObj.name}-${myObj.email}-${myObj.phone}`
  display.appendChild(li) 

  //delete button
  let del=document.createElement('button') 
  del.textContent='Delete '
  li.appendChild(del)

  del.addEventListener('click',(event)=>{
    console.log('delete button clicked')
    li.remove()
    axios.delete(`http://localhost:3000/user/delete-user/${myObj.id}`)
    .then(res=>{
      console.log('detail deleted')
    })
  })
  
 
}

window.addEventListener('DOMContentLoaded', ()=>{
    axios.get('http://localhost:3000/user/get-users')
    .then(arr=>{
        for(let i=0;i<arr.data.length;i++){
            showData(arr.data[i])
        }
    })
    .catch((err)=>console.log(err))
})


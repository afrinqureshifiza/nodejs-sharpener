    const get =(id)=>{
        return document.getElementById(`${id}`)
    }
    const playerImg = get('playerImg')
    const playerName = get('playerName')
    const playerDob = get('playerDob')
    const matches = get('m')
    const runs = get('r')
    const fifties = get('f')
    const centuries = get('c')
    const description = get('description')
    const showDiv = get('showDiv')
    const wicket = get('w')
    const average = get('a')


    function submitHandler(event){
    event.preventDefault()

    const name = document.getElementById('name').value
    const dob = document.getElementById('dob').value
    const url = document.getElementById('url').value
    const birthplace = document.getElementById('birthplace').value
    const career = document.getElementById('career').value
    const numMatches = document.getElementById('numMatches').value
    const score = document.getElementById('score').value
    const fifties = document.getElementById('fifties').value
    const centuries = document.getElementById('centuries').value
    const wicket = document.getElementById('wicket').value
    const average = document.getElementById('average').value
    
    obj={
        name:name,
        dob:dob,
        url:url,
        birthplace:birthplace,
        career:career,
        numMatches:numMatches,
        score:score,
        fifties:fifties,
        centuries:centuries,
        wicket:wicket,
        average:average
    }
    console.log(obj)
    axios.post('http://localhost:3000/cricketer/add-detail', obj)
    .then(result=>{
        console.log('data added')
        console.log(result.data)
    })
    .catch((err)=>{
        console.log(err)
    })

}

function searchHandler(event){
    event.preventDefault()

    const searchdata = document.getElementById('searchdata').value
    console.log(searchdata)

    axios.get(`http://localhost:3000/cricketer/search-detail/${searchdata}`)
    .then((result)=>{
        console.log('search result')
        console.log(result)
        showData(result.data)
    })
}

function showData(data){
    
    showDiv.style.display='flex'

    
    
    playerImg.src= data.url
    playerName.innerText = data.name
    playerDob.innerText= data.date
    matches.innerText = data.matches
    runs.innerText = data.score
    fifties.innerText = data.fifties
    centuries.textContent = data.centuries
    description.innerText = data.career
    wicket.innerText = data.wicket
    average.innerText = data.average
    console.log(centuries)
}

async function editfun(){
    const searchdata = playerName.innerText

    const result =await axios.get(`http://localhost:3000/cricketer/search-detail/${searchdata}`)
    console.log(result.data)

    get('name').value = playerName.innerText
    get('dob').value = playerDob.innerText
    get('url').value = playerImg.src
    get('birthplace').value = result.data.birthplace
    get('career').value = result.data.career
    get('numMatches').value = result.data.matches
    get('score').value = result.data.score
    get('fifties').value = result.data.fifties
    get('centuries').value = result.data.centuries
    get('wicket').value = result.data.wicket
    get('average').value = result.data.average
    showDiv.style.display='none'



}
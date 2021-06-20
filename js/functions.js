let url = "https://tt905-msgs-leonardo.herokuapp.com/database/"

/********************************************************************** 
*******************************Carros**********************************
***********************************************************************/

async function callFetchWithGets1(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json1");
    const response = await fetch(`${url}${'database/'}`, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou/GET");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPosts1(modelo){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: { 
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Modelo' : modelo
        })
    }
    //await fetch(url, options);
    await fetch(`${url}${'database/'}`, options);
}

async function callFetchWithPuts1(id, novaMensagem){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'Modelo' : novaMensagem
        })
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'database/'}${id}`, options);
}

async function callFetchWithDeletes1(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'database/'}${id}`, options);
}


/*
    Formulários
*/

function submitPosts1(){
    console.log("entrei na função");
    
    const form = document.forms['postForms1'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPosts1(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPuts1(){
    const form = document.forms['putForms1'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPuts1(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDeletes1(){
    const form = document.forms['deleteForms1'];  
    const id = form["id"].value;  
    callFetchWithDeletes1(id);
    return false; // Evitar o reload da tela.
}

function submitGet(){
    callFetchWithGet();
    return false;
}
function submitGets1(){
    callFetchWithGets1();
    return false;
}
function submitGets2(){
    callFetchWithGets2();
    return false;
}
function submitGets3(){
    callFetchWithGets3();
    return false;
}
function printBody() {

    const viewMore = document.getElementById("viewmore");

    const params = new URLSearchParams(window.location.search);
    const id =parseInt(params.get("id"));

    console.log(id);

    let data = posts.find(x => x.id === id);

    console.log(data);

    if(!data){
        return
    }

    const elemTitle = document.getElementById("title");

    if(elemTitle){
        elemTitle.innerHTML = data.title;
    }

    const elemContent = document.getElementById("content");
    if(elemContent){
        elemContent.innerHTML = data.body;
    }

    
  

}

printBody();






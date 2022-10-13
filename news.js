// bd3b07a8e19b42d493ef656694135cf6
console.log('welcome to news');
//initiate news api parameters
let apikey='bd3b07a8e19b42d493ef656694135cf6';
let category='entertainment';

//grab news container
newsAccordion=document.getElementById('newsAccordion');



//create ajax
let xhr=new XMLHttpRequest();

//open object 

xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=${apikey}`,true);


//onload
xhr.onload= function(){
    if(this.status=200){
        let json =JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);
        let newsHtml='';
        articles.forEach(function(element,index) {
            // console.log(element,index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> 
                                   <a href="${element['url']}" target="_blank" >${element["title"]}</a>
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">    </div>
                            </div>
                        </div>`;
            newsHtml += news;
            
        });
        newsAccordion.innerHTML=newsHtml;
        
    }
    else{
        console.log('eror');
    }
}

//sending req
xhr.send();


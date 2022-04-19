const pic=document.getElementById('image');
const quotes=document.getElementById('quote');
const character=document.getElementById('character');
const btn=document.getElementById('btn');
const refresh=document.getElementById('btn2');
let url="https://friends-quotes-api.herokuapp.com/quotes"
btn.addEventListener('click', getquote);

refresh.addEventListener('click',refreshh);

function refreshh(){

    quotes.innerHTML='<span>"</span>' + "True friends don't judge eachother, They judge other people together." + '<span>"</span>';
    character.innerHTML="Author";
    pic.src="friends.jpg";
}

function getquote(){
    fetch(url)
    .then(function(data)
{
return data.json();
}  ) .then(function(quote){

    
   let random = Math.floor(Math.random() *quote.length);
//console.log(random);
 quotes.innerHTML='<span>"</span>' + quote[random].quote + '<span>"</span>';
 character.innerHTML=quote[random].character;

 if(quote[random].character=="Joey")
 {
    pic.src="joey1.webp"
 }
else if(quote[random].character=="Ross")
{
    pic.src="ross.jpg"
}
else if(quote[random].character=="Rachel")
{
    pic.src="rachel.webp"
}
else if(quote[random].character=="Phoebe")
{
    pic.src="pheobe.jpg"
}
else if(quote[random].character=="Chandler")
{
    pic.src="chan.webp"
}
else if(quote[random].character=="Monica")
{
    pic.src="monica.jpg"
}
else{
    pic.src="friends.jpg"
}
})

.catch(function(error){
// if there is an error 
getquote();


});

}
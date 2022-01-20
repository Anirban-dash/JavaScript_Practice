let title=document.getElementById('title');
let text=document.getElementById('text');
let btn=document.getElementById('btn');
const getData = async ()=>{
    const Header={
        headers: {
            'Content-Type': 'application/json' 
          }
    }
    title.innerHTML="Loading.....";
    text.innerHTML="Loading.....";
    const res = await fetch("https://backend-omega-seven.vercel.app/api/getjoke",Header);
    
    const data = await res.json();
    const [myData]=data;
    title.innerHTML=myData.question;
    text.innerHTML=myData.punchline;
}
getData();
btn.addEventListener('click',getData);
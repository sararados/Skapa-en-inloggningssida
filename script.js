const body=document.querySelector("body")                   //här skapar vi våra element
const form=document.querySelector(".form")
const username=document.querySelector(".username")
const password=document.querySelector(".password")
const button=document.querySelector("button")
const result=document.querySelector(".result")


function checkUser1( username,password){         // första funktionen för att kontrollera om 
                                                //användaren har skrivit rätt eller fel inlogg
    const name= "test"
    const correctPassword="1234"

   

    if(username===name && password === correctPassword){ // här är en if sats som kollar om det är rätt och kör vidare
                                                        //om det är true , annars kör den vidare till false 
        return true                                    
    }
    return false
}


        function userWindow(correct){                //funktionen som tar fram sidan med välkommen när man loggat in rätt
        result.innerHTML=""
        const text=document.createElement("p")          //här skapar man ett element p där man kan skriva text
        result.appendChild(text)                        //här  lägger man till texten i diven
    
        if(correct){
            form.style.display="none" // tar bort formuläret
            text.innerText="Välkommen!"         //Här lägger vi textelement som vi skapade i funktionen     
            const buttonlogOut=document.createElement("button")// skapar knappen logga ut
            buttonlogOut.innerText="Logga ut"
            result.appendChild(buttonlogOut)
            buttonlogOut.addEventListener("click",logOut) //här är kallar den på klick funktionen logout när man trycker på knappen
            } 
            else{
            form.style.display="none"       //
            text.innerText="Testa igen!" //när man trycker in fel kommer denna text upp med de tgextelementet vi skapat i funktionen
            const buttonTryAgain=document.createElement("button") //skapar en ny knapp 
            buttonTryAgain.innerText="Gör ett nytt försök!"
            result.appendChild(buttonTryAgain)
            buttonTryAgain.addEventListener("click", logOut)    //gör så man kommer tillbaka till första sidan med knapptryck
        
        }
    }

            function checkIn(){  //funktion som hämtar användarens localStorage
   
            if(localStorage.getItem("user")){ // kollar om det är rätt användare och hämtar i localStorage
        
             userWindow(true)                  //och går vidare till funktionen userWindow för att utföra nästa
                                        //funktion
            }

            }
        function logOut(){

            localStorage.removeItem("user")           //när användaren trycker på logga ut knappen
            result.innerHTML=""                        //så kommer man tillbaka till första sidan och raderar localStorage
            form.style.display="block"
            username.value=""                   //tar bort texten i inputfälten så det inte står kvar när man loggar ut
            password.value=""
}


button.addEventListener("click",function(){  //En funktion för att skapa knapptrycken
  
                                            //knapptrycket när man loggar in
const correct=checkUser1(username.value,password.value) //skapar ett element för att kolla användaren
    

    if(correct){

        localStorage.setItem("user",username.value) //lägger in användaren i Localstorage när man 
                                                    //loggat in om det var rätt inlogg
    }
     userWindow(correct)                // när man loggat in och det var true så hämtar den funktionen userWindow
    })
    checkIn()                   //kör programmet

          
var card=document.getElementById("cards")
var total=document.getElementById("total")
var message=document.getElementById("message")
var ctotal=document.getElementById("ctotal")
var pcard=[]
var sum1=0
var sum=0
var win =false
var game = true
var sgame = false
var player= prompt("Enter player name ")
var amount=prompt ("Enter the amount ")



function getrandom(){
    var random=Math.floor(Math.random()*13+1)
    
    if(random>10){
        return 10
    }
    else if(random == 1){
        return 11
    }
    else{
        return random
    }
}


function start(){
    sgame=true
    var num1=getrandom()
    var num2=getrandom()
    var num3=getrandom()
    var num4=getrandom()
    sum=num1+num2
    sum1=num3+num4

    pcard=[num1,num2]
    render()
    //  sgame=true
    // win = false
    //  game=true
}


function render(){
card.innerHTML = " Cards "

for(var i=0;i<pcard.length;i++){
    card.innerHTML += ` ${pcard[i]} ` 
}
total.innerHTML = ` total: ${sum} `
ctotal.innerHTML=` coumpter total: ${sum1} `

if(sum<21){
    message.innerHTML="Do you want another card"
}
else if(sum==21 && sum<21){
    amount *=2
    message.innerHTML=` Congrats  ${player} , pooja you won Rs. ${amount} `
    win = true
}


else{
    message.innerHTML=` sorry , ${player} , your Rs.${amount} is lost`
    game=false
}
}

function newcard(){
    if(win==false && game==true && sgame==true){
    var num=getrandom()
    pcard.push(num)
    sum+=num

    while(sum1<17){
        var cnum=getrandom()
        sum1 +=cnum
    }
    render()
    if(sum>21){
        winner()
    }
     }
}

function winner(){
    if(sgame==true){
    while(sum1<17 && sum1<sum){
        var cnum=getrandom()
        sum1 +=cnum
    }
    ctotal.innerHTML=` computer total: ${sum1} `
  if(sum>21 || (sum1<=21 && sum1>sum)){
    message.innerHTML=` sorry , ${player} , your Rs.${amount} is lost`

  }
  else if (sum ==sum1){
    message.innerHTML="it is a tie"
  }
  else{
    amount *=2
    message.innerHTML=` Congrats  ${player} , pooja you won Rs. ${amount} `
  }
  game=false
}
}





   


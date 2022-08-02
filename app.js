// const btn = document.querySelector("button");
// const ip = document.querySelector("input");
// const ul = document.querySelector("ul");
// function handleclick() {
//   const li = document.createElement("li");
//   li.textContent = ip.value;
//   ul.appendChild(li);
//   ip.value=''
// }
// btn.addEventListener("click", handleclick);
Vue.createApp({
data(){
    return{
        goals:[],
        enteredValue:''
    }
    
},
methods:{
    addGoal(){
     this.goals.push(this.enteredValue)
     this.enteredValue=''
    }
 }
}).mount('#app')
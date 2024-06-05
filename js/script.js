

const { createApp } = Vue

createApp({
data() {
    return {

      email:[],

   
    }
},

methods:{

    getData(){

        for (let index = 0; index < 9; index++) {

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

            .then((response)=>{ this.email.push(response.data.response) 
    
            });

        };
       
    },
},

created(){
    this.getData();
}
}).mount('#app')


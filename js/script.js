// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
    el: '#app',
    data: {
        emails: [],
    },
    methods: {

    },
    created(){
        for(let i = 0; i < 10; i++){
             // Make a request for a user with a given ID
            axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail').then((res)=> {
            // handle success
            console.log(res.data.response);
            this.emails.push(res.data.response);
            })
            .catch((error)=> {
            // handle error
            console.log(error);
            })
        }
       
       
    }
})
/* Istruzioni:
Create una todo list usando VueJS. Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS. Se non sapere che fare, di seguito trovate uno screenshot.
Funzionalitá:



Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare" ✅
Inoltre L'utente vuole poter modificare una task giá inserita ❌
ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)✅
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add✅ o preme il taso Enter della tastiera.❌
 Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.❌
Da tenere a mente:
Ricordate di scrivere le istruzioni prima di iniziare a lavorare cercate di descrivere in modo sintetico gli step che pensate siano necessari. Consultate la documentazione e se siete bloccati, aprite un ticket.
 */

const app = new Vue ({
    el: '#root',
    data: {
        nuovoProdotto: '',
        //La nostra todo list avrá alcune tasks di default predefinite✅
        prodottiComprati: [],
        listaSpesa:[
            'Frutta ',
            'Zucchine ',
            'Affettati ',
            'Latte ',
            'Pane ',
        ],
        
        logo:'https://www.boolean.careers/images/misc/logo.png',
    },
    methods: {
       // L'utente puó inserire nuove tasks ✅
        aggiungiProdotto(){
            //Pusha nuovoProdotto in listaSpesa
            this.listaSpesa.push(this.nuovoProdotto);
            this.nuovoProdotto = " ";
        },
        //Cliccando sulla "X" l'utente puó cancellare una task✅
        rimuoviProdotto(index){
            //rimuovi prodotti con splice 
            this.listaSpesa.splice(index, 1)
        },
        //aggiungi il prodotto alla lista acquistati
        prodottoAcq(index, lista){
            this.prodottiComprati.push(lista) // pusha in un nuovo array gli elementi checkati
            console.log(lista);
            this.listaSpesa.splice(index, 1); //toglie dalla lista spesa gli elementi
        },
        //Rimuove il prodotto dalla lista checked e li rimette nella lista da acquistare

        ritornaProdotto(index, lista){
          
            let prodottiComprati = this.prodottiComprati.splice(index, 1);
            this.listaSpesa.push(prodottiComprati[index]);
 
        },
        updateTask(){
            alert('task updated')
        }
    },

    //Inserisce il nuovo prodotto con il tasto ENTER
    mounted(){
        document.addEventListener('keyup', (e) =>{
            console.log(e.key);
            if(e.key === 'Enter'){
                app.aggiungiProdotto()
            }
        },
    )}




});

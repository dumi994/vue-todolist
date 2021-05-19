


const app = new Vue ({
    el: '#root',
    data: {
        listaSpesa:[
            'Frutta',
            'Zucchine',
            'Affettati',
            'Latte',
            'Pane',
        ],
        logo:'https://www.boolean.careers/images/misc/logo.png',
    },
    methods: {
        aggiungiProdotto(){
            //Pusha nuovoProdotto in listaSpesa
            this.listaSpesa.push(this.nuovoProdotto);
            this.nuovoProdotto = " ";
        },
        rimuoviProdotto(index){
            //rimuovi prodotti con splice
            this.listaSpesa.splice(index, 1)
        }
    }
})
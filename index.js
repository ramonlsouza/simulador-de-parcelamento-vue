var app = new Vue({
    el: '#app',
    data: {
        juros: 4.5, //valor percentual de juros por parcela (float)
        parcelas: 12, //numero de parcelas (int)
        moeda: 'R$',
        valor: 0.00,
        aviso: '',
        linhas: []
    },
    methods: {
        simular: function () {
            this.aviso = '';
            this.linhas = [];

            if(this.valor[this.valor.length -1] == ','){
                this.valor = this.valor.replace(',','.');
            }
            valor_float = parseFloat(this.valor);

            if(isNaN(valor_float) === false){
                if(this.valor[this.valor.length -1] != '.'){
                    this.valor = valor_float;
                }
        
                for(i=1;i<=this.parcelas;i++){
                    valor_juros = valor_float/100*(this.juros*(i-1));
                    valor_total = (valor_float+valor_juros).toFixed(2);
                    valor_parcela = (valor_total/i).toFixed(2);

                    var linha = {
                        parcelas: i,
                        valor_parcela,
                        valor_total,
                    };
                    this.linhas.push(linha);
                }
            }else{
                this.aviso = 'Informe um valor válido';
            }
        }
    }
});
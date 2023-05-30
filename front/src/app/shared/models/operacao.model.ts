export class Operacao{
    public dataHoraMovimentacao?: Date;

    constructor(
        public tipo ?: string,
        public valor ?: number,
        public contaDestino ?: number,
        public contaOrigem ?: number,
        public saldoConsolidado ?: number,
    ){
        this.dataHoraMovimentacao = new Date();
        this.saldoConsolidado = 0;
    }
}
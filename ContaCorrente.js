import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;

    constructor(agencia, cliente){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;

        ContaCorrente.numeroDeContas += 1;
    }


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}

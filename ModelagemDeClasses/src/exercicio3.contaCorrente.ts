

class Conta{
    private saldo:number
    constructor(
        private nConta:number, 
        public nome:string, 
        saldo?:number
        )
    {
        this.nConta = nConta;
        this.nome = nome;
        this.saldo=saldo?saldo:0; 
    }
    setSaldo(saldo:number){
        this.saldo=saldo;
    }
    alteraNome(nome:string){
        this.nome=nome;
    }
    mostraNome(){
        console.log(this.nome);
    }
    depositar(valor:number){
        this.saldo+=valor;
        console.log('Depositando: '+valor);
        console.log('Novo saldo: '+this.saldo);
    }
    saque(valor:number){
        const newSaldo=this.saldo-valor;
        if(newSaldo<0){
            console.log('Não é possivel sacar')
            return
        }
        this.saldo=newSaldo;
        console.log('Novo saldo: '+this.saldo);
    }
}

const conta= new Conta(696969, 'Arthur', 1000);
console.table(conta);
conta.alteraNome('Nunes');
console.log('Nome da conta atualizado para')
conta.mostraNome();
conta.depositar(5000);
conta.saque(100);
console.log('Foi sacado: 100')
console.table(conta);
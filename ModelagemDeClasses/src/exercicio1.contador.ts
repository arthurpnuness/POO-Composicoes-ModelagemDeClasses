class Contador{
    private contador: number=0;
    zerar(){
        this.contador=0;
    }
    incrementar(){
        this.contador+=1;
    }
    ret(){
        return this.contador
    }
    autcont(num:number){
        while(this.contador<=num){
            this.incrementar();
                 console.log(this.contador);
        }
    }
}

const count=new Contador();

count.incrementar();

console.log('Meu Contador', count.ret());
count.incrementar();
console.log('Meu Contador', count.ret());
count.autcont(50);

import { table } from "console";

 class Bola{
    constructor(
        public cor:string, 
        private circ:number, protected material:string)
    {
        this.cor=cor;
        this.circ=circ;
        this.material=material;
    }
    trocarCor(cor:string){
        this.cor=cor;
    }
    mostarCor(){
        console.log(this.cor);
    }
}

const bola=new Bola('purple', 69, 'borracha');
console.table(bola);
bola.trocarCor('green');
bola.mostarCor();
console.table(bola);
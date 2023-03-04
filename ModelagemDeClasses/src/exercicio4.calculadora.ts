export class Calculadora{
    private history:Array<string>=[]
    
    somar(x:number,y:number){
        this.history.push(`${x}+${y}=${Math.round(x+y)}`)
    }
    diminuir(x:number,y:number){
        this.history.push(`${x}-${y}=${Math.round(x-y)}`)
    }
    multi(x:number,y:number){
        this.history.push(`${x}x${y}=${Math.round(x*y)}`)
    }
    dividir(x:number,y:number){
        this.history.push(`${x}/${y}=${Math.round(x/y)}`)
    }

    getHistory(){
        console.table(this.history);
    }
}

const calc=new Calculadora()
calc.somar(1,1);
calc.diminuir(12,19);
calc.multi(12,29);
calc.dividir(12,4);
calc.getHistory();
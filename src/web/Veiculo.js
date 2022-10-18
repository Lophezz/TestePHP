class Veiculo{
motor;
#boost = 'SUMMMMMMMM (Turbina)';

    set motor(motor){
        this.motor = motor
    }

    get motor(){
        return this.motor
    }

    constructor(motor){      
        this.motor = motor;
        
    }   
    acelerarFusca(){
        return "Fusca: VrummmVrumm....";
    } 
    acelerarLamborguini(){
        return `Lamborguini: VRUMMMVRUMMMMVRUMMMMM!!!${this.#boost}` ;

    }
    acelerarFerrari(){
        return "Ferrari: VRUMMMMMVRUMMM!!...";
    }
}

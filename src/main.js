import GeraCPF from './modules/GeraCPF'
import './assets/css/main.css'

(function(){
    document.querySelector('button').addEventListener('click', e => {
        e.preventDefault();
        const gera = new GeraCPF();
        const cpfGerado = document.querySelector('.cpf-gerado');
    
        cpfGerado.innerHTML = gera.geraNovoCpf();
    });
})();

//a
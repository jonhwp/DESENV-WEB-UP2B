function restoDivisao() {
    const res = document.querySelector("#first-res");
    const num = Number(document.querySelector("#first-num").value);
    const form = document.getElementById('first-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
    });

    if (num % 2 == 0 || num % 7 == 0) {
        res.innerHTML = `<p class="text-success">O número ${num} é divisível por 2 ou 7.</p>`;
    } else {
        res.innerHTML = `<p class="text-danger">O número ${num} não é divisível por nenhuma das opções.</p>`;
    }
}

function diaDaSemana() {
    const res = document.querySelector("#second-res");
    const num = Number(document.querySelector("#second-num").value);
    const form = document.getElementById('second-form');
    var dia = "";
    form.addEventListener('submit', e => {
        e.preventDefault();
    });

    switch (num) {
        case 1:
            dia ="domingo";
            res.innerHTML = `<p class="text-success">Você escolheu ${dia}.</p>`;
            break;
        case 2:
            dia ="segunda-feira";
            res.innerHTML = `<p class="text-success">Você escolheu ${dia}.</p>`;
            break;
        case 3:
            dia ="terça-feira";
            res.innerHTML = `<p class="text-success">Você escolheu ${dia}.</p>`;
            break;
        case 4:
            dia ="quarta-feira";
            res.innerHTML = `<p class="text-success">Você escolheu ${dia}.</p>`;
            break;
        case 5:
            dia ="quinta-feira";
            res.innerHTML = `<p class="text-success">Você escolheu ${dia}.</p>`;
            break;
        case 6:
            dia ="sexta-feira";
            res.innerHTML = `<p class="text-success">Você escolheu ${dia}.</p>`;
            break;
        case 7:
            dia ="sábado";
            res.innerHTML = `<p class="text-success">Você escolheu ${dia}.</p>`;
            break;
        default:
            res.innerHTML = `<p class="text-danger">Ops, nenhuma opção foi definida.</p>`;
            break;
    }

    
}

function tabuada() {
    const res = document.querySelector("#three-res");
    const num = Number(document.querySelector("#three-num").value);

    const form = document.getElementById('three-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
    });
    s = "";
    for (let index = 0; index <= 10; index++) {
        s+= `${index} x ${num} = ${index * num} <br> `;        
    }
    res.innerHTML = ` 
        <div class="card-body">
            <p class="card-text"> ${s} </p>
        </div>`;
    
}
function papelaria() {
    /* folha <= 100 = 0,25 ou folha > 100 = 0,20 */
    const res = document.querySelector("#four-res");
    const folhas = Number(document.querySelector("#four-num").value);

    const form = document.getElementById('four-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
    });

    if (folhas <= 100 ) {
        let preco = folhas * 0.25;
        res.innerHTML = `<p class="text-success">Total pagando 0,25 por cópia: R$ ${preco}.</p>`;
    }else{
        preco = folhas * 0.20;
        res.innerHTML = `<p class="text-success">Total pagando 0,20 por cópia: R$ ${preco}.</p>`;
    }
}

function validaFinanciamento() {

    const form = document.querySelector("#five-form");
    form.addEventListener('submit', e => {
        e.preventDefault();
    });

    const res = document.querySelector("#five-res");
    const salario = Number(document.querySelector("#salario").value);
    const financ = Number(document.querySelector("#financ").value);

    let aprovado = 5 * salario;
    
    if ( financ <= aprovado ) {
        res.innerHTML = `<p class="text-success">Financiamento concedido.</p>  <p> Obrigado por nos consultar! </p> `;
    }else{
        res.innerHTML =`<p class="text-warning">Financiamento negado. </p> <p>  Obrigado por nos consultar! </p> `;
    }

    
    

}
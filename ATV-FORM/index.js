//Mostra o Nome do usuario digitado
const nomeUsuario = document.getElementById('nome')
nomeUsuario.addEventListener('change', () =>{
    console.log(`Nome digitado: ${nomeUsuario.value}`)
})

//Mostra o Endereço do usuario digitado 
const enderecoUsuario = document.getElementById('endereco')
enderecoUsuario.addEventListener('change', () => {
    console.log(`Endereço digitado: ${enderecoUsuario.value}`)
})

//Mostra a cidade do usuario digitado
const cidadeUsuario = document.getElementById('cidade')
cidadeUsuario.addEventListener('change', () => {
    console.log(`Cidade digitada: ${cidadeUsuario.value}`)
})

//Mostra o Estado selecionado pelo usuario
const select = document.getElementById('estados')
select.addEventListener('change', () => {
    console.log(`Estado escolhido: ${select.value}`)
})

//Mostra a opção de Cargo escolhida pelo usuario
const cargos = document.querySelectorAll('input[name="cargo"]')
cargos.forEach(cargo =>{
    cargo.addEventListener('change', () => {
        console.log(`A opcao escolhinda foi ${cargo.value}`)
    })
})

//Mostra a opção de Area de Interesse escolhida pelo usuario
const checkboxes = document.querySelectorAll('input[name="area"]')
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            console.log(`Checkbox Marcado: ${checkbox.value}`)
        } else {
            console.log(`Checkbox Desmarcado ${checkbox.value}`) 
        }
        
    })
}
)

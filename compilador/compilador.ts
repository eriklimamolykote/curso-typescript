// Original author: Leonardo Moura Leitão (with adaptations)
// Contact: https://www.udemy.com/user/leonardomouraleitao/
let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)

// let nome = 'Pedro'

function soma(a: any, b: any) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

function saudar(isManha: boolean): string {
    let saudacao: string
    if (isManha) {
        saudacao = 'Bom Dia!'
    } else {
        saudacao = 'Tenha uma boa dia!'
    }
    
    return saudacao
}
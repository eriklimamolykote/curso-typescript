class Data {
    // Público por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 20, mes: number = 3, 
        ano: number = 1984) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(20, 3, 1984)
aniversario.dia = 20
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os "()"
casamento.ano = 2021
console.log(casamento)

class DataEsperta {
    constructor(public dia: number = 20, public mes: number = 3, 
        public ano: number = 1984) {
    }
}

const aniversarioEsperto = new Data(20, 3, 1984)
aniversario.dia = 20
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new Data // posso omitir os "()"
casamentoEsperto.ano = 2021
console.log(casamentoEsperto)

class Produto {
    constructor(public nome: string, public preco: number,
        public desconto: number = 0) {

    }

    // Criar método precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto

    // tb é public
    precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }

    // public resumo(): string {
    //     return `${this.nomeResposta} custa R$ ${this.precoResposta} (${this.descontoResposta * 100}% off)`
    // }

    public resumo(): string {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }
}

const prod1 = new Produto('Caneta Bic Preta', 4.20)
prod1.desconto = 0.05
console.log(prod1.resumo())

const prod2 = new Produto('Caderno Escolar', 18.80, 0.15)
console.log(prod2.resumo())

class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200) {

        }

        private alterarVelocidade(delta: number): number {
            const novaVelocidade = this.velocidadeAtual + delta
            const velocidadeValida = novaVelocidade >= 0 
                && novaVelocidade <= this.velocidadeMaxima

            if (velocidadeValida) {
                this.velocidadeAtual = novaVelocidade
            } else {
                this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
            }
            
            return this.velocidadeAtual
        }

        public acelerar(): number {
            return this.alterarVelocidade(5)
        }

        public frear(): number {
            return this.alterarVelocidade(-5)
        }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(40).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

// simular "erros"
// carro1.velocidadeAtual = 300
// console.log('atual -> ' + carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log('máxima -> ' + carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual)

// Original author: Leonardo Moura Leitão (with adaptations)
// Contact: https://www.udemy.com/user/leonardomouraleitao/
function echo(objeto: any) {
    return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({ nome: 'João', idade: 27 }))

// Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
    return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome)

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome: string, idade: number }>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Sicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Sicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Classe com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T,
        public operando2: T) {}

    abstract executar(): R      
}

// console.log(new OperacaoBinaria('Bom', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())
// console.log(new OperacaoBinaria({}, null).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(30, 434).executar())

class DiferencaEntreDatas 
    extends OperacaoBinaria<Data, string> {
        getTime(data: Data): number {
            let { dia, mes, ano } = data
            return new Date(`${mes}/${dia}/${ano}`).getTime()
        }

        executar(): string {
            const t1 = this.getTime(this.operando1)
            const t2 = this.getTime(this.operando2)
            const diferenca = Math.abs(t1 - t2)
            const dia = 1000 * 60 * 60 * 24
            return `${Math.ceil(diferenca / dia)} dia(s)`
        }
    }

    const d1 = new Data(20, 3, 1984)
    const d2 = new Data(23, 3, 2021)
    console.log(new DiferencaEntreDatas(d1, d2).executar())

    // Desafio Classe Fila
    // Atributo: fila (Array)
    // Métodos: entrar, próximo, imprimir
    class Fila<T extends number | string> {
        private fila: Array<T>

        constructor(...args: T[]) {
            this.fila = args
        }

        entrar(elemento: T) {
            this.fila.push(elemento)
        }

        proximo(): T {
            if (this.fila.length >= 0 && this.fila[0]) {
                const primeiro = this.fila[0]
                this.fila.splice(0, 1)
                return primeiro
            } else {
                return null
            }
        }

        imprimir() {
            console.log(this.fila)
        }
    }

    const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu')
    fila.imprimir()
    fila.entrar('Rafael')
    fila.imprimir()
    console.log(fila.proximo())
    console.log(fila.proximo())
    console.log(fila.proximo())
    fila.imprimir()

    const novaFila = new Fila<number>(1, 2, 3)
    novaFila.imprimir()

    // const outraFila = new Fila<boolean>(true, false)
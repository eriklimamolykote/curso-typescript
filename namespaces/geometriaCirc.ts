// Original author: Leonardo Moura Leitão (with adaptations)
// Contact: https://www.udemy.com/user/leonardomouraleitao/
namespace Geometria {
    export namespace Area {
        const PI = 3.14
        
        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }
    }
}
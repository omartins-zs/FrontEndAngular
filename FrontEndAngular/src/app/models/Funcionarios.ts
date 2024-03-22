export interface Funcionario {
    // ? em uma interface TypeScript indica que a propriedade é opcional ou seja pode ser nula
    id?: number,
    nome: string,
    sobrenome: string,
    departamento: string,
    ativo: boolean,
    turno: string,
    dataDeCriacao?: string,
    dataDeAlteracao?: string,
}

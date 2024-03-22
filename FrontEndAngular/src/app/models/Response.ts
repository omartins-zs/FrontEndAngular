// "T" Significa algo generico pode aceitar qualquer tipo de dados
export interface Response<T>{
  dados: T;
  mensagem: string;
  sucesso: boolean;
}

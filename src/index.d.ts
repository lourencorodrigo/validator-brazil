export namespace cnpj {
  /**
   * Retorna true se o CNPJ estiver válido
   * @param cnpj Cadastro Nacional da Pessoa Jurídica
   */
  export function validate(cnpj: string): boolean;

  /**
   * Retorna um CNPJ válido
   */
  export function generate(): string;
}

export namespace cpf {
  /**
   * Retorna true se o CNPJ estiver válido
   * @param cpf Cadastro de Pessoa Física
   */
  export function validate(cpf: string): boolean;

  /**
   * Retorna um CPF válido
   */
  export function generate(): string;
}

export namespace cep {
  /**
   * Retorna true se o CEP estiver válido
   * @param cep Código de Endereçamento Postal
   */
  export function validate(cep: string): boolean;
}

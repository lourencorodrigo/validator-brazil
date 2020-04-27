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

  /**
   * Formata um CNPJ de 00111222000100 para 00.111.222/0001-00
   * @param cnpj Cadastro Nacional da Pessoa Jurídica
   */
  export function format(cnpj: string): string;
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

  /**
   * Formata um CPF de 11122233300 para 111.222.333-00
   * @param cpf Cadastro de Pessoa Física
   */
  export function format(cpf: string): string;
}

export namespace cep {
  /**
   * Retorna true se o CEP estiver válido
   * @param cep Código de Endereçamento Postal
   */
  export function validate(cep: string): boolean;

  /**
   * Formata um CEP de 11222333 para 11222-333
   * @param cep Código de Endereçamento Postal
   */
  export function format(cep: string): string;
}

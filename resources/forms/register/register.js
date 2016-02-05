/*** 
 * Alterando type do inupt;
 * Usabilidade => Reconhecimento de teclado especifico;
 * Devices => Smartphones Tablets;
 * Desktop => todos os campos funcionam como text exceto caracteristicas especificas de cada Browser.
 * @autor sonteam
*/

jQuery('#email_login').prop('type', 'email');
jQuery('#email_cadastro').prop('type', 'email');

jQuery('#cnpj').prop('type', 'tel');
jQuery('#pf_cpf_cliente').prop('type', 'tel');
jQuery('#pj_cpf_cliente').prop('type', 'tel');

//jQuery('#pf_data_nascimento').prop('type', 'date');
//jQuery('#pj_data_nascimento').prop('type', 'date'); -> depreciou devido a problemas com sistema de validacao da tray

jQuery('#telefone_cliente').prop('type', 'tel');
jQuery('#telefone_cliente_2').prop('type', 'tel');

jQuery('#email_cliente').prop('type', 'email');
jQuery('#email_cliente2').prop('type', 'email');



//-----------------------------------------------------------------



/*** 
 * Criando placeholders para campos de input;
 * Pessoa Fisica e Juridica;
 * Usabilidade => Facilitar o preenchimento do campo pelo rotulo placeholder;
 * Codificacao separada por blocos contextuais.
 * @autor sonteam
*/

/* --- Nome Completo / Razao Social e Inscricao Estadual FISICA-JURIDICA */
jQuery('#pf_nome_cliente').attr('placeholder', 'Nome completo');
jQuery('#pj_nome_cliente').attr('placeholder', 'Nome completo');

jQuery('#razao_social').attr('placeholder', 'Razao Social');
jQuery('#ie').attr('placeholder', 'Inscrição Estadual');
/* End -------------------------------- */

/* --- Nascimento FISICA-JURIDICA */
jQuery('#pf_data_nascimento').attr('placeholder', 'Nascimento');
jQuery('#pj_data_nascimento').attr('placeholder', 'Nascimento');
/* End -------------------------------- */

/* --- CPF / CNPJ FISICA-JURIDICA */
jQuery('#pf_cpf_cliente').attr('placeholder', 'CPF');
jQuery('#pj_cpf_cliente').attr('placeholder', 'CPF');
jQuery('#pf_rg_cliente').attr('placeholder', 'RG');
jQuery('#cnpj').attr('placeholder', 'CNPJ');
/* End -------------------------------- */

/* --- Telefones FISICA-JURIDICA */
jQuery('#telefone_cliente').attr('placeholder', 'Telefone');
jQuery('#telefone_cliente_2').attr('placeholder', 'Cel. ou Comercial');
/* End -------------------------------- */

/* --- Email FISICA-JURIDICA */
jQuery('#email_cliente').attr('placeholder', 'Email');
jQuery('#email_cliente2').attr('placeholder', 'Digite Novamente');
/* End -------------------------------- */

/* --- Senha FISICA-JURIDICA */
jQuery('#senha_cliente').attr('placeholder', 'Senha');
jQuery('#senha_cliente2').attr('placeholder', 'Novamente sua Senha');
/* End -------------------------------- */


/*** Fieldset Entrega **/

/* --- CEP */
jQuery('#cep_1').attr('placeholder', 'CEP');
/* End -------------------------------- */

/* --- Logradouro */
jQuery('#endereco_cliente').attr('placeholder', 'Endereço');
jQuery('#numero_endereco').attr('placeholder', 'Nº');
jQuery('#complemento').attr('placeholder', 'Complemento');
jQuery('#bairro_cliente').attr('placeholder', 'Bairro');
/* End -------------------------------- */

/* --- Localidade */
jQuery('#cidade_cliente').attr('placeholder', 'Cidade');
jQuery('#estado_cliente').attr('placeholder', 'Estado');
/* End -------------------------------- */

/* --- CEP - Diferente */
jQuery('#cobranca_cep_1').attr('placeholder', 'CEP');
/* End -------------------------------- */

/* --- Logradouro - Diferente */
jQuery('#cobranca_endereco').attr('placeholder', 'Endereço');
jQuery('#cobranca_numero_endereco').attr('placeholder', 'Nº');
jQuery('#cobranca_complemento').attr('placeholder', 'Complemento');
jQuery('#cobranca_bairro').attr('placeholder', 'Bairro');
/* End -------------------------------- */

/* --- Localidade - Diferente */
jQuery('#cobranca_cidade').attr('placeholder', 'Cidade');
jQuery('#cobranca_estado').attr('placeholder', 'Estado');
/* End -------------------------------- */


// Gerenciando visibilidade dos Rotulos
jQuery('#email').after('<span class="msg-add"></span>');

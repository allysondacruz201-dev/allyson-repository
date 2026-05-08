BUG REPORT: 1

Titulo: Criando nova categoria

Descrição: O Back-end esta criando nova categoria com finalidade inexistente

Passos Para Reproduzir:

1. Abrir o swagger
2. Executar POST de uma nova categoria
3. enviar uma descrição
4. enviar finalidade inexistente (99/ 10)

Resultado Esperado: Aparecer mensagem de erro 401 not found

Resultado Obtido: Mensagem de sucesso 201 Created

Evidencias: https://www.loom.com/share/4fb05ba3c12941a3b8533e6fdfef657e

° Ambiente: Back-end

° Navegador: Postman

° Dispositivo: Computador

° Sistema Operacional: Windows 11

° Severidade: Baixo


BUG REPORT: 2

Titulo: Fazer transação com maior de idade

Descrição: Esta bloqueando maior de idade de fazer qualquer tipo de transação 

Passos Para Reproduzir:

1. Após criado categoria e pessoa
2. Executar POST de uma transação
3. Colocar os dados criados
4. Clicar em "send" 

Resultado Esperado: 200/ 201 Mensagem de sucesso

Resultado Obtido: 500 Internal Server Error

Evidencias: https://www.loom.com/share/fb5850a174b4404aa3f78871c427331d

° Ambiente: Back-end

° Navegador: Postman

° Dispositivo: Computador

° Sistema Operacional: Windows 11

° Severidade: Crítico 

Impacto:

Impede validar regras importantes do sistema, incluindo:

exclusão em cascata
totais por pessoa
validação de categorias

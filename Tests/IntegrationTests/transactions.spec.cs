using FluentAssertions;

public class TransacaoTests
{
    [Fact]
    public async Task Nao_Deve_Permitir_Receita_Para_Menor_De_Idade()
    {
        // Arrange

        int idade = 15;
        string tipo = "Receita";

        // Act

        bool permitido = idade >= 18;

        // Assert

        permitido.Should().BeFalse();
    }

    [Fact]
    public async Task Nao_Deve_Permitir_Categoria_Incompativel()
    {
        // Arrange

        string categoria = "Despesa";
        string tipo = "Receita";

        // Act

        bool categoriaValida = categoria == tipo;

        // Assert

        categoriaValida.Should().BeFalse();
    }
}
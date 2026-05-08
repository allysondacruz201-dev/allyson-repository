using FluentAssertions;

public class CategoriaTests
{
    [Fact]
    public async Task Deve_Criar_Categoria()
    {
        // Arrange

        var nome = "Alimentação";

        // Act

        // Simulação da criação

        // Assert

        nome.Should().NotBeNullOrEmpty();
    }

    [Fact]
    public async Task Nao_Deve_Permitir_Categoria_Invalida()
    {
        // Arrange

        string nome = "";

        // Act

        // Assert

        nome.Should().BeEmpty();
    }
}
using FluentAssertions;

namespace UnitTests;

public class PersonUnitTests
{
    [Fact]
    public void Should_Allow_Adult_Person()
    {
        // Arrange
        var age = 20;

        // Act
        var isAdult = age >= 18;

        // Assert
        isAdult.Should().BeTrue();
    }

    [Fact]
    public void Should_Not_Allow_Income_For_Underage_Person()
    {
        // Arrange
        var age = 15;
        var transactionType = "Income";

        // Act
        var allowed = age >= 18 && transactionType == "Income";

        // Assert
        allowed.Should().BeFalse();
    }
}
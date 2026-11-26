Feature: Arithmetic operations
  As a user of the calculator library
  I want to perform basic arithmetic operations on numbers and numeric strings
  So that I get correct results according to arithmetic rules

  Scenario Outline: Adding two values
    Given the first value is <a>
    And the second value is <b>
    When I add them
    Then the result should be <result>

    Examples:
      | a   | b   | result |
      | 2   | 3   | 5      |
      | -2  | 3   | 1      |
      | 1.5 | 2.5 | 4      |
      | "4" | "6" | 10     |

  Scenario Outline: Subtracting two values
    Given the first value is <a>
    And the second value is <b>
    When I subtract the second from the first
    Then the result should be <result>

    Examples:
      | a   | b   | result |
      | 5   | 1   | 4      |
      | 1   | 5   | -4     |
      | "10"| "3" | 7      |

  Scenario Outline: Multiplying two values
    Given the first value is <a>
    And the second value is <b>
    When I multiply them
    Then the result should be <result>

    Examples:
      | a   | b   | result |
      | 3   | 4   | 12     |
      | -3  | 4   | -12    |
      | 7   | 0   | 0      |
      | "2" | "5" | 10     |

  Scenario Outline: Dividing two values
    Given the first value is <a>
    And the second value is <b>
    When I divide the first by the second
    Then the result should be <result>

    Examples:
      | a   | b   | result |
      | 10  | 2   | 5      |
      | 7   | 2   | 3.5    |
      | -9  | 3   | -3     |
      | "8" | "4" | 2      |

  Scenario: Dividing by zero
    Given the first value is 5
    And the second value is 0
    When I divide the first by the second
    Then an error "Division by zero" should be thrown

  Scenario: Using a value that is not a number
    Given the first value is "abc"
    And the second value is 2
    When I add them
    Then an error "Invalid number" should be thrown

  Scenario Outline: Calculating a percentage of a value
    Given the first value is <value>
    And the second value is <percent>
    When I calculate the percentage
    Then the result should be <result>

    Examples:
      | value | percent | result |
      | 200   | 10      | 20     |
      | 50    | 50      | 25     |
      | "80"  | "25"    | 20     |

  Scenario Outline: Getting the whole part of a number
    Given the first value is <number>
    When I get the whole part of it
    Then the result should be <result>

    Examples:
      | number | result |
      | 5.75   | 5      |
      | -5.75  | -5     |
      | "3.14" | 3      |
      | 7      | 7      |

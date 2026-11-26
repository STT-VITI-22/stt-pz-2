Feature: Operations on strings
  As a user of the library
  I want to work with strings
  So that I can analyse and transform text

  Scenario Outline: Getting vowels from a string
    Given the text "<text>"
    When I take the vowels
    Then I should get the characters "<vowels>"

    Examples:
      | text       | vowels  |
      | Hello      | e,o     |
      | JavaScript | a,a,i   |
      | Привіт     | и,і     |
      | rhythm     |         |

  Scenario: Concatenating strings
    Given the strings "Hello", ", ", "World"
    When I concatenate them
    Then the text result should be "Hello, World"

  Scenario: Splitting a string by a divider
    Given the text "a-b-c"
    When I split it by "-"
    Then I should get the parts "a", "b", "c"

  Scenario Outline: Checking whether a string contains a substring
    Given the text "<text>"
    When I check whether it contains "<sub>"
    Then the answer should be <answer>

    Examples:
      | text        | sub   | answer |
      | Hello World | World | true   |
      | Hello World | world | false  |

  Scenario Outline: Checking whether a character is lower case
    Given the character "<char>"
    When I check whether it is lower case
    Then the answer should be <answer>

    Examples:
      | char | answer |
      | a    | true   |
      | A    | false  |
      | 1    | false  |
      | ж    | true   |

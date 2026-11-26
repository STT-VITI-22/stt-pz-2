Feature: Operations on arrays of numbers
  As a user of the library
  I want to analyse arrays of numbers
  So that I can quickly get statistics about them

  Scenario: Getting even numbers
    Given the numbers 1, 2, 3, 4, 5, 6
    When I take the even numbers
    Then I should get the numbers 2, 4, 6

  Scenario: Getting even numbers when there are none
    Given the numbers 1, 3, 5
    When I take the even numbers
    Then I should get an empty list

  Scenario: Getting the maximum number
    Given the numbers 3, -7, 12, 0
    When I take the maximum number
    Then the result should be 12

  Scenario: Getting minimum and maximum numbers
    Given the numbers 3, -7, 12, 0
    When I take the minimum and maximum numbers
    Then the minimum should be -7 and the maximum should be 12

  Scenario: Calculating the arithmetic mean
    Given the numbers 2, 4, 6, 8
    When I calculate the arithmetic mean
    Then the result should be 5

  Scenario Outline: Working with an empty array
    Given an empty list of numbers
    When I <action>
    Then an error "Array must not be empty" should be thrown

    Examples:
      | action                               |
      | take the maximum number              |
      | take the minimum and maximum numbers |
      | calculate the arithmetic mean        |

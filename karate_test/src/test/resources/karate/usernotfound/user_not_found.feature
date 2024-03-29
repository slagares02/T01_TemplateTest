@UserNotFoundFeature
Feature: I want to test the user list response

  Background:
    * def genericHeader = callonce read('../common/load_file.feature') {dir: '../common/data/generic_headers.json'}
    * def genericHeader = genericHeader.file

  @UserNotFound
  Scenario: User not found in the list
    Given url api.localUrlBase + path.userNotFound
    And headers genericHeader
    When method GET
    Then status 404
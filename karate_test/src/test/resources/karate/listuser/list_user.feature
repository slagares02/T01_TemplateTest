@ListUserFeature
Feature: I want to test the user list response

  Background:
    * def genericHeader = callonce read('../common/load_file.feature') {dir: '../common/data/generic_headers.json'}
    * def genericHeader = genericHeader.file    

  @SuccessListUser
  Scenario: Success result for user list request
    Given url api.localUrlBase + path.listUser
    And headers genericHeader
    When method GET
    Then status 200
    * match $.page == 2
    * match $.data[0].id == 7
    * match $.data[3].first_name == "Byron"


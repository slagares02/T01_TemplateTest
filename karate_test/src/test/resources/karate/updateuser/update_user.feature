@UpdateUserFeature
Feature: I want to test the user update response

  Background:
    * def genericHeader = callonce read('../common/load_file.feature') {dir: '../common/data/generic_headers.json'}
    * def genericHeader = genericHeader.file
    * def bodyRequest = callonce read('../common/load_file.feature') {dir: '../common/data/update_body.json'}
    * def bodyRequest = bodyRequest.file

  @SuccessUpdateUser
  Scenario: Success result for user list request
    Given url api.localUrlBase + path.listUser
    And headers genericHeader
    And request bodyRequest
    When method PUT
    Then status 200
    * match $.name == "Michael"
    * match $.job == "Quality Assurance"


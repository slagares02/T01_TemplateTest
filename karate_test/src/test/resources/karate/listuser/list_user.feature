Feature: I want to test the user list response

  Background:
    * url api.localUrlBase
    #* configure headers = {content-type: 'application/json'}
    * def listUser = path.listUser

  @SuccessFullListUser
  Scenario: Success result for user list request

    Given path listUser
    When method GET
    Then status 200

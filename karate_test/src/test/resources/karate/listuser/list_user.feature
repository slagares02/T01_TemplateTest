Feature: I want to test the user list response

  Background:
    * url api.urlBase
    * configure headers = {content-type: 'application/json'}
    * def userList = path.userList

  @SuccessFullListUser
  Scenario: Success result for user list request

    Given path userList
    When method GET
    Then status 200

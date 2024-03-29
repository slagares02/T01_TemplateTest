@ignore
Feature: I want to load json file
#This scenario load a file from route of variable "dir" says, it was sended when the feature was called
  @LoadFile
  Scenario: Load file from a directory
    * def file = read(dir)
    



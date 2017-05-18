class Api::CharactersController < ApplicationController

  def index
    @characters = Character.all
    render status: 200,
    json: @characters
  end

  def characters
    response = HTTParty.get('http://swapi.co/api/people/?format=json')
    response_two = HTTParty.get('http://swapi.co/api/people/?format=json&page=2')
    response_three = HTTParty.get('http://swapi.co/api/people/?format=json&page=3')
    response_four = HTTParty.get('http://swapi.co/api/people/?format=json&page=4')
    response_five = HTTParty.get('http://swapi.co/api/people/?format=json&page=5')
    response_six = HTTParty.get('http://swapi.co/api/people/?format=json&page=6')
    response_seven = HTTParty.get('http://swapi.co/api/people/?format=json&page=7')
    response_eight = HTTParty.get('http://swapi.co/api/people/?format=json&page=8')
    response_nine = HTTParty.get('http://swapi.co/api/people/?format=json&page=9')
    character_array = [response, response_two, response_three, response_four, response_five, response_six, response_seven, response_eight, response_nine]
    render json: character_array
  end

end

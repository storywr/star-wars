class Api::CharactersController < ApplicationController

  def index
    @characters = Character.all
    render status: 200,
    json: @characters
  end

  def characters
    response = HTTParty.get('http://swapi.co/api/people/?format=json')
    render json: response
  end

end

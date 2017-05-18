class Api::CharactersController < ApplicationController

  def index
    @characters = Character.all
    render status: 200,
    json: @characters
  end

  def characters
    i = 1
    character_array = []
    while i < 10 do
      character_array.push(HTTParty.get("http://swapi.co/api/people/?format=json&page=#{i}"))
      i += 1
    end
    render json: character_array
  end

end

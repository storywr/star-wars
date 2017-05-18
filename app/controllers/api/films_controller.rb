class Api::FilmsController < ApplicationController

  def index
    @characters = Character.all
    render status: 200,
    json: @characters
  end

  def films
    response = HTTParty.get("http://swapi.co/api/films/?&format=json")
    render json: response
  end

end

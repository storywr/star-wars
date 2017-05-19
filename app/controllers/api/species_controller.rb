class Api::SpeciesController < ApplicationController

  def index
    @species = Profile.all
    render status: 200,
    json: @species
  end

  def species
    response = HTTParty.get("http://swapi.co/api/species/#{species_params[:characterid]}")
    render json: response
  end

  private

  def species_params
    params.require(:species).permit(:characterid)
  end

end

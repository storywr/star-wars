class Api::SpeciesController < ApplicationController

  def index
    @species = Profile.all
    render status: 200,
    json: @species
  end

  def species
    response = HTTParty.get("#{species_params[:speciesURL]}")
    render json: response
  end

  private

  def species_params
    params.require(:species).permit(:speciesURL)
  end

end

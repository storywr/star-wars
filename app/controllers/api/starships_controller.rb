class Api::StarshipsController < ApplicationController

  def index
    @starships = Profile.all
    render status: 200,
    json: @starships
  end

  def starships
    response = HTTParty.get("#{starships_params[:starshipsURL]}")
    render json: response
  end

  private

  def starships_params
    params.require(:starships).permit(:starshipsURL)
  end

end

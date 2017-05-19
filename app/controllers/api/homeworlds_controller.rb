class Api::HomeworldsController < ApplicationController

  def index
    @homeworlds = Profile.all
    render status: 200,
    json: @homeworlds
  end

  def homeworlds
    response = HTTParty.get("#{homeworlds_params[:homeworldsURL]}")
    render json: response
  end

  private

  def homeworlds_params
    params.require(:homeworlds).permit(:homeworldsURL)
  end

end

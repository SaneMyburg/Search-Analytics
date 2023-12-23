class SearchesController < ApplicationController
  def index
    @search_history = current_user.searches.order("created_at DESC").limit(5)
  end

  def search
    query = params[:query].strip
  
    if query.present?
      current_user.searches.create(query: query)
    end
  
    @search_results = ["Result 1", "Result 2", "Result 3"]
  
    render json: { results: @search_results }
  end
end

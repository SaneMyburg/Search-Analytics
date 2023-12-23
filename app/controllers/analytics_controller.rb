class AnalyticsController < ApplicationController
  def index
    @search_queries = Search.group(:query).count
  end
end

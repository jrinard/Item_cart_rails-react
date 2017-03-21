class Api::V1::BaseController < ApplicationController
  respond_to :json #json must be lowercase
end

# The respond_to method ensures that all actions from the controllers, which inherit from the base controller, will respond with JSON.
# Read more at https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails#0uFDLu4TrZoJlFCx.99

class Api::V1::ItemsController < Api::V1::BaseController

  def index
    respond_with Item.all
  end

  def create
    respond_with :api, :v1, Item.create(item_params)
  end

  def destroy
    respond_with Item.destroy(params[:id])
  end

  def update
    item = Item.find(params["id"])
    item.update_attributes(item_params)
    respond_with item, json: item
  end

private

  def item_params
    params.require(:item).permit(:id, :name, :description)
    end
end


# The respond_with method is part of the responders gem and will return a JSON object with the results of each action in the controller.
# Read more at https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails#0uFDLu4TrZoJlFCx.99

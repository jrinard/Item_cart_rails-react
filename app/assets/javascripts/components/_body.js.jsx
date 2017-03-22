var Body = React.createClass({
    getInitialState() {
        return { items: [] }
    },

    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    },

    handleSubmit(item) {
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    },

      handleDelete(id) {
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success:() => {
                this.removeItemClient(id); //removing the item from the array of items upon successful deletion from the database.
            }
        });
    },

    removeItemClient(id) {
      var newItems = this.state.items.filter((item)=> {
        return item.id != id;
      });
      this.setState({ items: newItems });
    },

    render() {
        return (
            <div>
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items} handleDelete={this.handleDelete}/>
            </div>
        )
    }
});
//props is used to pass the reference of the function in the parent component to the child component
// sends down the items from body to allitems

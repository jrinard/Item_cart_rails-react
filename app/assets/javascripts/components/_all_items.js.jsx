
var AllItems = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

    render() {
        var items= this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
                </div>
            )
        });

        return(
            <div>
                {items}
            </div>
        )
    }
});
 //defines all items  // returns all items

//The bind() method will bind the id of the item to this, causing the id to send as an argument.

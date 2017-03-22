
var AllItems = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(item) {
      this.props.onUpdate(item);
  },

    render() {
        var items= this.props.items.map((item) => {
            return (
                <div key={item.id}>
                  <Item item={item}
                     handleDelete={this.handleDelete.bind(this, item.id)}
                     handleUpdate={this.onUpdate}/>
                 </div> //pulls in item partial
            )
        });

        return(
            <div>
                {items}
            </div>
        )
    }
});

//props is used to pass the reference of the function in the parent component to the child component
 //defines and returns all items

//The bind() method will bind the id of the item to this, causing the id to send as an argument.

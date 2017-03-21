var NewItem= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (response) => {
                console.log('it worked!', response);
            }
        });
    },
    render() {
        return (
                <div>
                    <input ref='name' placeholder='Enter the name of the item' />
                    <input ref='description' placeholder='Enter a description' />
                    <button onClick={this.handleClick}>Submit</button>
                </div>

        )
    }
});

//when we click the button the component will look for the handleClick() function. We must define it in the JavaScript file.

//ref attribute is sued to reference the element similar to name and id and Class
// In this particular case, the ref will be used to get the value of the text field and send it to the server.

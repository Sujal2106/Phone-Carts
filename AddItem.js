import React, { Component } from "react";

class AddItem extends Component {
    state = { name: "", price: "", image: "" };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, price, image } = this.state;
        if (name.trim() && price > 0) {
            this.props.addItem(name, Number(price), image);
            this.setState({ name: "", price: "", image: "" });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mb-3 p-3 border rounded bg-light">
                <div className="row g-2">
                    <div className="col-md-4">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            placeholder="Product Name" 
                            required 
                        />
                    </div>
                    <div className="col-md-3">
                        <input 
                            type="number" 
                            className="form-control" 
                            name="price" 
                            value={this.state.price} 
                            onChange={this.handleChange} 
                            placeholder="Price" 
                            required 
                        />
                    </div>
                    <div className="col-md-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="image" 
                            value={this.state.image} 
                            onChange={this.handleChange} 
                            placeholder="Image URL (Optional)" 
                        />
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <button type="submit" className="btn btn-primary w-50">Add Item</button>
                </div>
            </form>
        );
    }
}

export default AddItem;

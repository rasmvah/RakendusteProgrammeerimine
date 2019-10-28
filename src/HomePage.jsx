import React from "react";
import { phones, laptops } from "./mydatabase.js";
import Header from "./header.jsx";
import ItemList from "./itemlist.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: phones,
        }
    }

    handleChange(event){
        console.log(event.target.value);
        switch(event.target.value){
            case "phones":{
                this.setState({
                    items: phones,
                });
                break;
            }
            case "laptops":{
                this.setState({
                items: laptops,
                });
            break;
            }
        }
        console.log("App state", this.state);
    };
    render(){
        return (
            <>
                <Header/>
                <select onChange={this.handleChange.bind(this)}>
                    <option value="Phones" selected>Phones</option>
                    <option value="Laptops">Laptops</option>
                </select>
                <ItemList items={this.state.items} />
            </>
        )
    }
}

export default HomePage;
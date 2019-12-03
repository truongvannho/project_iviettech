import  React, {Component} from 'react';

export default class ListItem extends Component{
    constructor(){
        super();
        this.state = {
            list_todo: [
                {
                    id: "001",
                    name: "Hoc HTML"
                },
                {
                    id: "002",
                    name: "Hoc CSS"
                },
                {
                    id: "003",
                    name: "Hoc JS"
                },
                {
                    id: "004",
                    name: "Hoc ReactJs"
                }
            ]
        }
    }
    render(){
        return(
        <div>{this.state.list_todo.map((item,i) => <li key={i}>{item.name}</li>)}</div>
            
        )
    }
}
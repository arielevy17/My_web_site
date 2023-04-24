import React from "react";
import axios from "axios";
import {isRouteErrorResponse} from "react-router-dom";

class AdminPage extends React.Component{

    state= {
        list: []
    }

    refreshList=()=>{
        axios.get("http://localhost:8080/admin/show-list").then((response=>{
            this.setState({
                list:response.data.potentsialClients
            })
        }))
    }

    render() {
        return(
            <div onChange={this.refreshList}>
                {this.state.list}
            </div>

        )
    }
}
    export default AdminPage;
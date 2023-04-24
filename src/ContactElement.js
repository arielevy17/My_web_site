import React from "react";
import axios from "axios";

class ContactElement extends React.Component{

    state={
        name:"",
        phoneNumber:""
    }

    nameValidation=(name)=>{
        let ans=false;
        if (name.includes(" ")){
            ans=true;
        }
        return ans;
    }

    phoneValidation=(phoneNumber)=>{
        let ans=false;
        if ((phoneNumber.length>=9)&&(phoneNumber.charAt(0)==='0')&&(/^[0-9]+$/.test(phoneNumber))){
            ans=true;
        }
        return ans
    }

    validation=(name,phoneNumber)=>{
        if (this.nameValidation(name)&&this.phoneValidation(phoneNumber)){
            return true;
        }
        else {
            return false;
        }
    }

    nameChange=(event)=> {
        this.setState({
            name: event.target.value
        })
    }

    phoneNumberChange=(event)=> {
        this.setState({
            phoneNumber : event.target.value
        })
    }

    clearInput=()=>{
        this.setState({
            name:"",
            phoneNumber:""
        })
    }

    sendToServer=()=>{
        axios.post("http://localhost:8080/send",null,{
            params:{
                name: this.state.name,
                phoneNumber:this.state.phoneNumber
            }
        }).then();
        this.clearInput();
    }

    render() {
        return (
                <div dir="rtl">
                    <link rel="stylesheet" type="text/css" href="./G.N.png.jpg"/>
                    <br/><br/>
                    <span  style={{color:"yellow",fontWeight:"bold"}}>אז למה אתם מחכים? קבעו עוד היום פגישה, והצטרפו למאגר הלקוחות המרוצים שלנו </span>
                    <br/><br/><br/>
                    <span style={{textDecoration:"underline",color:"greenyellow",fontWeight:"bold"}}>
                     צור קשר:  <br/>
                </span>
                    <br/>

                    <span className="costumerDeatels">
                <p>
                     שם מלא:
                <input value={this.state.name} onChange={this.nameChange} style={{borderRadius:90,borderColor:"black"}}/>
                    <br/>
                </p>

            <p>
                מספר טלפון:
                <input value={this.state.phoneNumber} onChange={this.phoneNumberChange} style={{borderRadius:90}}/>
            </p>
                    </span>

                    <button disabled={this.validation(this.state.name,this.state.phoneNumber)? false:true}
                            onClick={this.sendToServer}>
                        שלח
                    </button>
                    <br/><br/>

                </div>


        )
    }
}
export default ContactElement;

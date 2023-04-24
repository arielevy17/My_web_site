import './App.css';
import React  from "react";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import HomePage from "./HomePage";
import WebsiteHosting from "./WebsiteHosting";
import AboutUs from "./AboutUs";
import Articles from "./Articles";
import ConnectUs from "./ConnectUs";
import LandingPages from "./LandingPages";
import CorporateWebsite from "./CorporateWebsite";
import TechnicalSupport from "./TechnicalSupport";
import './ConactElement.css';
import ContactElement from "./ContactElement";
import AdminPage from "./AdminPage";



class App extends React.Component{
  state={
      selection:"שירותים",
      firstEntry:1,
      waitingForContact:{},
      selectionClicked:false,
      val:"שירותים"
  }


    handleSelectChange = (event) => {
        this.props.history.push(event.target.value);
    }

    /*t=()=>{
      debugger
      if (this.state.firstEntry===1){
          window.location.href="http://localhost:3000/home-page";
          this.setState({
              firstEntry:0
          })
      }
    }


    changeSelection=(event)=> {
        debugger
        this.setState({
            selection: event.target.value
        })
    }

     */


    passToOptionPage=(event)=>{
        debugger
            this.setState({
                val: event.target.value
            })
            if (this.state.val === "איחסון אתרים") {
                window.location.href = "http://localhost:3000/website-hosting"
            } else if (this.state.val === "דפי נחיתה") {
                window.location.href = "http://localhost:3000/landing-pages"
            } else if (this.state.val === "אתרי תדמית") {
                window.location.href = "http://localhost:3000/corporate-website"
            } else if (this.state.val === "תמיכה טכנית") {
                window.location.href = "http://localhost:3000/technical-support"
            }

    }

  render() {
    return (
        <div className="allFrame">
        <div className="Top">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link rel="stylesheet" type="text/css" href="./G.N.png.jpg"/>
                <div className="Menu" style={{margin:0,borderBlock:"black"}}>


                            <a onClick={()=>{{window.location.href="http://localhost:3000/"}}}>
                                עמוד בית
                            </a>
                    <i className="fas fa-hammer"></i>
                                   <select value={this.state.val} onChange={this.passToOptionPage} onClick={this.passToOptionPage}>
                                       <option disabled={true}>
                                           שירותים
                                       </option>

                                       <option>
                                            איחסון אתרים
                                       </option>

                                       <option>
                                           דפי נחיתה
                                       </option>

                                       <option>
                                           אתרי תדמית
                                       </option>

                                       <option>
                                          תמיכה טכנית
                                       </option>

                                   </select>
                <a onClick={()=>{window.location.href="http://localhost:3000/about-us";this.setState({firstEntry:0})}}>
                    <i className="fas fa-info-circle"></i>
                    אודות
                </a>

               <a onClick={()=>{window.location.href="http://localhost:3000/articles";this.setState({firstEntry:0})}}>
                   <i className="far fa-newspaper"></i>
                   מאמרים
               </a>

            <a onClick={()=>{window.location.href="http://localhost:3000/connect";this.setState({firstEntry:0})}}>
                <i className="contact-icon fa fa-phone"></i>
                צור קשר
                <i className="fas fa-home"></i>
            </a>


            </div>
            <br/>
        </div>

        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/website-hosting"} element={<WebsiteHosting/>}/>
                    <Route path={"/landing-pages"} element={<LandingPages/>}/>
                    <Route path={"/corporate-website"} element={<CorporateWebsite/>}/>
                    <Route path={"/technical-support"} element={<TechnicalSupport/>}/>
                    <Route path={"/about-us"} element={<AboutUs/>}/>
                    <Route path={"/articles"} element={<Articles/>}/>
                    <Route path={"/connect"} element={<ConnectUs/>}/>
                    <Route path={"/admin/show-list"} element={<AdminPage/>}/>
                </Routes>
            </BrowserRouter>
            {//this.state.firstEntry===1?<HomePage/>:<p style={{color:"green"}}>working</p>}
            }
            <br/><br/>
            <div className="logo"/>
            <br/>
            <br/>
            <ContactElement/>


        </div>

        </div>
    );
  }
}

export default App;

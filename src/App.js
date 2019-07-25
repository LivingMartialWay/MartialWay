import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const initNavbarState = {
  TradSideBarOpen: false,
  KravSideBarOpen: false,
  WeapSideBarOpen: false,
  GlosSideBarOpen: false,
  PhilSideBarOpen: false,
};

const initNavButtonState = {
  NavButtonTradSel: false,
  NavButtonKravSel: false,
  NavButtonWeapSel: false,
  NavButtonGlosSel: false,
  NavButtonPhilSel: false,
};

class App extends Component {
  state = {
    ...initNavbarState,
  }

  toggleSideBar = sidebar => this.setState({ sidebar })

  toggleTradSideBarOpen = ()=> this.setState(state => ({ ...initNavbarState, ...initNavButtonState, TradSideBarOpen: !state.TradSideBarOpen, NavButtonTradSel: !state.NavButtonTradSel}))
  toggleKravSideBarOpen = ()=> this.setState(state => ({ ...initNavbarState, ...initNavButtonState, KravSideBarOpen: !state.KravSideBarOpen, NavButtonKravSel: !state.NavButtonKravSel}))
  toggleWeapSideBarOpen = ()=> this.setState(state => ({ ...initNavbarState, ...initNavButtonState, WeapSideBarOpen: !state.WeapSideBarOpen, NavButtonWeapSel: !state.NavButtonWeapSel}))
  toggleGlosSideBarOpen = ()=> this.setState(state => ({ ...initNavbarState, ...initNavButtonState, GlosSideBarOpen: !state.GlosSideBarOpen, NavButtonGlosSel: !state.NavButtonGlosSel}))
  togglePhilSideBarOpen = ()=> this.setState(state => ({ ...initNavbarState, ...initNavButtonState, PhilSideBarOpen: !state.PhilSideBarOpen, NavButtonPhilSel: !state.NavButtonPhilSel}))

  toggleNavButtonTradSel = ()=> this.setState(state => ({ ...initNavButtonState, NavButtonTradSel: !state.NavButtonTradSel }))
  toggleNavButtonKravSel = ()=> this.setState(state => ({ ...initNavButtonState, NavButtonKravSel: !state.NavButtonKravSel }))
  toggleNavButtonWeapSel = ()=> this.setState(state => ({ ...initNavButtonState, NavButtonWeapSel: !state.NavButtonWeapSel }))
  toggleNavButtonGlosSel = ()=> this.setState(state => ({ ...initNavButtonState, NavButtonGlosSel: !state.NavButtonGlosSel }))
  toggleNavButtonPhilSel = ()=> this.setState(state => ({ ...initNavButtonState, NavButtonPhilSel: !state.NavButtonPhilSel }))

  // toggleTradSideBarOpen = ()=> this.setState(state => ({ ...initNavButtonState, NavButtonTradSel: !state.NavButtonTradSel }))

  render(){
    return (
      <div className='App'>
        <div>
            <div className="TopNavbar">
              <div className="NavItems">
                <div className="LogoButton"><span>Logo</span></div>
                <div className={"NavButtonTrad "+(this.state.NavButtonTradSel ? 'selected' : 'nonselected')} onClick={this.toggleTradSideBarOpen}><span>Traditional</span></div>
                <div className={"NavButtonKrav "+(this.state.NavButtonKravSel ? 'selected' : 'nonselected')} onClick={this.toggleKravSideBarOpen}><span>Krav Maga</span></div>
                <div className={"NavButtonWeap "+(this.state.NavButtonWeapSel ? 'selected' : 'nonselected')} onClick={this.toggleWeapSideBarOpen}><span>Weapons</span></div>
                <div className={"NavButtonGlos "+(this.state.NavButtonGlosSel ? 'selected' : 'nonselected')} onClick={this.toggleGlosSideBarOpen}><span>Glossary</span></div>
                <div className={"NavButtonPhil "+(this.state.NavButtonPhilSel ? 'selected' : 'nonselected')} onClick={this.togglePhilSideBarOpen}><span>Philosophy</span></div>
                <div className="SettingsButton">Acct</div>
              </div>
            </div>


            <div className="SideBars">

              <div className={"TraditionalSideBar "+(this.state.TradSideBarOpen ? 'open' : 'closed')}>
              <ul className="TradSideBarBasicsList">
                  <li><b>Why Traditional Martial Arts?</b></li>
                  <br/>
                  <li> Basic Stances </li>
                  <li> Basic Blocks</li>
                  <li> Basic Strikes</li>
              </ul>
              <ul className="TradSideBarFormsList">
                  <li><b>TaeKwonDo Traditional Forms</b></li>
                  <br/>
                  <li> Pulgwe 1</li>
                  <li> Pulgwe 2</li>
                  <li> Pulgwe 3</li>
                  <li> Pulgwe 4</li>
                  <li> Pulgwe 5</li>
                  <li> Pulgwe 6</li>
                  <li> Pulgwe 7</li>
                  <li> Pulgwe 8</li>
                  <li> Korio</li>
                  <li> QwanGwe</li>
              </ul>
              <ul className="TradSideBarPathList">
                  <li><b>Path to Mastery</b></li>
                  <li>Mirroring forms</li>
                  <li>Personal form</li>
                  <li>Blindfolded</li>
              </ul>
              </div>

              <div className={"KravSideBar "+(this.state.KravSideBarOpen ? 'open' : 'closed')}>
                  <ul className="KravSideBarList">
                  <li> OH FUCK ME CUNT SIDE FACE SLAP </li>
                </ul>
              </div>

              <div className={"WeaponsSideBar "+(this.state.WeapSideBarOpen ? 'open' : 'closed')}>
                <ul className="WeaponsSideBarList">
                  <li><h3>Eskrima</h3></li>
                  <li>4 Basic Strikes</li>
                  <li>18 Count Strikes</li>
                  <li>2-Man High 6-ct</li>
                  <li>2-Man Low 6-ct</li>
                  <li>2-Man Hi/Low 6-ct</li>
                  <li><h3>Fruit Knife</h3></li>
                  <li>Closing the range</li>
                  <li>Drawing Concealed</li>
                  <li>Specialized Targets</li>
                  <li>Flicking and Slicing</li>
                  <li><h3>Sidearms & Handguns</h3></li>
                </ul>
              </div>

              <div className={"GlossarySideBar "+(this.state.GlosSideBarOpen ? 'open' : 'closed')}>
              </div>


              <div className={"PhilosophySideBar "+(this.state.PhilSideBarOpen ? 'open' : 'closed')}>
              </div>


            </div>

            <div className="AfterFuck">
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <p> Fuck </p>
            </div>
        </div>
      </div>
    )
  }
}
export default App;

import React, { Component } from 'react';
import './App.css';

const pages = ['Traditional', 'KravMaga', 'Weapons', 'Glossary', 'Philosophy'];

class App extends Component {
  state = {
  }

  toggleSidebar = sidebar => this.setState({
    sidebar: this.state.sidebar === sidebar ? null : sidebar
  })

  render(){
    return (
      <div className='App'>
        <div>
            <div className="TopNavbar">
              <div className="NavItems">
                <div className="LogoButton"><span>Logo</span></div>
                {pages.map(page => (
                  <div className={"NavButton NavButton"+page+" "+(this.state.sidebar === page ? 'selected' : 'nonselected')}
                       onClick={()=> this.toggleSidebar(page)}><span>{page}</span></div>
                ))}
                <div className="SettingsButton">Acct</div>
              </div>
            </div>


            <div className="SideBars">

              <div className={"TraditionalSideBar "+(this.state.sidebar === 'Traditional' ? 'open' : 'closed')}>
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

              <div className={"KravSideBar "+(this.state.sidebar === 'KravMaga' ? 'open' : 'closed')}>
                <ul className="KravSideBarList">
                  <li> OH FUCK ME CUNT SIDE FACE SLAP GIVE IT TO ME GOOD YOU SON OF A BITCH I HAVEN'T BEEN THIS HORNY SINCE HIGH SCHOOL</li>
                </ul>
              </div>

              <div className={"WeaponsSideBar "+(this.state.sidebar === 'Weapons' ? 'open' : 'closed')}>
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

              <div className={"GlossarySideBar "+(this.state.sidebar === 'Glossary' ? 'open' : 'closed')}>
              </div>

              <div className={"PhilosophySideBar "+(this.state.sidebar === 'Philosophy' ? 'open' : 'closed')}>
              </div>
            </div>

            <div className="AfterFuck">
              <p> Fuck </p>
            </div>
        </div>
      </div>
    )
  }
}
export default App;

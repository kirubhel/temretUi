import React, { useEffect, useState } from 'react'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { GrMail, GrInstagram, GrDocumentImage } from 'react-icons/gr'
import axios from 'axios'
import { urlMahber, assetUrl } from '../endpoints'

function NavBar() {

  const [club, setClub] = useState([])

  useEffect(() => {

    axios.get(urlMahber).then((res) =>
      setClub(res.data)
    )

  }, [])
  const getImage = (item) => {

    const imagePath = `${assetUrl}/${item}`
    console.log('image path', imagePath)

    return imagePath;

  }

  return (
    <header className='masthead'>
      <nav className="clubNavigation" data-script="pl_global-header" role="menubar">

        <div className="clubSitesHeading">

          <h4 style={{ fontSize: '16px' }}>የደጋፊ ማህበር ድረ ገጽ<div className="icon"></div></h4>
        </div>
        <ul className="clubList" role="menu">

          {club.map((item) =>
            <li key={item.id}>
              <a target="_blank" href={item.webAdress} role="menuitem">
                <div className="badge badge--small badge-image-container" data-widget="club-badge-image" data-size="25">
                  <img className="badge-image badge-image--25 js-badge-image" src={getImage(item.logo)} />
                </div>
                <div className="badge badge--large badge-image-container" data-widget="club-badge-image" data-size="50">
                  <img className="badge-image badge-image--50 js-badge-image" src={getImage(item.logo)} />
                  <span className="visuallyHidden">{item.name}</span>
                </div>
                <span className="name">{item.name}</span>
              </a>
            </li>)

          }

        </ul>
      </nav>

      <div className="fixedContainer">
        <a href="home.html" className="u-hide-tab logoContainer" aria-label="Premier League Home Page on logo link">


          <div className="logo">
            <img src='/assets/logo.png' />
          </div>




          <div className="logoBackground"></div>
          <span className="mobile"><img src="resources/prod/v6.103.2-4532/i/elements/premier-league-logo-header-mob.svg" alt="Premier League Logo" /></span>
        </a>
        <div className="navContainer" data-script="pl_global-header">
          <section id="mainNav" className="navBar" role="menubar">
            <div className="menuBtn" role="button" id="hamburgerToggle" aria-expanded="false">
              <div className="menuBtnContainer">
                <div></div>
                <div></div>
                <div></div>
              </div>

            </div>

            <nav className="mainNav">
              <ul className="pageLinks" role="menu">
                <li className=" premierleague 
    " aria-haspopup="true" role="menuitem">

                  <div role="button"
                    className="navLink active  " >
                    <span className="navText" style={{ fontSize: '22px' }}>የኢትዮጵያ ፕሪሚየር ሊግ ደጋፊዎች ማህበር</span>

                  </div>
                </li>
              </ul>
            </nav>


            <div className="navOption search">
              <div className="searchBtn headerSearchButton" role="button" ><span className="visuallyHidden">Search</span><div className="icn search-w"></div></div>
            </div>

            <a href="https://users.premierleague.com/?redirect_uri=https://www.premierleague.com/&amp;app=pl-web" className="navLink navOption navOption--no-border fantasySignIn" role="button" >
              <span className="fantasySignInLabel"></span>
            </a>




            <a href="NoRoomForRacism.html" className=" noroomforracism hide-ms navLink navOption  " role="button" >
              <div className="icn user-w show-m"></div>
              <span className="featuredLinkTitle"> <GrInstagram /> </span>
            </a>
            <a href="NoRoomForRacism.html" className=" noroomforracism hide-ms navLink navOption  " role="button" >
              <div className="icn user-w show-m"></div>
              <span className="featuredLinkTitle"> <GrMail /> </span>
            </a>
            <a href="NoRoomForRacism.html" className=" noroomforracism hide-ms navLink navOption  " role="button" >
              <div className="icn user-w show-m"></div>
              <span className="featuredLinkTitle"> <BsYoutube />  </span>
            </a>
            <a href="NoRoomForRacism.html" className=" noroomforracism hide-ms navLink navOption  " role="button" >
              <div className="icn user-w show-m"></div>
              <span className="featuredLinkTitle"> <BsTwitter />  </span>
            </a>
            <a href="NoRoomForRacism.html" className=" noroomforracism hide-ms navLink navOption  " role="button" >
              <div className="icn user-w show-m"></div>
              <span className="featuredLinkTitle"><BsFacebook />  </span>
            </a>
            <span className="mobile-logo">
              <a href="home.html" className="u-show-tab" aria-label="Premier League Home Page on logo link">
                <i className="icn pl-logo-mobile-menu"></i>
              </a>
            </span>
          </section>
          <div className="searchBar searchBarContainer" data-widget="search-header-redirect" role="search">
            <div className="searchBox">
              <div className="plSearch">
                <input id="searchPremierLeagueInput" className="searchInput searchInputContainer" type="text" placeholder="Search Premier League" />
                <label htmlFor="searchPremierLeagueInput" className="visuallyHidden">Search Premier League</label>
                <span className="focusBorder"></span>
                <span className="searchBtnContainer searchButtonContainer">
                  <input type="submit" className="searchInputBtn" id="searchPremierLeagueInput" aria-label="Submit search" />
                  <span className="btnBg"></span>
                  <span className="icn search-sm"><span className="visuallyHidden">Submit search</span></span>
                </span>
              </div>
            </div>
          </div>
          <div className="searchOverlay"></div>
        </div>

        <nav className="subNav" role="menubar">
          <ul>
            <li><a href="index.html" className="  active" data-link-index="0" style={{ fontSize: '16px' }} role="menuitem">መነሻ</a></li>
            <li><a href="fixtures.html" className="  " data-link-index="1" style={{ fontSize: '16px' }} role="menuitem">ዜና</a></li>
            <li><a href="results.html" className="  " data-link-index="2" style={{ fontSize: '16px' }} role="menuitem">ዋልያዎቹ</a></li>
            <li><a href="tables.html" className="  " data-link-index="3" style={{ fontSize: '16px' }} role="menuitem">ፕሪምየር ሊግ</a></li>

          </ul>
        </nav>
      </div>


    </header>
  )
}

export default NavBar
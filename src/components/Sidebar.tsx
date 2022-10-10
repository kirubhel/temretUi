import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from 'inspector'
function Sidebar() {

    const [table, setTable] = useState([])



    useEffect(() => {





        axios.get("https://livescore-api.com/api-client/leagues/table.json?competition_id=273&key=H6gTjmgs1HS0IlPV&secret=olYJjzcywlJKvcOdj56Crm5s3XtMjjIH")
            .then((res) => {
                console.log("table", res)

                setTable(res.data)
            })
    }, [])





    const club = [1, 2, 3.4, 5, 6, 7, 8]
    const club2 = [1, 2, 3.4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    return (
        <nav className="fixedSidebar">
            <h1 className="visuallyHidden" style={{ fontSize: '18px' }}>ፕሪሚየር ሊግ</h1>
            <div className="fixturesAbridgedHeader ">
                <header>
                    <div className="week" style={{ color: '#110112', fontSize: '16px' }}>የጨዋታ ሳምንት 1</div>
                    <div className="competition"><span className="competitionLabel1" style={{ fontSize: '16px' }}>ፕሪሚየር ሊግ</span></div>
                    <div className="headerLocalTimeContainer" style={{ fontSize: '14px' }}>        የሚታዩት ሁሉም ጊዜያት   <span className="localTimeMessage--bold">የአካባቢ ሰዓት</span>
                    </div>
                </header>
            </div>
            <div data-widget="gameweek-matches" data-gameweek="7839"></div>








            <div className="embeddableMatchSummary clubSidebarWidget fixturesAbridgedContainer calendar" data-fixturesids="74991,74992,74993,74994,74997,74999,75000,74998,74995,74996" data-script="pl_club" data-widget="club-matches" data-pagesize="10">
                <a className="ecal-sync-widget-button generateFixturesCalendar icon-button generateFixturesCalendar--sidebar" id="ecal-sync-widget-button" data-ecal-category="Fixture/{{ECAL_USER_COUNTRYCODE}}/Premier League,PL2 - Division 1,PL2 - Division 2,U18 Premier League - North,U18 Premier League - South" data-ecal-widget-id="5f2b97cce344056b0e8b456b" data-ecal-no-styling="">
                    <span className="icon-button__icon icn calendar-b"></span>
                    <span className="icon-button__icon icon-button__icon--hover icn calendar-p"></span>

                    ወደ ቀን መቁጠሪያ ጨዋታዎችን ያክሉ
                </a>
                <div className="fixturesAbridged matchListContainer"></div>

                {club.map((item) =>

                    <a key={item} data-kickoff="1664623800000" href="match/74991.html" className="matchAbridged embeddableMatchContainer" data-matchid="74991">
                        <span className="teamName">
                            <abbr title="Arsenal">
                                ETH
                            </abbr>
                        </span>
                        <span className="badge badge-image-container" data-widget="club-badge-image" data-size="25">
                            <img className="badge-image badge-image--25 js-badge-image" src="/assets/Fasil_Kenema_SC.png" srcSet="/assets/Fasil_Kenema_SC.png, /assets/Fasil_Kenema_SC.png 2x" />
                        </span>
                        <time className="renderKOContainer" data-kickoff="1664623800000">10:00</time>
                        <span className="badge badge-image-container" data-widget="club-badge-image" data-size="25">
                            <img className="badge-image badge-image--25 js-badge-image" src="/assets/Fasil_Kenema_SC.png" srcSet="/assets/Fasil_Kenema_SC.png, /assets/Fasil_Kenema_SC.png 2x" />
                        </span>
                        <span className="teamName">
                            <abbr title="Tottenham Hotspur">
                                ETH
                            </abbr>
                        </span>
                        <span className="icn arrow-right"></span>
                        <div data-id="74991" data-comp="1" className="matchSummaryBroadcastersContainer"></div>
                    </a>

                )}



                <a className="btn widget-button" href="fixtures.html">ሁሉንም ግጥሚያዎች ይመልከቱ<span className="icn arrow-right"></span></a>
                <div id="broadcasterInfoWrapModal" className="plBroadcastModal">
                    <div id="broadcasterInfoContentModal" className="plBroadcastModalContent">
                        <a className="close broadcastModalCloseButton" role="button" >close</a>
                        <div id="broadcastersModal" className="broadcastersModal open">
                            <div className="broadcastersTvInfoHeader"><span className="broadcastersTvInfoHeaderInner"><span className="icn tv-w"></span>TV Info</span></div>
                            <div className="broadcastersModalHeader">Broadcasters</div>
                            <div className="allBroadcastersModalContainer"></div>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{ marginBottom: '20px' }}>

                <img style={{ width: "100%" }} src='/assets/betika2.png' />

            </div>


            <div data-script="pl_tabbed" data-widget="tabbed-content" className="tabbedContent homeStandingsHeader" data-tab-wrap=".tabs" data-tab-param="tables">
                {/* <span className="icn pl-logo-centered-w-sm"></span> */}
                <span style={{ color: 'white', fontSize: '18px', marginLeft: '25%' }}>ደረጃ ሰንጠረዥ</span>

                <div className="tabs"></div>
            </div>



            <div className="" data-ui-tab="First Team">
                <div data-widget="match-week-table" data-script="pl_match-week" data-compseason="489" data-competition="1" data-live="true">
                    <div className="tablesContainer">




                        <div className="table tableSmall homeStandings js-standings-entry-container">
                            <div className="liveLeague toggle-btn js-live-toggle-container is-active u-hide">
                                <div className="live-animation"><span></span></div>
                                <span><span className="liveLeague__live"> Live</span> League Table</span>
                            </div>
                            <summary className="visuallyHidden">This abridged table charts the Premier League teams</summary><table>

                                <thead>
                                    <tr>
                                        <th scope="col"><abbr title="Position">ደረጃ</abbr></th>
                                        <th className="team" scope="col">ክለብ</th>
                                        <th scope="col"><abbr title="Played">ጨ</abbr></th>
                                        <th scope="col"><abbr title="Goal Difference">ግብ ልዩ</abbr></th>
                                        <th scope="col"><abbr title="Points">ነጥብ</abbr></th>
                                    </tr>
                                </thead>

                                <tbody className="standingEntriesContainer isPL">

                                    {club2.map((item) =>

                                        <tr key={item} className="tableDark" data-filtered-table-row="1" data-filtered-table-row-name="Arsenal" data-position="1" data-filtered-table-row-abbr="1">

                                            <td className="pos">
                                                <span className="value">{item}</span>
                                                <span className="movement  none "><span className="visuallyHidden">የቀድሞ አቀማመጥ </span></span>
                                            </td>
                                            <td className="team" scope="row">
                                                <a href="clubs/1/Arsenal/overview.html">
                                                    <span className="badge badge-image-container" data-widget="club-badge-image" data-size="20">
                                                        <img className="badge-image badge-image--20 js-badge-image" src="/assets/Fasil_Kenema_SC.png" srcSet="/assets/Fasil_Kenema_SC.png, /assets/Fasil_Kenema_SC.png 2x" />
                                                    </span>Ethiopia
                                                </a>
                                            </td>
                                            <td>{item}</td>
                                            <td>
                                                +10

                                            </td>
                                            <td className="points">{item}</td>
                                        </tr>
                                    )}




                                </tbody>
                            </table>
                        </div>

                        <a className="btn widget-button" href="tables.html">ሁሉንም ደረጃ ሰንጠረዥ ይመልከቱ<span className="visuallyHidden"> ደረጃ ሰንጠረዥ</span><span className="icn arrow-right"></span></a>
                    </div>
                </div>
            </div>



        </nav>
    )
}

export default Sidebar
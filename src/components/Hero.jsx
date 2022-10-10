import React, { useState,useEffect } from 'react'
import { BsClipboardPlus } from 'react-icons/bs'
import Sidebar from './Sidebar'
import axios from 'axios'
import { urlNews, urlVideos ,assetUrl } from '../endpoints'

function Hero() {

    const [news, setNews]=useState([])
    const [video, setVideo]= useState([])

    const [hnews,setHnews]=useState([])

    
  
      

     // countryId :142
      //competition :273

  



    useEffect(()=>{


        axios.get(`${urlNews}`).then((res)=>{

            console.log(res.data)

            setNews(res.data)
            setHnews(res.data.filter(x=>x.isHeadLine))
            

        })
        axios.get(`${urlVideos}`).then((res)=>{

            console.log(res.data)

            setVideo(res.data)
        })

       

    },[])


    

    const getImage = (item) => {

        const imagePath = `${assetUrl}/${item}`
       

        return imagePath;

    }




    
    
    const Clubs = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <main id="mainContent"  >
            <div className='wrapper hasFixedSidebar'>
                <Sidebar />
                <div className="sidebarPush">
                    <div className="col-12">



                        <svg style={{ width: "0", height: "0", position: "absolute" }} aria-hidden="true" focusable="false">
                            <linearGradient id="gradient--pinkLilac" x2="1" y2="1">
                                <stop offset="0%" stopColor="#e4dfeb"></stop>
                                <stop offset="100%" stopColor="#a18d8d"></stop>
                            </linearGradient>

                            <linearGradient id="gradient--orangePink" x2="1" y2="1">
                                <stop offset="0%" stopColor="#a18d8d"></stop>
                                <stop offset="100%" stopColor="#5f4a1e"></stop>
                            </linearGradient>

                            <linearGradient id="gradient--purpleGreen" x2="1" y2="1">
                                <stop offset="0%" stopColor="#106e07"></stop>
                                <stop offset="100%" stopColor="#a18d8d"></stop>
                            </linearGradient>

                            <linearGradient id="gradient--purpleBlue" x2="1" y2="1">
                                <stop offset="0%" stopColor="#106e07"></stop>
                                <stop offset="100%" stopColor="#a18d8d"></stop>
                            </linearGradient>

                            <linearGradient id="gradient--blueLilac" x2="1" y2="1">
                                <stop offset="0%" stopColor="#a18d8d"></stop>
                                <stop offset="100%" stopColor="#a18d8d"></stop>
                            </linearGradient>

                            <linearGradient id="gradient--greenBlue" x2="1" y2="1">
                                <stop offset="0%" stopColor="#a18d8d"></stop>
                                <stop offset="100%" stopColor="#a18d8d"></stop>
                            </linearGradient>
                        </svg>





                        <section className="hero-playlist theme--pinkLilac " data-widget="hero" data-script="pl_hero">
                            <svg className="hero-playlist__bg-shape" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1432 524" >

                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="1348.4205" y1="329.9624" x2="495.7404" y2="481.3125" gradientTransform="matrix(1 0 0 -1 0 524)">
                                    <stop offset="0" style={{ stopColor: '#5f4a1e' }}></stop>
                                    <stop offset="1" style={{ stopColor: '#e0d55d' }}></stop>
                                </linearGradient>
                                <path className="st0__hero" d="M1432,0v139.9c-216.6,90.1-456.5,139.8-705.3,139.8c-35.3,0-42.6,1.1-77.4-0.9l107.6-108.2 c-195.9,0-406.8-27.2-583.9-84.3l75.3-75.7C235.3,7.3,222.3,3.7,209.4,0h665.7l-58.8,59.1c97.9-10.3,199.5-30.7,298.2-59.1H1432z"></path>
                                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="1344.87" y1="0.2301" x2="339.98" y2="178.5901" gradientTransform="matrix(1 0 0 -1 0 524)">
                                    <stop offset="0" style={{ stopColor: '#5f4a1e' }}></stop>
                                    <stop offset="1" style={{ stopColor: '#e0d55d' }}></stop>
                                </linearGradient>
                                <path className="st1__hero" d="M1432,352.2V524H292.3c-7.2-2.2-14.3-4.4-21.4-6.7l75.3-75.7C227.1,410.8,107.7,364.1,0,310V169 c156.8,62.4,340.5,93.9,517.8,100L439,348.3c110.4,23.9,216.9,35.8,334.4,35.8c101.7,0,170.9-3.2,267.4-21.2L914.3,490.1 C1087.4,471.9,1271.8,422.3,1432,352.2z"></path>
                            </svg>




                            <div className="hero-playlist__thumbnail">
                                <figure className="hero-playlist__thumbnail-figure">

                                    <a href="news/2787820.html" className="image hero-playlist__thumbnail-image  ">
                                        <picture className="hof-featured-player__player-image">
                                            
                                            <source media="(min-width: 1101px)" srcSet={getImage(hnews[0]&&hnews[0].img)} />
                                            <img src={getImage(hnews[0]&&hnews[0].img)} alt="Leading contenders for the Golden Boot award" />
                                        </picture>


                                    </a>

                                    <figcaption>
                                        <span className="hero-playlist__thumbnail-tag">Feature</span>
                                        <h4 className="hero-playlist__thumbnail-title"><a href="news/2787820.html">{hnews[0]&&hnews[0].title}</a></h4>
                                        <p>{hnews[0]&&hnews[0].subTitle}</p>


                                        <h5 style={{ fontSize: "16px" }} className="related-title">ተዛማጅ ይዘት</h5>

                                        <div>



                                            <div className="related-item">
                                                <a href="news/1206108.html" className="relatedArticle club text">
                                                    <p style={{ fontSize: "14px" }}>
                                                        ሳከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት ፈረሰኞቹ
                                                    </p>
                                                </a>
                                            </div>



                                            <div className="related-item">
                                                <a href="news/2798649.html" className="relatedArticle club text">
                                                    <p style={{ fontSize: "14px" }}>
                                                        ሳከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት ፈረሰኞቹ ፈረሰኞቹ በተረጋ
                                                    </p>
                                                </a>
                                            </div>



                                            <div className="related-item">
                                                <a href="video/single/2779011.html" className="relatedArticle club video">
                                                    <p style={{ fontSize: "14px" }}>
                                                        ሳከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት ፈረሰኞቹ ፈረሰኞቹ በተረጋ
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="hero-playlist__secondary-thumbnail-wrapper">










                                <div className="hero-playlist__thumbnail hero-playlist__thumbnail--secondary">
                                    <figure className="hero-playlist__thumbnail-figure">

                                        <a href="video/single/2798723.html" className="image hero-playlist__thumbnail-image  ">
                                            <img src="/assets/ss.jpg?width=918&amp;height=620" alt="James Maddison" />

                                            <svg className="hero-playlist__thumbnail-play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 40">
                                                <path d="M0 3.29C0 .743 2.805-.835 5.017.468l28.361 16.71c2.163 1.273 2.163 4.373 0 5.645L5.018 39.533C2.804 40.836 0 39.257 0 36.709V3.291z"></path>
                                            </svg>
                                            <span className="hero-playlist__thumbnail-run-time">
                                                <span className="icn play-w"></span>
                                                <time className="hero-playlist__thumbnail-time" dateTime="PT2M59S">01:25</time>
                                            </span>

                                        </a>

                                        <figcaption>
                                            <div className="hero-playlist__thumbnail-caption-wrapper">
                                            </div>
                                            <h4 className="hero-playlist__thumbnail-title"><a href="video/single/2798723.html">ሳከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት ፈረሰኞቹ ፈረሰኞቹ በተረጋ</a></h4>


                                        </figcaption>
                                    </figure>
                                </div>










                                <div className="hero-playlist__thumbnail hero-playlist__thumbnail--secondary">
                                    <figure className="hero-playlist__thumbnail-figure">

                                        <a href="news/2800691.html" className="image hero-playlist__thumbnail-image  ">
                                            <img src="/assets/ss.jpg?width=860&amp;height=573" alt="Play Safe Editorial lead" />


                                        </a>

                                        <figcaption>
                                            <span className="hero-playlist__thumbnail-tag" style={{ fontSize: '14px' }}>ዜና</span>
                                            <h4 className="hero-playlist__thumbnail-title"><a href="news/2800691.html">ሳከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት ፈረሰኞቹ ፈረሰኞቹ በተረጋ</a></h4>


                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </section>

                        <div className="partnersStrip premiumBox" >

                            <img src='/assets/Medin.jpg' />


                        </div>





                        <section className="latestVideos mainWidget " data-script="pl_editorial-lists" data-widget="video-list">
                            <header>
                                <h3 className="subHeader">የቅርብ ጊዜ ቪዲዮዎች</h3>
                            </header>
                            <div className="grid-5-featured">
                                <div className="col main" data-widget="lazy-load">

                                    <a href="video/single/2800457.html" className="thumbnail videoThumb js-content-load" data-initialised="true" data-ui-modal="#videoPlayer" data-ui-args="{&quot;contentId&quot;: 2800457, &quot;mediaId&quot;:6312742340112 , &quot;mediaTitle&quot;:&quot;FPL experts' ultimate Wildcard squad&quot;, &quot;mediaDescription&quot;:&quot;Ten of the world's top managers combine to select the best line-up for up until the FIFA World Cup&quot;, &quot;mediaDate&quot;:&quot;28/9/2022&quot;, &quot;mediaHotlinkUrl&quot;:&quot;&quot;, &quot;mediaHotlinkText&quot;:&quot;&quot;}">
                                        <figure>
                                            <span className="image thumbCrop-hero-small">
                                                <svg className="videoThumb__play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 40">
                                                    <path d="M0 3.29C0 .743 2.805-.835 5.017.468l28.361 16.71c2.163 1.273 2.163 4.373 0 5.645L5.018 39.533C2.804 40.836 0 39.257 0 36.709V3.291z"></path>
                                                </svg>
                                                <img className="videoThumb__img" src="/assets/ss.jpg?width=600&amp;height=340" data-src-placeholder="/assets/ss.jpg?width=100&amp;height=67" alt="" />
                                                <span className="runTime">
                                                    <span className="icn play-w"></span>
                                                    <time dateTime="PT2M59S">02:21</time>
                                                </span>
                                            </span>
                                            <figcaption>
                                                <span className="title">የክለቦች የውድድር ዘመን ቅድመ ዳሰሳ</span>
                                                <p className="text">ከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት ከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት </p>
                                                <time className="published">28/2/2015</time>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                <div className="col rest" data-widget="lazy-load">

                                    {video.map((item) =>

                                        <a key={item.id} href="video/single/2799364.html" className="thumbnail videoThumb js-content-load" data-initialised="true" data-ui-modal="#videoPlayer" data-ui-args="{&quot;contentId&quot;: 2799364, &quot;mediaId&quot;:6312697943112 , &quot;mediaTitle&quot;:&quot;Best skills of the season so far&quot;, &quot;mediaDescription&quot;:&quot;From cheeky nutmegs to amazing dribbles, enjoy some showboating from the first eight Matchweeks&quot;, &quot;mediaDate&quot;:&quot;28/9/2022&quot;, &quot;mediaHotlinkUrl&quot;:&quot;&quot;, &quot;mediaHotlinkText&quot;:&quot;&quot;}">
                                            <figure>
                                                <span className="image thumbCrop-hero-small">
                                                    <svg className="videoThumb__play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 40">
                                                        <path d="M0 3.29C0 .743 2.805-.835 5.017.468l28.361 16.71c2.163 1.273 2.163 4.373 0 5.645L5.018 39.533C2.804 40.836 0 39.257 0 36.709V3.291z"></path>
                                                    </svg>
                                                    <img className="videoThumb__img" 
                                                        src={getImage(hnews[0]&&hnews[0].img)}/>
                                                   
                                                    <span className="runTime">
                                                        <span className="icn play-w"></span>
                                                        <time dateTime="PT2M59S">01:38</time>
                                                    </span>
                                                </span>
                                                <figcaption>
                                                    <span className="title">{item.title}</span>
                                                    <time className="published">28/9/2022</time>
                                                </figcaption>
                                            </figure>
                                        </a>

                                    )}




                                </div>
                            </div>
                            <a className="btn moreBtn widget-button" href="video.html">ተጨማሪ ቪዲዮዎች<span className="visuallyHidden">: የቅርብ ጊዜ ቪዲዮዎች</span><span className="icn arrow-right"></span></a>
                        </section>



                        <div className="partnersStrip premiumBox" style={{ marginTop: '20px' }}>

                            <img src='/assets/bear.jpg' />


                        </div>

                        <section className="mainWidget latestFeatures ">

                            <header>
                                <h3 className="subHeader">አዳዲስ ዜናዎች</h3>
                            </header>



                            <ul className="block-list-3" data-widget="lazy-load">

                                {news.map((item) =>
                                    <li key={item.id} className="article-thumb js-content-load" data-initialised="true">


                                        <a href="news/2798649.html" className="thumbnail">
                                            <figure>
                                                <span className="image thumbCrop-latestnews">

                                                    <img className="article-thumb__img" src={getImage(item.img)} alt="CHEWHU Antonio goal cropped" />

                                                </span>
                                                <figcaption>


                                                    <span className="tag">ስታትስቲክስ</span>
                                                    <span className="title">{item.title}</span>
                                                </figcaption>
                                            </figure>
                                        </a>
                                        <div className="relatedArticles">

                                            <a href="news/2802637.html" className="relatedArticle club text">
                                                <p>
                                                    {item.subTitle}
                                                </p>
                                            </a>

                                            <a href="video/single/2754675.html" className="relatedArticle club video">
                                                <p>
                                               
                                                </p>
                                            </a>
                                        </div>
                                    </li>
                                )}

                            </ul>



                            <a className="btn moreBtn widget-button" href="news.html">ተጨማሪ ዜናዎች<span className="visuallyHidden">: ተጨማሪ ዜናዎች </span><span className="icn arrow-right"></span></a>
                        </section>






                        <section className="bespokePromo nikeBallHubPromo mainWidget mainWidget--no-ws" >
                            <div className="wrapper col-12">
                                <div className="bespokePromoImageContainer ballContainer">
                                    <img src="/assets/i/nike-ball-hub/combined_ball_image.png" alt="2022 Nike Ball" className="ball" />
                                </div>
                                <div className="info">
                                    <h3>የኢትዮጵያ ፕሪሚየር ሊግ ደጋፊዎች ማህበር</h3>
                                    <p>ሳከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት ፈረሰኞቹ ፈረሰኞቹ በተረጋጋ ሳከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም የሊጉን ዘውድ የደፉት ፈረሰኞቹ ፈረሰኞቹ በተረጋጋ ሳከሦስት የውድድር ዘመናት በኋላ ዓምና ዳግም </p>
                                    <a href="nike-ball-hub.html" className="btn">ያስሱ<span className="icn arrow-right"></span></a>
                                </div>
                            </div>
                        </section>




                        <section className="mainWidget latestFeatures ">

                            <header>
                                <h3 className="subHeader">የክለብ ማህበር ዜና</h3>
                            </header>



                            <ul className="block-list-4" data-widget="lazy-load">


                                {Clubs.map((item) =>



                                    <li key={item} className="article-thumb placeholder js-content-load" data-initialised="false">


                                        <a href="https://www.arsenal.com/community/stories/football-plus?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" className="thumbnail">
                                            <figure>
                                                <span className="image thumbCrop-latestnews">

                                                    <img className="article-thumb__img" src="/assets/ss.jpg" data-src="/assets/ss.jpg" alt="In focus: Football Plus" />

                                                </span>
                                                <figcaption>


                                                    <span className="tag">የክለብ ማህበር ዜና</span>
                                                    <span className="title">የክለብ ዜና : ክለብ ዜና ክለብ ዜና <span className="icn external-d"><span className="visuallyHidden">ክለብ ዜና ክለብ ዜና</span></span></span>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </li>

                                )}

                            </ul>



                            <a className="btn moreBtn widget-button" href="clubs.html">ተጨማሪ ክለቦች<span className="visuallyHidden">: የክለብ ዜና</span><span className="icn arrow-right"></span></a>
                        </section>

                        <div className="partnersStrip premiumBox">

                            <img src='/assets/betika.png' />


                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero
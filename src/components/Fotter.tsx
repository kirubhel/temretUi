import React from 'react'

function Fotter() {
    return (
        <footer className="mainFooter">


            <div className="footerSponsorStrip">
                <ul>
                    <li className="">
                        <a href="https://www.easports.com/fifa?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank">
                            <span className="large icn sponsor-footer-ea sponsor-footer-ea-n"></span>
                            <span className="small icn sponsor-footer-ea-sm"></span>
                            <span className="type">Lead Partner<span className="visuallyHidden">EA SPORTS</span></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.home.barclays/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank">
                            <span className="large icn sponsor-footer-barclays sponsor-footer-barclays-n"></span>
                            <span className="small icn sponsor-footer-barclays-sm"></span>
                            <span className="type">Official Bank<span className="visuallyHidden">Barclays</span></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.budweiser.com/" target="_blank">
                            <span className="large icn sponsor-footer-budweiser sponsor-footer-budweiser-n"></span>
                            <span className="small icn sponsor-footer-budweiser-sm"></span>
                            <span className="type">Official Beer<span className="visuallyHidden">Budweiser</span></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.castrol.com/en_gb/united-kingdom/home.html" target="_blank">
                            <span className="large icn sponsor-footer-castrol sponsor-footer-castrol-n"></span>
                            <span className="small icn sponsor-footer-castrol-sm"></span>
                            <span className="type">Official Engine Oil Partner<span className="visuallyHidden">Castrol</span></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.hublot.com/?utm_source=premier-league&amp;utm_medium=referral&amp;utm_campaign=premier-league-website" target="_blank">
                            <img src="resources/prod/v6.103.2-4532/i/svg-files/partners/hublot.svg" alt="Hublot" className="footerSponsorStrip__image" />
                            <span className="type">Official Timekeeper<span className="visuallyHidden">Hublot</span></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.nike.com/gb/w/mens-premier-league-accessories-equipment-2spkszawwpwznik1/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank">
                            <span className="large icn sponsor-footer-nike sponsor-footer-nike-n"></span>
                            <span className="small icn sponsor-footer-nike-sm"></span>
                            <span className="type">Official Ball<span className="visuallyHidden">Nike</span></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.oracle.com/premier-league/" target="_blank">
                            <img src="resources/prod/v6.103.2-4532/i/svg-files/partners/oracle.svg" alt="Oracle" className="footerSponsorStrip__image" />
                            <span className="type">Official Cloud Partner<span className="visuallyHidden">Oracle</span></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://sport.averydennison.com/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank">
                            <span className="large icn sponsor-footer-avery sponsor-footer-avery-n"></span>
                            <span className="small icn sponsor-footer-avery-sm"></span>
                            <span className="type">Official Licensee<span className="visuallyHidden">Avery Dennison</span></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://collectibles.panini.co.uk/home.html?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank">
                            <span className="large icn sponsor-footer-panini sponsor-footer-panini-n"></span>
                            <span className="small icn sponsor-footer-panini-sm"></span>
                            <span className="type">Official Licensee<span className="visuallyHidden">Panini</span></span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* <div className="footerContent">
    <div className="wrapper">
        
        
    </div>
</div>
                                         */}
            <div className="footerCorporate" data-script="pl_footer" data-widget="footer-corporate">
                <div className="wrapper col-12">
                    <ul role="menu">
                        <li>
                            <strong className="" style={{ fontSize: '16px' }}>© የኢትዮጵያ ፕሪሚየር ሊግ ደጋፊዎች ማህበር 2015</strong>
                        </li>

                    </ul>

                </div>
            </div>

        </footer>

    )
}

export default Fotter
import "./footer.css"
import { useHistory } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function Footer(){
  let history = useHistory();
  const { t, i18n } = useTranslation();

    return(<div>

{(  (history.location.pathname==="/" ))      && 

(<><div className="foot max-width-3 mx-auto center h3">

<h2>{t("whychoose")}</h2>
        <p className="p">{t("since")}</p>
        <h2>{t("Inter")}</h2>
        <p className="p">
        {t("Afron")}  </p>
        <h2>{t("start")}</h2>
        <p className="p">
         {t("leader")}
          <a href="h">         {t("here")}</a>.</p>
</div>

<div className="section landing-bg-grey testimonial-section p4 center">
        <h2 className="mt0">
  {t("member")}      </h2>
        <div className="flex justify-center">
          <div className="testimonial col-2 center mx3">
            <a href="/fr/general/success">
              <img src="https://cdn.afrointroductions.com/images/testimonials/CD5ACDF3-5056-BD07-33ACAC84FBA24C8E.jpg" className="circle border overflow-hidden" alt="Chat" />
              <h4>   {t("its")}   </h4>
              <p className="grey">Michael</p>
            </a>
          </div>
          <div className="testimonial col-2 center mx3">
            <a href="/fr/general/success">
              <img src="https://cdn.afrointroductions.com/images/testimonials/C5A1B9D1-5056-BD7E-DD586717F9605DEB.jpg" className="circle border overflow-hidden" alt="Chat" />
              <h4>
              {t("we")}  
              </h4>
              <p className="grey">Nans</p>
            </a>
          </div>
          <div className="testimonial col-2 center mx3">
            <a href="/fr/general/success">
              <img src="https://cdn.afrointroductions.com/images/testimonials/A4619FD3-5056-BD58-840A6F647C9978A0.jpg" className="circle border overflow-hidden" alt="Chat" />
              <h4>{t("i")}</h4>
              <p className="grey">Amidal</p>
            </a>
          </div>
          <div className="testimonial col-2 center mx3">
            <a href="/fr/general/success">
              <img src="https://cdn.afrointroductions.com/images/testimonials/E013B279-5056-BD3A-9DBB41063522BEC8.jpg" className="circle border overflow-hidden" alt="Chat"/>
              <h4>
              {t("glad")}
              </h4>
              <p className="grey">Anthony</p>
            </a>
          </div>
        </div>
        <div className="m3">
          <a className="header-color inline-block" href="/fr/general/success">
            <h3 className="btnbg btncolor block py1 px2 butto relativ overflowhidden rounde shado">
            {t("read")}

            </h3>
          </a>
        </div>
      </div>

      <div className="container-fluid d-flex flex-sm-row flex-column mt-5 fo">
          <div className="col-sm-4 col-12 p-4 d-flex flex-column align-items-center">
              <div className="position-relative d-flex justify-content-center align-items-center">
                  <a href="/profile" title target>
                      <div className="avatar  d-block" style={{borderColor: 'white', backgroundImage: 'url("data:image/png'}} />
                      <div className /></a></div><div style={{height: '10px'}} /><i className="fas fa-user-lock  fa-5x "></i><h2 className="eliteSmallTitle mt-4">{t("safe")}</h2><div style={{height: '6px'}} /><div className="highlightParagraphs"><p className="eliteParagraph text-md- " style={{textAlign: 'justify', cursor: 'text', display: 'block'}}>
{t("our")}                     </p></div></div><div className="col-sm-4 col-12 p-4 d-flex flex-column align-items-center"><div className="position-relative d-flex justify-content-center align-items-center">
                          <a href="/profile" title target><div className="avatar  d-block" style={{borderColor: 'white', backgroundImage: 'url("https://eliteberbere.fr/static/media/chronometres.b65b9f8e.png")'}} /><div className /></a></div><div style={{height: '10px'}} />
                          <i className="fas fa-stopwatch fa-5x"></i><h2 className="eliteSmallTitle mt-4">{t("quick")}  </h2><div style={{height: '6px'}} /><div className="highlightParagraph"><p className="eliteParagraph text-md- " style={{textAlign: 'justify', cursor: 'text', display: 'block'}}>
                          {t("effe")}  
 {t("loveme")}                          </p></div></div><div className="col-sm-4 col-12 p-4 d-flex flex-column align-items-center"><div className="position-relative d-flex justify-content-center align-items-center"><a href="/profile" title target><div className="avatar  d-block" style={{borderColor: 'white', backgroundImage: 'url("data:image/png'}} /><div className /></a></div><div style={{height: '10px'}} /><i className="fas fa-users fa-5x"></i><h2 className="eliteSmallTitle mt-4">EXCLUSIVE EVENTS</h2><div style={{height: '6px'}} /><div className="highlightParagraph"><p className="eliteParagraph text-md- " style={{textAlign: 'justify', cursor: 'text', display: 'block'}}>
 
</p></div></div></div>

<div className="footer">
    
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="first">
             <h4> </h4>
                <p> {t("terme")} </p>
                <p>   {t("privacy")} </p>
                <p>  {t("cookie")} </p>
                <p>   {t("rules")} </p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="second">
                <h4> Navigate  {t("loveme")} </h4>
                <ul>

                  <li><a href="/">  {t("home")} </a></li>
                  <li><a href="/">  {t("dating")} </a></li>
                  <li><a href="/">  {t("map")} </a></li>
                  <li><a href="/">Contact   </a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="third">
                <h4> Contact    </h4>
                <ul>
                  <li>Khaled Bouazizi   </li>
                  <li />
                  <li><i className="far fa-envelope" /> contact@Loveme.tn   </li>
                  <li><i className="far fa-envelope" />khaledbouazizi666@gmail.com  </li>
                  <li><i className="fas fa-map-marker-alt" /> Tunis   </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="line" />
              <div className="second2">
                <a href="https://codepen.io/" > <i className="fab fa-codepen fa-2x margin" /></a>
                <a href="https://github.com/" > <i className="fab fa-github fa-2x margin" /></a>
                <a href="https://www.linkedin.com/in//" > <i className="fab fa-linkedin fa-2x margin" /></a>
                <a href="https://www.youtube.com/channel/" ><i className="fab fa-youtube fa-2x margin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="copy">
      <span className="copyrightElite">Copyright© - 2021<br/> {t("droit")}  </span>
      </div></>)}</div> 
    )
}
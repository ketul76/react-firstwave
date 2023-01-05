import './legal.css';

function Legal({legalData}){
    return(
        <>
            {/* <!-- legal terms home section start --> */}
        <section className="legel-home">
            <div className="legal-sections">
                <div className="legal-texts">
                    <h1>{legalData.title}</h1>
                    <h4>{legalData.legalText1} <br/> {legalData.legalText2}</h4>
                    <p>{legalData.paragraph1} <br/> {legalData.paragraph2}  <br/> {legalData.paragraph3} <br/> {legalData.paragraph4}</p>
                    <div className="demo-btn">
                        <button>{legalData.downloadBtn}</button>
                    </div>
                </div>
                <div className="legal-home-img">
                    <img src="./legal-terms-imgs/legalHome.svg" alt="" />
                </div>
            </div>
        </section>
    {/* <!-- legal terms home section End --> */}

    {/* <!-- legal Processing section Start --> */}
        <section className="legal-process">
            <div className="legal-process-list">
                {legalData.legalterms1.map((item) => (
                    <div className={item.class}>
                    <img src={item.imgLink} alt=""/>
                    <div className="process-texts">
                        <h3>{item.title}</h3>
                        <h5>{item.text1} <br/> {item.text2}</h5>
                        <p><a href="./">{item.downloadLink}</a></p>
                    </div>
                </div>    
                ))}
            </div>
            <div className="legal-process-list">
            {legalData.legalterms2.map((item) => (
                    <div className={item.class}>
                    <img src={item.imgLink} alt=""/>
                    <div className="process-texts">
                        <h3>{item.title}</h3>
                        <h5>{item.text1} <br/> {item.text2}</h5>
                        <p><a href="./">{item.downloadLink}</a></p>
                    </div>
                </div>    
                ))}
            </div>
        </section>
    {/* <!-- legal Processing section End --> */}
        </>
    )
}


export default Legal;
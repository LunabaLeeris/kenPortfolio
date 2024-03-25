import Highlight from "./Highlight";
import Articles from "./Articles";

function Home(){
    return (
        <>
        <div className="row bg-black px-md-5 px-3 px-lg-5 pb-5 align-items-center" style={{paddingTop: "100px"}}>
            <div className="col-md-5 col-lg-5 col-xxl-5 d-flex justify-content-center">
                <img src={"./kenProfile.png"} className="img-fluid" style={{width: "95%"}}alt="..."></img>
            </div>
            <div className="container col-md-7 col-lg-7 col-xl-7 col-xxl-5">
                <div className="row text-center text-light mb-4">
                    <h2 className="" style={{fontWeight: "bold"}}>Welcome To My <span className="text-warning">Portfolio</span></h2>
                </div>
                <div className="row mb-4">
                    <p className="px-lg-5 px-4 px-mb-5" style={{color: "#E4DCDC", fontWeight: "lighter", fontSize:"15px"}}>    
                    I am Ken. I am a registered freelancer in the Philippines. 
                    Here are my portfolio works, articles and stories published in print and 
                    digital media. I have covered different niches or areas in writing and 
                    journalism.
                    <br></br>
                    <br></br>
                    I love to interview people around the world, fact check, request data, 
                    multimedia journalism, social media management & analytics and Search Engine 
                    Optimization (SEO). Please scroll  down, and let us work together!</p>
                </div>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <img src="./icons/mail.svg"  style={{height:"60%"}}alt="..."></img>
                        <img src="./icons/facebook.svg" className="mx-3" style={{height:"60%"}} alt="..."></img>
                        <img src="./icons/linkedIn.svg" style={{height:"60%"}} alt="..."></img>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-outline-warning rounded-0">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row d-flex justify-content-center" style={{marginBottom: "100px"}}>
            <Highlight  header_text={<>
                            Journalistic writing, copy writing, technical writing and others</>}

                       description_text={<>
                            I have years of experience in journalism, covering daily breaking news and 
                            interviewing people around the world. I am trained in multimedia storytelling and 
                            data journalism, requesting data from key agencies. I am adept at the latest AP Style 
                            Manual in journalism .
                            <br></br><br></br>
                            I am currently completing my Master in Journalism. I am skilled int researching 
                            and writing long-form research using MLA, APA and Chicago Styles. You can expect
                            that all content is well-researched from credible sources.</>}
                            
                        width={"70%"} pX={"100px"} reversed={false}/>

            <Highlight  header_text={<>
                            Editorial job, copy editing, editor</>}

                       description_text={<>
                             Proficient in AP Stye and research citation styles.
                            <br></br><br></br>
                            I am trained in fact-checking and plagiarism checkers and  tools.
                            <br></br><br></br>
                            The Internet has become a competitive arena. I can ensure the best keywords are used and content is
                             SEO-driven using the latest online tools. Knowledgeable about CMS.
                            <br></br><br></br>
                            I have years of experience editing in print media before publishing. I can layout newsletters, 
                            newspapers and magazines using Adobe In-design. I use Flourish in data storytelling and design
                            </>}
                                                        
                        width={"70%"} pX={"100px"} reversed={true}/>   

            <Highlight  header_text={<> Social media Management</>}

                       description_text={<>
                             One of my main addictions is social media management. I have managed newsroom social media. 
                             I employ the latest social media management like Hoosuite for social media posts.
                            <br></br><br></br>
                            I am trained in Google and social media Analytics, strategizing, marketing and campaign.</>}
                            
                        width={"70%"} pX={"100px"} reversed={false}/>
        </div>
        <div className="row border-top mx-5 mb-5" style={{height: "1px"}}>
        </div>
        <div className="row text-center">
            <h1 className="fs-lg-3 fs-3" style={{fontWeight: "bold"}}>RECENT ARTICLES</h1>
        </div>
        <Articles genre="all" step={8} publisher="Nature World News"/>
        </>
    );
};

export default Home;
import { useEffect, useRef, useState} from "react";
import "./index.css";
const small = 600;

function Article({image, publisher, date, headline, summary}){
    const articleText = useRef();
    const articleDetails = useRef();
    const container = useRef();
    const [isHovered, setIsHovered] = useState(false);

    const [size, setSize] = useState("medium");

    const handleResize = () => {
        if (window.innerWidth  < small) {
            setSize(prevSize => (prevSize !== "small" ? "small" : prevSize));
        } else {
            setSize(prevSize => (prevSize !== "medium" ? "medium" : prevSize));
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        const onViewObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = "1";
                onViewObserver.unobserve(container.current);
              }
            });
        }, 
        {
          threshold: 0.5,
          rootMargin: '0px 0px 100px 0px'
        });

        if (container.current){
            onViewObserver.observe(container.current);
        }

        return () => {
            if (container.current)
                onViewObserver.unobserve(container.current);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 col-xxl-2 p-1" style={{opacity:"0%"}} ref={container}>
        <div className="overflow-hidden p-1 bg-white" style={{height: "450px"}}>
            <a href="https://www.natureworldnews.com/articles/58350/20230911/weather-forecast-rain-thunderstorms-unload-northeast-week.htm" target="_blank" rel="noopener noreferrer">
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                className="h-100 position-relative overflow-hidden article">
                <div className="article-details z-1 col position-absolute w-100 left-0 bottom-0 px-4 pt-4" style={{height: size === "small" ? "40%" : "60%"}}>
                    <div style={{height: "95%", overflow: "hidden", whiteSpace: "no-wrap", textOverflow: "ellipsis"}} ref={articleDetails}>
                        <div ref={articleText}
                             style={{transform: isHovered ? `translateY(-${articleText.current.scrollHeight - articleDetails.current.clientHeight + 10}px)` : "translateY(0)",
                                    transition: isHovered? `${articleText.current.scrollHeight * 0.02}s linear` : `1s ease`}}>

                        <h1 className="text-light" style={{fontSize: size === "small" ? "15px" : "19px"}}>{headline}</h1>
                        <p style={{fontWeight: "lighter", color: "#E4DCDC", fontSize: "10px"}}>
                        {publisher + " | " + date}
                        </p>
                        <p style={{fontWeight: "lighter", color: "#E4DCDC",fontSize: size === "small" ? "10px" : "12px"}}>
                            {summary}
                        </p>
                        </div>
                    </div>
                </div>
                <div className="w-100 position-relative"style={{height: size === "small" ? "60%" : "40%"}}>
                    <img src={image} className="article-image"></img>
                </div>
                <img src={image} className=" h-100 w-100 z-0"></img>
            </div>
            </a>
        </div>
        </div>
    );
}

export default Article;
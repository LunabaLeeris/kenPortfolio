import { useEffect, useRef } from "react";
import "./index.css";

function BackToTop(){
    const button = useRef();
    const progress = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const pos = document.documentElement.scrollTop;
            const percent = Math.round(pos * 100 / height);

            progress.current.style.height = `${percent}%`;
            button.current.style.display = percent > 0 ? "flex" : "none";
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="back-to-top m-5" ref={button}>
          <div className='progress' ref={progress}></div>
          <img className="img-fluid z-1" src="./icons/top.svg" alt="..."></img>
        </div>
    );
}

export default BackToTop;
import { useRef, useEffect, useState} from "react";
const small = 700;

function Highlight({pX, reversed, header_text, description_text}){
    const container = useRef();
    const [size, setSize] = useState("medium");
  
    useEffect(() => {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.contentRect.width < small) {
            setSize(prevSize => (prevSize !== "small" ? "small" : prevSize));
          } else {
            setSize(prevSize => (prevSize !== "medium" ? "medium" : prevSize));
          }
        }
      });

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
          rootMargin: '0px 0px -100px 0px'
        });

        if (container.current){
          onViewObserver.observe(container.current);
          resizeObserver.observe(container.current);
        }
    
        return () => {
          if (container.current) {
            resizeObserver.unobserve(container.current);
            onViewObserver.unobserve(container.current);
          }
        };
      }, []);
    
    const header = (
        <div className={size === "small" ? "col-12" : "col-lg-4 col-md-4"}>
            <h3 className={`"text-black" ${size === "small" ? "fs-4 mb-4" : "fs-3 px-3"}`}>
                <b>{header_text}</b>
            </h3>
        </div>
    );

    const description = (
        <div className={`${size === "small" ? "col-12" : "col-lg-8 col-md-8"} ${reversed ? "border-end" : "border-start"}`}>
            <p style={{ fontWeight: "lighter", fontSize:"15px", color:"#454545"}}>{description_text}</p>
        </div>
    );

    return (
        <div className={size === "small" ? "col-10" : "col-9"} style={{paddingTop: pX, opacity:"0%"}} ref={container}>
            <div className="row d-flex justify-content-center align-items-center">
                {reversed && size === 'medium' ? <>{description}{header}</>
                          : <>{header}{description}</>
                }
               
            </div>
        </div>
    );
}

export default Highlight;
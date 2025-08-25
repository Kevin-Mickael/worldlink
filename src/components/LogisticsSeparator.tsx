import React, { useEffect, useRef } from "react";

const LogisticsSeparator: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && containerRef.current) {
        const scrollTop = window.scrollY || window.pageYOffset;
        const elementOffsetTop = containerRef.current.offsetTop;
        const distance = scrollTop - elementOffsetTop;

        const speed = 0.3; // ajuste la vitesse du parallax
        imageRef.current.style.transform = `translateY(${distance * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "300px",
        overflow: "hidden",
      }}
    >
      <div
        ref={imageRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?cs=srgb&dl=pexels-chanaka-906494.jpg&fm=jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform", // pour optimiser les perfs
          transition: "transform 0.05s linear", // plus fluide
        }}
      />
    </div>
  );
};

export default LogisticsSeparator;

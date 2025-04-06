import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images (Replace with actual image URLs)
import img1 from "../assets/ui-ux.avif";
import img2 from "../assets/ui-ux.jpg";
import img3 from "../assets/ui-ux.avif";
import img4 from "../assets/ui-ux.jpg";
import img5 from "../assets/ui-ux.avif";
import img6 from "../assets/ui-ux.jpg";
import img7 from "../assets/ui-ux.avif";
import img8 from "../assets/ui-ux.jpg";
import img9 from "../assets/ui-ux.avif";
import img10 from "../assets/ui-ux.jpg";

const ImgSlider = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const data = [
    {
      name: "UI/UX Design",
      img: img1,
      review: "Crafting seamless and visually appealing user experiences.",
      details: "We specialize in intuitive UI/UX design that enhances user satisfaction. Our designs focus on usability, accessibility, and functionality to ensure smooth digital experiences."
    },
    {
      name: "Web Design",
      img: img2,
      review: "Designing responsive and interactive websites that engage users.",
      details: "We build modern, user-friendly, and responsive websites that perform well across all devices. Our designs are optimized for performance, aesthetics, and conversion."
    },
    {
      name: "Figma Prototyping",
      img: img3,
      review: "Creating interactive and high-fidelity prototypes in Figma.",
      details: "Our team excels in Figma prototyping, transforming wireframes into detailed, clickable mockups that bring your ideas to life before actual development."
    },
    {
      name: "Graphics Design",
      img: img4,
      review: "Designing eye-catching graphics and marketing materials.",
      details: "From social media graphics to print materials, we provide creative designs that enhance brand identity and attract your target audience."
    },
    {
      name: "Mobile UI Design",
      img: img5,
      review: "Building sleek and modern mobile interfaces.",
      details: "We create visually stunning and highly functional mobile UI designs that offer seamless navigation and enhance the user experience on all mobile devices."
    },
    {
      name: "Branding & Identity",
      img: img6,
      review: "Developing strong brand identities with logos and themes.",
      details: "We help businesses establish a unique brand identity through custom logo designs, color schemes, and branding elements that resonate with their audience."
    },
    {
      name: "SEO Optimization",
      img: img7,
      review: "Improving website visibility and search engine ranking.",
      details: "Our SEO strategies include keyword research, on-page optimization, and link-building to improve your site's ranking and attract organic traffic."
    },
    {
      name: "Digital Marketing",
      img: img8,
      review: "Running successful online ad campaigns for brand growth.",
      details: "We create data-driven digital marketing campaigns, including PPC, social media ads, and content marketing, to drive traffic and increase conversions."
    },
    {
      name: "Social Media Marketing",
      img: img9,
      review: "Creating impactful social media strategies for engagement.",
      details: "Our social media marketing services include strategy planning, content creation, and audience engagement to help brands grow online."
    },
    {
      name: "Content Writing",
      img: img10,
      review: "Crafting compelling content that captivates and converts.",
      details: "We offer blog writing, website content, and copywriting services to help businesses communicate effectively and attract their target audience."
    },
  ];

  return (
    <div id="imgslider-container" className="h-screen bg-black flex justify-center items-center">
  <div id="imgslider-wrapper" className="w-3/4">
    <Slider {...settings}>
      {data.map((d, index) => (
        <div
          key={index}
          id={`slider-card-${index}`}
          className="bg-white text-black rounded-xl shadow-md transition-all duration-500 h-[450px] flex flex-col"
        >
          <div
            id={`slider-card-imgbox-${index}`}
            className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center"
          >
            <img
              id={`slider-img-${index}`}
              src={d.img}
              alt="Service"
              className="h-44 w-44 object-cover rounded-full"
            />
          </div>

          <div
            id={`slider-card-textbox-${index}`}
            className=" flex flex-col justify-between items-center gap-4 p-4 flex-grow"
          >
            <p id={`slider-title-${index}`} className="text-xl font-semibold">
              {d.name}
            </p>

            <div
              id={`slider-description-${index}`}
              className={` text-[15px] transition-all duration-500 overflow-hidden ${
                expandedIndex === index ?  "max-h-[999px]" : "max-h-16"
              }`}
            >
              <p className="text-center">
                {expandedIndex === index ? d.details : d.review}
              </p>
            </div>

            <button
              id={`slider-button-${index}`}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl hover:bg-indigo-600 transition-all"
            >
              {expandedIndex === index ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
};

export default ImgSlider;

"use client";
import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";

const testimonials = [
  {
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
    name: "Samantha Webber",
    feedback:
      "Working with this web developer was a game-changer for our project. Their expertise and attention to detail were evident in every aspect of our website. They not only met but exceeded our expectations, delivering a sleek and functional website that perfectly aligned with our brand. Communication was seamless, and they were always ready to go the extra mile. If you're looking for a talented and reliable web developer, look no further!",
    company: "Tech Innovations Co.",
  },
  {
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lJMBKFVyFBkUtma991rNmJtBFTd2c4_ogw&usqp=CAU",
    name: "Alex Turner",
    feedback:
      "I highly recommend this web developer! Their coding skills are top-notch, and they have a keen eye for design. They took our website to the next level, making it both visually appealing and user-friendly. Working with them was a pleasure, and they consistently met deadlines with quality work. A true professional in the field.",
    company: "Digital Solutions Inc.",
  },
  {
    imgurl:
      "https://www.pishrophd.com/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg",
    name: "Jordan Patel",
    feedback:
      "Fantastic web developer! Jordan's ability to translate our ideas into a functional and aesthetically pleasing website was impressive. They were responsive to our feedback and made the entire development process smooth. We are extremely satisfied with the results and would work with Jordan again without hesitation.",
    company: "InnovateTech Ltd.",
  },
  {
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ei5MpqMeBdzn6kCVjz2xJM8VtEaVw2FOqw&usqp=CAU",
    name: "Maya Rodriguez",
    feedback:
      "Maya is an exceptional web developer. From the initial concept to the final product, Maya demonstrated professionalism and technical proficiency. They understood our requirements and implemented solutions that exceeded our expectations. Working with Maya was a collaborative and enjoyable experience.",
    company: "Creative Solutions Agency",
  },
  {
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsvRiP__cXXwcLjoXdApsaqdUSN7uYLW3hQ&usqp=CAU",
    name: "Daniel Foster",
    feedback:
      "Daniel is a reliable and skilled web developer. His attention to detail and problem-solving abilities were evident throughout our project. He communicated effectively, ensuring that our vision was brought to life. If you're in need of a web developer who delivers quality results, Daniel is the one to choose.",
    company: "TechGenius Co.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]';
  //   const brandsQuery = '*[_type == "brands"]';

  //   client.fetch(query).then((data) => {
  //     setTestimonials(data);
  //   });

  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });
  // }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgurl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardContent from "./CardContent";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

function CarouselContent(props) {
  return (
    <>
      <div className=" py-2 bg-white rounded-md bg-opacity-50">
        <h2 className="text-2xl px-4  font-semibold text-left mt-2">
          {props.headerTitle}
        </h2>
        <Carousel
          ssr
          infinite={true}
          itemClass="my-2 mx-2 max-w-xs"
          responsive={responsive}
          transitionDuration={2000}
          autoPlay
          autoPlaySpeed={6000}
          sliderClass=" flex flex-row"
        >
          {props.content.map((content) => {
            return <CardContent key={content.nombre} content={content} />;
          })}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselContent;

import React, { useRef, useEffect, useState } from "react";
import EventCard from "./EventCard";

// Your event data remains the same
const eventsData = [
  {
    year: 2019,
    title: "UGAHacks 5",
    content:
      "A milestone event celebrating five years of hacking, collaboration, and building amazing projects that pushed the limits of creativity and technology.",
    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  },
  {
    year: 2021,
    title: "UGAHacks 6",
    content: (
      <>
        UGAHacks 6 was unlike any other previous one to be held completely
        virtually due to Covid-19. Despite this, there were over{" "}
        <a href="#">40 project submissions</a>.
      </>
    ),
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  },
  {
    year: 2022,
    title: "UGAHacks 7",
    content:
      "Returning to a hybrid format, this event brought the best of both worlds, combining in-person energy with virtual accessibility for all participants.",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  },
  {
    year: 2023,
    title: "UGAHacks 8",
    content:
      "This year focused heavily on the impact of AI and sustainable tech, challenging students to build solutions for a better future.",
    imageUrl:
      "https://images.unsplash.com/photo-1593349480503-685d394b9f3a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  },
  {
    year: 2024,
    title: "UGAHacks 9",
    content:
      "The latest event broke all previous records for participation and project complexity, showcasing the incredible talent within the student community.",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  },
];

const Events: React.FC = () => {
  const extendedEventsData = [...eventsData, ...eventsData];
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [timelineWidth, setTimelineWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  useEffect(() => {
    // Dynamically set timeline width to match cards container
    const updateTimelineWidth = () => {
      if (cardsContainerRef.current) {
        setTimelineWidth(cardsContainerRef.current.scrollWidth);
      }
    };
    updateTimelineWidth();
    window.addEventListener("resize", updateTimelineWidth);
    return () => {
      window.removeEventListener("resize", updateTimelineWidth);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full bg-gray-950 py-20 flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ position: "relative" }}
    >
      {/* Timeline line and animated gradient */}
      <div
        className="absolute left-0 flex items-center z-0"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          width: timelineWidth ? timelineWidth : "100%",
          pointerEvents: "none",
        }}
      >
        {/* Start circle */}
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "radial-gradient(circle, #f87171 70%, #fff0 100%)",
            marginLeft: 24,
            marginRight: -12,
            zIndex: 1,
          }}
        />
        {/* Solid red-400 line */}
        <div
          style={{
            flex: 1,
            height: 12,
            borderRadius: 6,
            background: "#f87171", // Tailwind red-400
            position: "relative",
            zIndex: 0,
          }}
        />
        {/* End circle */}
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "radial-gradient(circle, #f87171 70%, #fff0 100%)",
            marginLeft: -12,
            marginRight: 24,
            zIndex: 1,
          }}
        />
      </div>

      {/* Cards container */}
      <div
        ref={cardsContainerRef}
        className="relative flex w-max items-center pr-24 pl-24 z-10"
      >
        {extendedEventsData.map((item, index) => (
          <div key={index} className="mx-4 relative">
            <EventCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

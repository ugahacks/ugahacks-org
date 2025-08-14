import React, { useRef, useEffect, useState } from "react";
import EventCard from "./EventCard";

const eventsData = [
  {
    year: 2025,
    title: "UGAHacks X",
    content: (
      <>
        UGAHacks X rocked the Zell B. Miller Learning Center for an electrifying
        48-hour hackathon celebrating its milestone 10th anniversary. With the
        theme of Rock n' Roll, hackers were encouraged to think outside of the
        box and embrace the spirit of innovation in unconventional ways. Backed
        by 12 sponsors and bringing together 500+ passionate participants, the
        event amplified creativity and technical excellence, resulting in{" "}
        <a
          className="timeline-links"
          href="https://ugahacks-x.devpost.com/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          150 project submissions
        </a>
        . Hackers participated in various side events, workshops, and guest
        speaker sessions designed to help them develop their skills and expand
        their horizons. UGAHacks X embodied the transformative spirit of Rock n'
        Roll, inspiring participants to break boundaries and create pioneering
        solutions.
      </>
    ),
    imageUrl: "/timeline-photos/hacksxbanner.png",
    link: "https://x.ugahacks.com/",
  },
  {
    year: 2024,
    title: "UGAHacks 9",
    content: (
      <>
        UGAHacks 9 returned for an exciting 48-hour hackathon with the theme of
        superheroes at the wonderful Zell B. Miller Learning Center. Hackers
        participated in various events and workshops dedicated to help them on
        their academic & professional journeys.
      </>
    ),
    imageUrl: "/timeline-photos/hacks9banner.png",
    link: "https://9.ugahacks.com/",
  },
  {
    year: 2023,
    title: "Makeathon II",
    content: (
      <>
        UGAHacks Makeathon II is our second makeathon event to take place at the
        University of Georgia. Makers dove into a sea of possibilities with us
        during this 24-hour mini hackathon at Driftmier Engineering Center! Our
        makers used 3d printing and recycled materials to create innovative
        solutions and learn about ocean conservation efforts.
      </>
    ),
    imageUrl: "/timeline-photos/make2banner.png",
    link: "https://2.ugamakes.com/",
  },
  {
    year: 2023,
    title: "UGAHacks 8",
    content: (
      <>
        UGAHacks 8 returned to Zell B. Miller Learning Center for an exciting
        48-hour hackathon with the theme of travel. With 8 sponsors and 600+
        attendees, hackers traveled from far and wide to attend the 8th
        iteration of UGAHacks. In addition to all our in-person participants,
        UGAHacks 8 took on a hybrid format and welcomed our virtual attendees
        from afar! Hackers participated in various side events, workshops and
        guest speaker events dedicated to help them on their academic &
        professional journeys. All in all, UGAHacks 8's theme centered around
        adventure, and hackers fearlessly pioneered into the unknown setting a
        new precedent for those to come.
      </>
    ),
    imageUrl: "/timeline-photos/hacks8banner.png",
    link: "https://8.ugahacks.com/",
  },
  {
    year: 2022,
    title: "Makeathon",
    content: (
      <>
        UGAHacks Makeathon is the first makeathon event to take place at the
        University of Georgia through UGAHacks. As opposed to the usual 36-hour
        programming sleepover, UGAHacks wanted to take things a step further and
        challenge themselves to a 24-hour mini hackathon where our 200 attendees
        brainstormed on software solutions, created monumental 3D models, all
        while practicing sustainable habits in tech, with the overarching theme
        of sustainability. Catering toward Engineering students, UGAHacks
        Makeathon took place in Driftmier Engineering Center.
      </>
    ),
    imageUrl: "/timeline-photos/make8banner.png",
    link: "https://make8.ugahacks.com/",
  },
  {
    year: 2022,
    title: "UGAHacks 7",
    content: (
      <>
        UGAHacks 7 adopted our first-ever hybrid event model since our inception
        in 2015, with the in-person portion of the event returning to Zell
        Miller Learning Center at the very heart of UGA's campus. Meanwhile,
        virtual attendees participated in the hackathon through virtual
        workshops, live broadcasts, and side events co-hosted by sponsors and
        the UGAHacks 7 organizing team. The theme this year was vaporwave, which
        saw Byte return in glorious 8-bit resolution to welcome yet another
        class of extraordinary hackers. Despite facing unprecedented obstacles,
        UGAHacks 7 was a hackathon reimagined one pixel at a time and was the
        organization's largest to date with 800 attendees and 14 sponsors.
      </>
    ),
    imageUrl: "/timeline-photos/hacks7banner.png",
    link: "https://7.ugahacks.com/",
  },
  {
    year: 2021,
    title: "UGAHacks 6",
    content: (
      <>
        UGAHacks 6 was unlike any other previous UGAHacks since it was the first
        one to be held completely virtually due to Covid-19. Despite this, a
        total of 411 participants, 150 sponsors representatives, 10 mentors
        attended, and there were over{" "}
        <a
          className="timeline-links"
          href="https://ugahacks-6.devpost.com/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          40 project submissions
        </a>
        . The sixth UGAHacks event also saw the use of workshop live streams and
        'fireside' broadcasts from the UGAHacks organizers throughout the event.
        Overall, UGAHacks 6 was themed around 'building the future' and there
        was definitely no shortage of innovative ideas built around hardware and
        the world's ever-changing landscape.
      </>
    ),
    imageUrl: "/timeline-photos/hacks6banner.png",
    link: "https://6.ugahacks.com/",
  },
  {
    year: 2020,
    title: "UGAHacks 5",
    content: (
      <>
        UGAHacks 5 was hosted at the Zell Miller Learning Center, which would
        become the new home for UGAHacks. The 5th rendition of UGAHacks was the
        largest we have seen to date with 500 participants, 14 sponsors, 15
        mentors, and a record{" "}
        <a
          className="timeline-links"
          href="https://ugahacks5.devpost.com/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          70 project submissions
        </a>
        . UGAHacks 5 was themed around bringing 'otherworldly' ideas to life
        with our mascot, Byte, heading to explore space, but from the event
        perspective UGAHacks 5 could be considered the 'Launch Pad' that became
        the new standard for all future UGAHacks events.
      </>
    ),
    imageUrl: "/timeline-photos/hacks5banner.jpg",
    link: "https://5.ugahacks.com/",
  },
  {
    year: 2019,
    title: "UGAHacks 4",
    content: (
      <>
        UGAHacks 4 returned to its original home at the Lamar Dodd School of Art
        which allowed it to have a greater presence within the University that
        year. This event saw a total of 450 participants, 11 sponsors, 15
        mentors, and over{" "}
        <a
          className="timeline-links"
          href="https://ugahacks4.devpost.com/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          50 project submissions
        </a>
        . The fourth UGAHacks event also experienced the greatest diversity of
        hackers from so many different schools across the entire world. UGAHacks
        4 allowed for a new sprouting of ideas and possibilities for all future
        events which were once thought of as unattainable.
      </>
    ),
    imageUrl: "/timeline-photos/hacks4banner.png",
    link: "https://4.ugahacks.com/",
  },
  {
    year: 2018,
    title: "UGAHacks 3",
    content: (
      <>
        UGAHacks 3 was hosted at Thinc Studios once again but this event did not
        fail to exceed expectations as its predecessors once did. There was a
        change in leadership which came with a new organizational structure and
        new way of planning a hackathon. The third rendition of our event
        created a recognizable brand which allowed hackers, sponsors, and
        partners to see a new vision that UGAHacks was about to embark upon, one
        that they had to be a part of. We saw a total of 150 participants, 10
        sponsors/partners, and over{" "}
        <a
          className="timeline-links"
          href="https://ugahacks3.devpost.com/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          26 submissions for projects
        </a>
        . UGAHacks 3 was centered around the possibilities that could come from
        partnering with a team around a table in vein to how UGAHacks 3 and
        future events came to life - with a few students coming around a table
        and communicating new ideas.
      </>
    ),
    imageUrl: "/timeline-photos/hacks3banner.png",
    link: "https://3.ugahacks.com/",
  },
  {
    year: 2016,
    title: "UGAHacks 2",
    content: (
      <>
        UGAHacks 2 moved to a new home in Downtown Athens, Thinc. Studios, which
        helped created a more hacker friendly environment with better work
        spaces, bean bag chairs, and modern presentation rooms for unique
        workshops. In total,{" "}
        <a
          className="timeline-links"
          href="https://ugahacks-ii.devpost.com/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          24 projects were submitted
        </a>
        . The second UGAHacks event saw great growth with more resources to add
        key features to the event such as food, a larger venue, and better
        prizes. This all fueled the desire for more hackers to come and create a
        standard of awesomeness moving forward.
      </>
    ),
    imageUrl: "/timeline-photos/hacks2banner.png",
    link: "https://2.ugahacks.com/",
  },
  {
    year: 2015,
    title: "UGAHacks 1",
    content: (
      <>
        The original UGAHacks event began at the Lamar Dodd School of Art. The
        first event of its kind at UGA was special because two roommates wanted
        to bring an underrepresented community of students within the Computer
        Science and Engineering schools together for a weekend of fun and
        unlimited creativity. The first version of our event had humble
        beginnings with less than 100 participants and
        <a
          className="timeline-links"
          href="https://ugahacks.devpost.com/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          {" "}
          36 submissions for projects
        </a>
        . UGAHacks became the new safe haven for hackers can come together to
        learn, create and share!
      </>
    ),
    imageUrl: "/timeline-photos/hacks1banner.png",
    link: "https://1.ugahacks.com/",
  },
];

const Events: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [timelineWidth, setTimelineWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll animation effect
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
      style={{ position: "relative" }}
    >
      {/* Timeline line */}
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
        className="relative flex w-max items-start pr-24 pl-24 z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {eventsData.map((item, index) => (
          <div key={index} className="mx-4 relative">
            <EventCard {...item} pause={setIsPaused} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

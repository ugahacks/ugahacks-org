"use client";

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#27282f'}}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="mb-12 about-title" style={{marginLeft: '9rem', fontFamily: '"Raleway", sans-serif', fontSize: '3rem', color: 'white', fontWeight: '200', margin: '0.4em 0'}}>
          About Us<span className="cursor" style={{marginLeft: '-0.2rem', marginTop: '-0.4rem', display: 'inline-block', color: '#aaa'}}>|</span>
        </h1>
        <style jsx>{`
          .cursor {
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          @media (max-width: 768px) {
            .about-title {
              text-align: center !important;
              margin-left: 0 !important;
            }
          }
        `}</style>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="prose prose-lg max-w-none space-y-6" style={{fontFamily: '"Raleway", sans-serif', fontSize: '18px', textAlign: 'justify', maxWidth: '600px', color: '#aaa'}}>
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="0">
            UGAHacks is a 501 (c)(3) non-profit organization that hosts an annual 48 hour programming sleepover which takes place in Athens, Georgia at the University of Georgia.
          </p>
          
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="50">
            UGAHacks is an event that prides itself as being like none other where hackers, sponsors, and mentors can come together and not only have an environment to work and create anything their mind can think of but also enjoy their time while they are there.
          </p>
          
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="100">
            UGAHacks has seen tremendous growth since its inception in 2015. We have grown from 200 hackers, 6 sponsors, and less than 10 mentors to 600+ hackers, 15+ sponsors, and 15+ mentors.
          </p>
          
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="150">
            Every year there is a new adventure to explore and new prizes to be won. Each event encompasses different people to meet, workshops to learn from, food to enjoy, and side events to take some time to relax.
          </p>
          
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="200">
            We also have become a recognizable brand with the cutest mascot, Byte, who is seen making an appearance at every event we have since 2019.
          </p>
          
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="250">
            We are always looking for new partners and new people to be apart of our event each year in order to make it even better than the last and give them an opportunity to tap into recruiting up-and-coming computer science talent, so if you are interested, please feel free to reach out to us.
          </p>
          
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
            As an organization, we take great pride in our growth and are excited to see our event reach even greater heights.
          </p>
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              src="https://ugahacks.com/img/laptopbyte.svg" 
              alt="Byte with Laptop" 
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

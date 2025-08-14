import React from "react";

// Props interface remains the same
interface EventCardProps {
  year: number;
  title: string;
  content: React.ReactNode;
  imageUrl: string;
}

// Renamed the component
const EventCard: React.FC<EventCardProps> = ({
  year,
  title,
  content,
  imageUrl,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg shadow-red-500/10 w-96 overflow-hidden">
      <header
        className="bg-red-500 p-0 m-0 flex items-center"
        style={{ clipPath: "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%)" }}
      >
        <div className="bg-red-700 p-4">
          <p className="text-white text-3xl font-bold">{year}</p>
        </div>
        <h3 className="text-white text-2xl font-bold pl-5">{title}</h3>
      </header>
      <div className="p-6">
        <div className="text-gray-300 text-base leading-relaxed [&_a]:text-red-400 [&_a]:font-bold hover:[&_a]:underline">
          {content}
        </div>
      </div>
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
    </div>
  );
};

// Renamed the export
export default EventCard;

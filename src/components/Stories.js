import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, index) => ({
      username: faker.internet.userName(),
      avatar: faker.image.people(500, 500, true),
      id: index,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-black space-x-2 p-4
            bg-white border-gray-20 border rounded-sm h-[118px]"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;

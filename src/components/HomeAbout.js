import React from "react";
import { useSelector } from "react-redux";

function HomeAbout() {
  const HomeCards = useSelector(state => state.users.userData);
  return (
    <div>
      <p>{HomeCards[0].about}</p>
    </div>
  );
}

export default HomeAbout;

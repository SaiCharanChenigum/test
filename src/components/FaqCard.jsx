import React, { useState } from "react";
import up from "../assets/arrows/up.png";
import down from "../assets/arrows/down.png";
export default function FaqCard({ question, answer }) {
  const [showAns, setShowAns] = useState(false);
  return (
    <div
      className="flex-1 my-3  mb-6  cursor-pointer"
      onClick={() => setShowAns(!showAns)}
    >
      <div className="border-2 border-red-700 rounded-[10px] custom-shadow p-6">
        <div className="flex items-center justify-between gap-5">
          <h1 className="text-[28px]">{question}</h1>
          <img className="h-5" src={showAns ? up : down} alt="" />
        </div>
        <div
          className={`my-8 text-2xl  font-light slide-bottom ${
            !showAns ? "hidden" : ""
          }`}
        >
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

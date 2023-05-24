'use client';
import { useState } from "react";
import View from "./components/View";

export default function Home() {
  const [inputValue, setInputValue] = useState('')

  return (
    <View>
      <div className="w-128 h-52 p-6 bg-white rounded-2xl">
        <h1>Welcome to CodeLeap network!</h1>
        <form className="flex flex-col">
          <label htmlFor="name">Please enter your username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex justify-end">
            <button type="submit" className="w-28 h-8 bg-[#7695EC] text-white rounded-lg">ENTER</button>
          </div>
        </form>
        <p>Username: </p>
      </div>
    </View>
  )
};
import "./App.css";
import { useEffect } from "react";

import Navbar from "@/components/navbar/Navbar";
import About from "@/sections/home_sections/About";
import Insights from "@/sections/home_sections/Insights";
import Trends from "@/sections/home_sections/Trends";
import People from "@/sections/home_sections/People";
import CSStories from "@/sections/home_sections/CSStories";
import Dashboard from "@/sections/home_sections/Dashboard";
import Chatbot from "@/sections/home_sections/Chatbot";

function App() {
  // ✅ Always scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-sans text-neutral-900 dark:text-white">

      {/* 🏅 Navbar */}
      <Navbar />

      {/* 📄 Content */}
      <div className="pt-0 px-6 space-y-20 max-w-screen-xl mx-auto">

        {/* About Section */}
        <About />

        {/* Insights Section */}
        <Insights />

        {/* Trends Section */}
        <Trends />

        {/* People Section */}
        <People />

        {/* Computer Science Stories */}
        <CSStories />

        {/* 📊 Dashboard Section */}
        <Dashboard />

        {/* 🤖 Chatbot Section */}
        <Chatbot />

      </div>
    </main>
  );
}

export default App;

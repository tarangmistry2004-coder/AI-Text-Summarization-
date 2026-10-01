import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Background video logic  (kept from original)
  // Note: Ensure the path is correct. Original was '\back_video.mp4' which is odd for web. 
  // Should likely be '/back_video.mp4' if in public folder.
  // I will use the original path string to be safe, but fix the slash if needed.

  const handleModifyText = (text) => {
    setInputText(text);
  };

  const handleClear = () => {
    setInputText("");
    setSummary("");
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  const handleSummarize = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setSummary(""); // Clear previous summary

    try {
      // Original URL: http://localhost:5000/summarize
      const res = await fetch("http://localhost:5000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: inputText })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setSummary(data.summary);
    } catch (error) {
      console.error("Error summarizing:", error);
      setSummary("Error: Could not summarize text. Please check the backend connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='app'>
      {/* Video Background */}
      <video autoPlay muted loop playsInline className='background-video'>
        {/* The original code had back_video.mp4. Assuming it is in public/ */}
        <source src='/back_video.mp4' type='video/mp4'></source>
      </video>

      {/* Dark Overlay */}x
      <div className="overlay"></div>

      <div className="main-container">
        <Header />

        <div className="content-grid">
          {/* Left/Top Panel: Input */}
          <div className="input-section" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <InputArea
              inputText={inputText}
              setInputText={handleModifyText}
              onClear={handleClear}
              onPaste={handlePaste}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="generate-btn"
              onClick={handleSummarize}
              disabled={isLoading || !inputText.trim()}
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  Summarize Text <ArrowRight size={20} />
                </>
              )}
            </motion.button>
          </div>

          {/* Right/Bottom Panel: Output */}
          <div className="output-section">
            <OutputArea
              summary={summary}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

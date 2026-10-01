import React from 'react';
import { X, ClipboardPaste } from 'lucide-react';
import { motion } from 'framer-motion';

const InputArea = ({ inputText, setInputText, onClear, onPaste }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel"
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div className="panel-header">
                <h2>Input Text</h2>
                <div className="panel-actions">
                    <button onClick={onPaste} className="icon-btn" title="Paste from clipboard">
                        <ClipboardPaste size={18} />
                    </button>
                    <button onClick={onClear} className="icon-btn" title="Clear text">
                        <X size={18} />
                    </button>
                </div>
            </div>
            <textarea
                className="glass-input"
                placeholder="Paste your text here to summarize..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                spellCheck="false"
            />
            <div className="char-count">
                {inputText.length} characters
            </div>
        </motion.div>
    );
};

export default InputArea;

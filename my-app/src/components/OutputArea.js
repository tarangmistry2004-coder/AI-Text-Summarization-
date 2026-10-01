import React from 'react';
import { Copy, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OutputArea = ({ summary, isLoading }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        if (summary) {
            navigator.clipboard.writeText(summary);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel"
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative' // For loader positioning
            }}
        >
            <div className="panel-header">
                <h2>Summary</h2>
                <div className="panel-actions">
                    {summary && (
                        <button onClick={handleCopy} className="icon-btn" title="Copy to clipboard">
                            {copied ? <Check size={18} color="#4ade80" /> : <Copy size={18} />}
                        </button>
                    )}
                </div>
            </div>

            <div className="output-content">
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="loader-container"
                        >
                            <Loader2 className="spinner" size={48} />
                            <p>Analyzing text...</p>
                        </motion.div>
                    ) : summary ? (
                        <motion.div
                            key="summary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="summary-text"
                        >
                            {summary}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="placeholder-text"
                        >
                            Summary will appear here...
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </motion.div>
    );
};

export default OutputArea;

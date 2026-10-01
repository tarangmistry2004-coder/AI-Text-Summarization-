import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            color: 'white',
            zIndex: 10,
            position: 'relative'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }}>
                <Sparkles size={24} color="#ffd700" />
                <h1 style={{
                    margin: 0,
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(45deg, #FFD700, #FFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Summarizer
                </h1>
            </div>
        </header>
    );
};

export default Header;

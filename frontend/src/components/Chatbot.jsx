import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function Chatbot({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    { id: 1, text: 'مرحباً بك في مديري! كيف يمكنني مساعدتك اليوم؟', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    const maxHeight = 80; // ~3 lines
    ta.style.height = Math.min(ta.scrollHeight, maxHeight) + 'px';
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the chat is open and the user clicks outside the chat window, close it.
      if (isOpen && chatRef.current && !chatRef.current.contains(event.target)) {
        // Also ensure they didn't click on the open button itself.
        // We can check if it's a click on the FAB button by checking its class or adding an id, but since the FAB has 'scale-0' when open, it's not clickable anyway.
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { id: Date.now(), text: input, isBot: false }]);
    setInput('');
    // Reset textarea height
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: 'شكراً لتواصلك معنا! سأقوم بمساعدتك فوراً.', 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button Wrapper */}
      <div className={`fixed bottom-6 left-6 z-40 transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
        {/* The Ripple Rings (Purple) */}
        <div className="absolute inset-0 rounded-full border-[3px] border-purple-500 animate-ping opacity-80"></div>
        <div className="absolute inset-0 rounded-full border-[3px] border-purple-400 animate-ping opacity-50" style={{ animationDelay: '0.7s' }}></div>
        
        {/* The Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg shadow-slate-900/30 hover:bg-black animate-scale-bounce"
          aria-label="Open Chat"
        >
          <MessageSquare className="w-6 h-6 relative z-10" />
        </button>
      </div>

      {/* Chat Window */}
      <div 
        ref={chatRef}
        className={`fixed bottom-6 left-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden transition-all duration-300 z-50 origin-bottom-left ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ height: '500px', maxHeight: '80vh' }}
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm font-sora">المساعد الذكي</h3>
              <p className="text-xs text-slate-300 font-sans">متصل الآن</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50 font-sans">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.isBot 
                  ? 'bg-white text-slate-800 rounded-tr-sm shadow-sm border border-slate-100' 
                  : 'bg-slate-900 text-white rounded-tl-sm self-end shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-end gap-2">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(e);
              }
            }}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:border-slate-900 font-sans resize-none no-scrollbar leading-relaxed"
            style={{ minHeight: '40px', maxHeight: '80px', overflowY: 'auto' }}
          />
          <button
            type="submit"
            className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-black transition-colors mb-0.5"
            disabled={!input.trim()}
          >
            <Send className="w-4 h-4 mr-1" />
          </button>
        </form>
      </div>
    </>
  );
}

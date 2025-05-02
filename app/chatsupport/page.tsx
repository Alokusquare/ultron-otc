'use client';

import Layout from '@/components/layout';
import { useEffect, useRef, useState } from 'react';

export default function ChatSupport() {
  const [comment, setComment] = useState('');
  const [chat, setChat] = useState<
    { id: number; from: string; text?: string; image?: string; time: string }[]
  >([
    {
      id: 1,
      from: 'support',
      text: 'Hi Prime, Let me know you need help and you can ask us any questions.',
      time: '08:20 AM',
    },
    {
      id: 2,
      from: 'user',
      text: 'How to create a Ultron Wallet account?',
      time: '08:21 AM',
    },
    {
      id: 3,
      from: 'support',
      text: 'Open the Ultron Wallet app to get started and follow the steps. Ultron Wallet doesn’t charge a fee to create or maintain your Ultron Wallet account.',
      time: '08:22 AM',
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    const h = now.getHours() % 12 || 12;
    const m = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    return `${h}:${m} ${ampm}`;
  };

  const sendMessage = () => {
    if (comment.trim() === '') return;

    const newMessage = {
      id: chat.length + 1,
      from: 'user',
      text: comment.trim(),
      time: getCurrentTime(),
    };

    setChat([...chat, newMessage]);
    setComment('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  // 🆕 Multiple image upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newMessages = Array.from(files).map((file, index) => ({
      id: chat.length + index + 1,
      from: 'user',
      image: URL.createObjectURL(file),
      time: getCurrentTime(),
    }));

    setChat((prevChat) => [...prevChat, ...newMessages]);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat]);

  return (
    <Layout>
      <div className="text-white max-w-5xl mx-auto deliver_wrapper relative">
        <h1 className="text-2xl font-bold mb-6">Help and Support</h1>

        <div className="rounded-md border relative border-green-600 bg-[#2b2f35] p-6 pb-24" style={{ minHeight: '100%', borderRadius: '30px' }}>
          {chat.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} mb-6`}
            >
              {msg.from === 'support' && (
                <img
                  src="https://toppng.com//public/uploads/preview/donna-picarro-dummy-avatar-115633298255iautrofxa.png"
                  className="w-8 h-8 rounded-full mr-2"
                  alt="Support"
                />
              )}
              <div
                className={`rounded-xl px-4 py-2 max-w-[80%] text-sm ${
                  msg.from === 'user' ? 'bg-[#1a2a3a]' : 'bg-gray-200 text-black'
                }`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="Uploaded"
                    className="rounded-lg mt-1 max-w-full h-auto"
                  />
                )}
                <p className="text-[10px] mt-1 text-right text-gray-500">{msg.time}</p>
              </div>
              {msg.from === 'user' && (
                <img
                  src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg"
                  className="w-8 h-8 rounded-full ml-2"
                  alt="User"
                />
              )}
            </div>
          ))}
          <div ref={chatEndRef} />

          {/* Fixed bottom input */}
          <div className="chat_bottom fixed bottom-0 max-w-5xl mx-auto left-0 right-0 bg-[#2b2f35] p-3 border-t border-gray-700" style={{ borderRadius: '30px' }}>
            <div className="flex items-center gap-2">
              {/* Image upload (multiple) */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />
                <div className="bg-[#0f172a] p-2 rounded-full border border-gray-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.76002 22H17.24C20 22 21.1 20.31 21.23 18.25L21.75 9.99C21.89 7.83 20.17 6 18 6C17.39 6 16.83 5.65 16.55 5.11L15.83 3.66C15.37 2.75 14.17 2 13.15 2H10.86C9.83001 2 8.63001 2.75 8.17001 3.66L7.45001 5.11C7.17001 5.65 6.61002 6 6.00002 6C3.83001 6 2.11001 7.83 2.25001 9.99L2.77001 18.25C2.89001 20.31 4.00002 22 6.76002 22Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5 8H13.5" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
              </label>

              {/* Text input */}
              <input value={comment} onChange={(e) => setComment(e.target.value)} onKeyDown={handleKeyPress} className="flex-1 bg-[#0f172a] text-white rounded-full px-4 py-2 outline-none border border-gray-600" placeholder="Write a comment" />
              {/* Send button */}
              <button onClick={sendMessage} className="bg-[#0f172a] rounded-full p-2 border border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

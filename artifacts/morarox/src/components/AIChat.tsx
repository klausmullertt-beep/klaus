import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import logoImg from '@assets/IMG_0549_1784248813685.jpeg';

const SYSTEM_PROMPT = `Ты — Morarox AI, умный ассистент компании Morarox Prog. Отвечай ТОЛЬКО на русском языке, вежливо и кратко.

О компании Morarox Prog:
- Мы разрабатываем сайты, Telegram-боты, VK-боты и мини-игры
- Работаем с 2018 года, более 6 лет опыта
- Более 1500 довольных клиентов
- Поддержка 24/7
- Контакт: @moraroxprog_bot в Telegram, moraroxprog@gmail.com, +371 25 391 503

Услуги и цены (примерные):
- Лендинг / сайт-визитка: от 2000 руб.
- Корпоративный сайт: от 5000 руб.
- Telegram-бот: от 1500 руб.
- VK-бот: от 1500 руб.
- Мини-игра: от 3000 руб.

Доп. товары:
- Подключение бота/сайта на VDS: 200 руб.
- VDS на месяц: 300 руб.
- VDS на 3 месяца: 800 руб.
- Новая система к проекту: от 400 руб.
- Лёгкое изменение: 150 руб.
- Дизайн: от 500 руб.
- Настройка хостинга/домена: 350 руб.

Как заказать: написать в Telegram @moraroxprog_bot

Если тебя спросят кто ты — отвечай: "Я Morarox AI, созданная компанией Morarox Prog. Готова помочь с любыми вопросами о наших услугах!"

Отвечай только по теме компании и её услуг. На не относящиеся вопросы вежливо объясни что можешь помочь только с вопросами о Morarox Prog.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Привет! Я Morarox AI 👋 Задайте любой вопрос о наших услугах — расскажу о ценах, сроках и том, как сделать заказ.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!apiKey) throw new Error('API key not configured');

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages.map(m => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 400,
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content ?? 'Извините, произошла ошибка. Попробуйте написать нам напрямую: @moraroxprog_bot';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Произошла ошибка. Напишите нам напрямую в Telegram: @moraroxprog_bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Открыть чат"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] h-[480px] bg-black border border-white/15 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <img src={logoImg} alt="AI" className="w-8 h-8 rounded-full object-cover" />
              <div>
                <div className="text-white text-sm font-bold">Morarox AI</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-gray-500 text-xs">онлайн</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {msg.role === 'assistant' && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden mt-0.5">
                      <img src={logoImg} alt="AI" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`max-w-[240px] px-3 py-2 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-white text-black'
                      : 'bg-white/[0.07] text-gray-200 border border-white/10'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden mt-0.5">
                    <img src={logoImg} alt="AI" className="w-full h-full object-cover" />
                  </div>
                  <div className="px-3 py-2 bg-white/[0.07] border border-white/10">
                    <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Задайте вопрос..."
                className="flex-1 bg-white/[0.05] border border-white/10 text-white text-xs px-3 py-2 placeholder-gray-600 outline-none focus:border-white/30 transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-8 h-8 flex items-center justify-center bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

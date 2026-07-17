import React from 'react';
import { ArrowLeft } from 'lucide-react';
import logoImg from '@assets/IMG_0549_1784248813685.jpeg';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 py-4 sticky top-0 bg-black/90 backdrop-blur-md z-10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Morarox Prog" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-bold text-sm">MORAROX PROG</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Назад
          </a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-black tracking-tighter mb-2">Политика конфиденциальности</h1>
        <p className="text-gray-500 text-sm mb-12">Последнее обновление: июль 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных 
              данных пользователей, которые используют сайт и сервисы компании Morarox Prog 
              (далее — «Компания»).
            </p>
            <p className="mt-3">
              Используя наш сайт и сервисы, вы соглашаетесь с условиями настоящей Политики 
              конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. Собираемые данные</h2>
            <p>В процессе использования наших сервисов мы можем собирать следующие данные:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Имя и фамилия (при заполнении форм)</li>
              <li>Адрес электронной почты</li>
              <li>Номер телефона</li>
              <li>Имя пользователя Telegram или ВКонтакте</li>
              <li>Техническая информация (IP-адрес, тип браузера, устройство)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Цели обработки данных</h2>
            <p>Ваши данные используются исключительно для:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Связи с вами по вашему запросу</li>
              <li>Выполнения заказов и договорных обязательств</li>
              <li>Технической поддержки</li>
              <li>Улучшения качества наших услуг</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. Передача данных третьим лицам</h2>
            <p>
              Компания не продаёт, не обменивает и не передаёт ваши персональные данные третьим 
              лицам без вашего согласия, за исключением случаев, предусмотренных действующим 
              законодательством.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Cookies</h2>
            <p>
              Наш сайт использует cookies для улучшения пользовательского опыта. Вы можете 
              отключить cookies в настройках браузера, однако это может повлиять на 
              функциональность сайта.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. Защита данных</h2>
            <p>
              Мы принимаем необходимые технические и организационные меры для защиты ваших 
              персональных данных от несанкционированного доступа, изменения, раскрытия 
              или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. Ваши права</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Запросить информацию о хранящихся данных</li>
              <li>Потребовать исправления или удаления данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">8. Контакты</h2>
            <p>По вопросам конфиденциальности обращайтесь:</p>
            <ul className="mt-3 space-y-1 text-gray-400">
              <li>Email: <a href="mailto:moraroxprog@gmail.com" className="text-white hover:underline">moraroxprog@gmail.com</a></li>
              <li>Telegram: <a href="https://t.me/moraroxprog_bot" className="text-white hover:underline">@moraroxprog_bot</a></li>
              <li>Телефон: <a href="tel:+37125391503" className="text-white hover:underline">+371 25 391 503</a></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

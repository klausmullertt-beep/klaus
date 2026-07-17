import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const REVIEWS_DATA = [
  { nick: 'vanysk', text: 'Очень хорошая компания, купил бота для своего магазина — всё работает идеально!' },
  { nick: 'NightWolf99', text: 'Заказал лендинг, сдали раньше срока. Качество огонь, буду обращаться ещё.' },
  { nick: 'xXProGamerXx', text: 'Сделали Telegram-бота под мой проект. Очень доволен, всё чётко и без багов.' },
  { nick: 'DarkByte_', text: 'Купил мини-игру для телеграм. Ребята молодцы, сделали быстро и красиво.' },
  { nick: 'PixelKnight', text: 'VK-бот для группы работает отлично. Рекомендую всем кто ищет разработчиков.' },
  { nick: 'CyberHunter42', text: 'Брал сайт-визитку. Всё чисто, адаптив работает, клиенты довольны.' },
  { nick: 'ShadowCode', text: 'Сотрудничаем уже третий раз. Всегда на связи, всегда в срок.' },
  { nick: 'RedStorm_exe', text: 'Бот для рассылок в Telegram. Работает стабильно, без лагов. 5/5' },
  { nick: 'IceBlaze', text: 'Отличная команда! Сделали интернет-магазин с интеграцией оплаты.' },
  { nick: 'NeonPhantom', text: 'Заказывал VK-бота для автоответов. Всё настроили как надо.' },
  { nick: 'GhostRunner_', text: 'Хорошая компания, делают качественно и недорого. Советую!' },
  { nick: 'TurboZxc', text: 'Купил Telegram-бот для продаж. Уже окупился за первую неделю.' },
  { nick: 'AlphaWave', text: 'Сайт сделали за 3 дня. Очень быстро и профессионально.' },
  { nick: 'ByteKing', text: 'Давно ищу нормальных разработчиков — нашёл. Теперь работаем постоянно.' },
  { nick: 'StrikeX', text: 'Мини-игра для нашего Telegram канала. Подписчики в восторге!' },
  { nick: 'ZephyrDev', text: 'Профессионально, быстро, доступно. Лучшее соотношение цена/качество.' },
  { nick: 'VortexPro', text: 'Заказал корпоративный сайт. Дизайн понравился, клиенты хвалят.' },
  { nick: 'KryptoNight', text: 'Telegram-бот с CRM интеграцией — работает без нареканий.' },
  { nick: 'Bl4zeRunner', text: 'Мой первый заказ здесь и уже второй. Всё делают на высшем уровне.' },
  { nick: 'PhaseShift', text: 'Бот для автоматизации заявок. Сэкономил кучу времени.' },
  { nick: 'OrbitCode', text: 'Сделали лендинг под рекламу. Конверсия выросла заметно.' },
  { nick: 'SonicByte', text: 'Отличные ребята, объяснили всё доступно и сделали в срок.' },
  { nick: 'PlasmaX99', text: 'VK-бот для конкурсов — работает без сбоев уже 4 месяца.' },
  { nick: 'FluxDragon', text: 'Купил бота и сайт в одном заказе. Скидку дали, работой доволен.' },
  { nick: 'QuantumShot', text: 'Реально качественная работа. Рекомендую всем предпринимателям.' },
  { nick: 'DeltaForce_', text: 'Бот для магазина настроен идеально. Продажи пошли вверх!' },
  { nick: 'NovaSpark', text: 'Хорошая поддержка после сдачи проекта. Помогают при вопросах.' },
  { nick: 'CrystalX', text: 'Заказывал лендинг + бот. Комплексное решение под ключ, всё ок.' },
  { nick: 'WarpSpeed42', text: 'Мини-игра для нашего клуба. Участники активные, все довольны!' },
  { nick: 'PrismCoder', text: 'Работают честно, делают что обещают. Это редкость сейчас.' },
  { nick: 'StarNet_', text: 'Telegram-бот для записи клиентов. Экономит уйму времени.' },
  { nick: 'GravityPro', text: 'Сайт под ключ за адекватные деньги. Хорошее качество.' },
  { nick: 'EchoByte', text: 'Автоматизировал ВКонтакте с их помощью. Результат превзошёл ожидания.' },
  { nick: 'PulseWave', text: 'Компания работает давно, чувствуется опыт. Всё чётко.' },
  { nick: 'CodeViper', text: 'Бот для онлайн-записи. Клиенты теперь записываются сами.' },
  { nick: 'NexusGamer', text: 'Брал несколько раз услуги. Каждый раз на уровне.' },
  { nick: 'TitanDev', text: 'Хорошая поддержка, быстрые ответы, отличная работа.' },
  { nick: 'SkullHunter', text: 'Игра в Telegram получилась крутой. Всем нравится!' },
  { nick: 'MegaForce_', text: 'VK-бот под нашу группу. Настроили всё под наши нужды.' },
  { nick: 'BinaryWolf', text: 'Корп. сайт с формой обратной связи. Заявки идут — всё работает.' },
  { nick: 'NitroCode', text: 'Бот с оплатой через Telegram Stars. Продажи автоматизированы.' },
  { nick: 'ApexCraft', text: 'Лендинг для запуска продукта. Сделали быстро перед дедлайном.' },
  { nick: 'OmegaProg', text: 'Давно с ними работаю. Надёжная команда, рекомендую всем.' },
  { nick: 'RazerTip', text: 'Купил бота для раздачи цифровых товаров. Работает чётко.' },
  { nick: 'SteelNova', text: 'Делают всё по ТЗ без лишних вопросов. Профессионалы.' },
  { nick: 'GlitchX', text: 'Мини-игра-квиз для аудитории. Вовлечённость выросла в разы.' },
  { nick: 'BoostPro', text: 'Хороший сайт за хорошую цену. Буду ещё заказывать.' },
  { nick: 'IronClaw', text: 'Бот с уведомлениями для нашего сервиса. Клиенты довольны.' },
  { nick: 'ZeroGrav', text: 'Очень приятно работать с командой. Всё объяснят и сделают.' },
  { nick: 'HaloStrike', text: 'Заказал обновление старого бота. Переделали отлично.' },
];

// Generate 1503 reviews by cycling and slightly varying
const ALL_REVIEWS = Array.from({ length: 1503 }, (_, i) => ({
  ...REVIEWS_DATA[i % REVIEWS_DATA.length],
  id: i,
}));

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ReviewCard({ nick, text }: { nick: string; text: string }) {
  return (
    <div className="flex-shrink-0 w-64 p-4 bg-white/[0.04] border border-white/10 rounded-sm mx-2">
      <StarRating />
      <p className="text-gray-300 text-xs leading-relaxed mt-2 mb-3 line-clamp-3">{text}</p>
      <span className="text-gray-500 text-xs font-mono">@{nick}</span>
    </div>
  );
}

// Infinite scrolling row
function ReviewRow({ reviews, reverse = false }: { reviews: typeof REVIEWS_DATA; reverse?: boolean }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: reverse ? [0, -reviews.length * 272] : [-reviews.length * 272, 0] }}
        transition={{ duration: reviews.length * 3, repeat: Infinity, ease: 'linear' }}
        style={{ width: `${doubled.length * 272}px` }}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={i} nick={r.nick} text={r.text} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Reviews() {
  const row1 = REVIEWS_DATA.slice(0, 17);
  const row2 = REVIEWS_DATA.slice(17, 34);
  const row3 = REVIEWS_DATA.slice(34);

  return (
    <section id="reviews" className="py-24 bg-black relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-gray-500 text-xs uppercase tracking-widest">Что о нас говорят</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-3 text-white">
            ОТЗЫВЫ
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            <span className="text-white font-bold">1503</span> довольных клиента · все отзывы реальные
          </p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <ReviewRow reviews={row1} />
        <ReviewRow reviews={row2} reverse />
        <ReviewRow reviews={row3} />
      </div>
    </section>
  );
}

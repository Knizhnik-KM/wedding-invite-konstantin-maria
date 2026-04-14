import Image from "next/image";

const timeline = [
  {
    time: "14:30",
    title: "Трансфер",
    description:
      "Для гостей из Самары предусмотрен трансфер от магазина «Русь» на Московском шоссе. Для гостей из Тольятти трансфер заберет всех по персональным адресам.",
    icon: "transfer",
  },
  {
    time: "15:00-15:30",
    title: "Сбор гостей",
    description:
      "Время, чтобы спокойно добраться, занять место и выпить бокал освежающего перед началом церемонии.",
    icon: "spark",
  },
  {
    time: "16:00-16:30",
    title: "Выездная регистрация",
    description:
      "Регистрация с представителями ЗАГСа пройдет под открытым небом. Все гости смогут расположиться на комфортных креслах.",
    icon: "rings",
  },
  {
    time: "16:30-23:00",
    title: "Банкет",
    description:
      "Вас ждет шоу-программа с ведущим, трогательные поздравления и вкусная еда в теплой загородной атмосфере.",
    icon: "glass",
  },
  {
    time: "После 23:00",
    title: "Завершение вечера",
    description:
      "Для всех гостей предусмотрен обратный трансфер, чтобы путь домой был таким же комфортным, как и весь праздник.",
    icon: "moon",
  },
];

const dressCodeColors = [
  { name: "Молочный", value: "#F4EEE4" },
  { name: "Песочный", value: "#D9C6A5" },
  { name: "Шоколадный", value: "#4B2E20" },
  { name: "Хвойный", value: "#243D28" },
];

const details = [
  {
    title: "Трансфер",
    text: "Для гостей из Самары и Тольятти предусмотрен удобный путь до площадки и обратно, чтобы в этот день можно было никуда не спешить.",
  },
  {
    title: "Атмосфера",
    text: "Праздник пройдет за городом, в легкой и теплой летней атмосфере, с регистрацией под открытым небом и длинным вечерним ужином.",
  },
  {
    title: "Контакт",
    text: "Если у вас появятся вопросы по логистике или участию, напишите нам в Telegram. Это будет самым быстрым способом связаться.",
  },
];

const faqItems = [
  {
    question: "Где и когда пройдет свадьба?",
    answer:
      "Выездная регистрация пройдет 5 июля 2026 года в загородном кафе «8 Миля», расположенном между Тольятти и Самарой.",
  },
  {
    question: "Как лучше всего добраться?",
    answer:
      "Для гостей из Самары и Тольятти предусмотрен трансфер. В Самаре гости собираются к 14:30 у ТЦ «Русь» на Московском шоссе. В Тольятти машина заедет персонально.",
  },
  {
    question: "Сколько будет человек?",
    answer:
      "На торжестве будет от 50 до 60 человек.",
  },
  {
    question: "Можно ли забронировать номер в «8 миле» заранее, чтобы не ехать день в день?",
    answer:
      "Лучше уточнить эту информацию напрямую на сайте кафе.",
  },
  {
    question: "Нужно ли дарить цветы?",
    answer:
      "Мы понимаем, что дарить цветы на свадьбу — это добрая традиция, но, к сожалению, мы не сможем насладиться их красотой в полной мере. Будем рады любой другой альтернативе.",
  },
  {
    question: "Что подарить молодоженам?",
    answer:
      "Ваше присутствие в день торжества — самый значимый подарок для нас. Не ломайте голову над подарками: ваши пожелания в конвертах помогут нам осуществить наше долгожданное путешествие в Японию.",
  },
];

const contactLink = "https://t.me/Knizhnik_KM";
const mapsLink =
  "https://yandex.ru/maps/?ll=49.558276%2C53.506958&pt=49.558276%2C53.506958&z=15";
const mapEmbedLink =
  "https://yandex.ru/map-widget/v1/?ll=49.558276%2C53.506958&z=14";

export const metadata = {
  title: "Константин и Мария — 5 июля 2026",
  description: "Свадебное приглашение Константина и Марии",
};

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 14C18 14 18 2 30 2C42 2 42 26 58 26C74 26 74 2 90 2C102 2 102 14 118 14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="60" cy="14" r="3.5" fill="currentColor" />
    </svg>
  );
}

function TimelineIcon({ type }: { type: string }) {
  const common = "h-10 w-10 text-[#8f7764] md:h-12 md:w-12";

  switch (type) {
    case "transfer":
      return (
        <div className={common}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 15h16" />
            <path d="M6 15V9.5C6 8.67 6.67 8 7.5 8h6.7a2 2 0 0 1 1.5.68L18 11v4" />
            <circle cx="8" cy="16.5" r="1.5" />
            <circle cx="17" cy="16.5" r="1.5" />
          </svg>
        </div>
      );
    case "rings":
      return (
        <div className={common}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="13" r="4.5" />
            <circle cx="15" cy="13" r="4.5" />
          </svg>
        </div>
      );
    case "glass":
      return (
        <div className={common}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M7 5h10l-2.1 6.6a3 3 0 0 1-2.86 2.1h-.08a3 3 0 0 1-2.86-2.1L7 5Z" />
            <path d="M12 13.8V19" />
            <path d="M9 19h6" />
          </svg>
        </div>
      );
    case "moon":
      return (
        <div className={common}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M16.5 4.5a7.5 7.5 0 1 0 3 14.4a8.4 8.4 0 1 1-3-14.4Z" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={common}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 4v16" />
            <path d="M4 12h16" />
          </svg>
        </div>
      );
  }
}

export default function WeddingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f0e8] pb-24 text-[#2f221c] md:pb-0">
      <div className="fixed inset-x-0 top-4 z-40 hidden px-6 md:px-10 lg:block lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#e2d5c8] bg-[rgba(251,247,241,0.8)] px-6 py-4 text-[11px] uppercase tracking-[0.28em] text-[#8f7764] shadow-[0_12px_40px_rgba(70,52,43,0.06)] backdrop-blur-md">
          <div className="flex items-center gap-7">
            <a href="#schedule" className="transition hover:text-[#2f221c]">
              Программа
            </a>
            <a href="#location" className="transition hover:text-[#2f221c]">
              Локация
            </a>
            <a href="#dress-code" className="transition hover:text-[#2f221c]">
              Dress code
            </a>
            <a href="#faq" className="transition hover:text-[#2f221c]">
              FAQ
            </a>
            <a href="#contacts" className="transition hover:text-[#2f221c]">
              Контакты
            </a>
          </div>
          <a
            href={contactLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#ccb7a4] px-5 py-3 text-[11px] font-medium tracking-[0.24em] text-[#5e483b] transition hover:bg-[#efe5da]"
          >
            Задать вопрос
          </a>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-[#dccfc2] bg-[linear-gradient(180deg,#f8f3ec_0%,#f6f0e8_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(226,210,190,0.24),_transparent_40%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-[rgba(219,201,181,0.16)] blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -left-12 top-28 h-52 w-52 rounded-full border border-[rgba(177,151,129,0.16)]" />
        <div className="pointer-events-none absolute -right-14 bottom-16 h-44 w-44 rounded-full border border-[rgba(177,151,129,0.14)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-5 sm:px-6 md:px-10 md:pb-24 lg:px-16 lg:pb-28 lg:pt-28">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.88fr)] lg:items-center lg:gap-14">
            <div className="order-2 lg:order-1">
              <p className="mb-3 text-[10px] uppercase tracking-[0.26em] text-[#9a826f] sm:text-xs sm:tracking-[0.3em]">
                Свадебное приглашение
              </p>
              <h1
                className="max-w-4xl text-[clamp(2.55rem,14vw,6.4rem)] leading-[0.92] tracking-[-0.045em] sm:text-[clamp(3.2rem,10vw,6.4rem)] sm:leading-[0.9] sm:tracking-[-0.04em]"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
                }}
              >
                Константин
                <span className="mx-[0.08em] inline-block text-[#a58b77]">&</span>
                Мария
              </h1>
              <p className="mt-4 max-w-lg text-[1rem] leading-7 text-[#5c473b] sm:mt-6 sm:text-lg sm:leading-8 md:text-[1.15rem]">
                Приглашаем вас разделить с нами день, наполненный любовью,
                летним светом и самыми важными людьми рядом.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 xl:max-w-2xl">
                <div className="rounded-[22px] border border-[#ddcfc1] bg-[#fbf7f1] px-4 py-4 sm:rounded-[24px] sm:px-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-[11px] sm:tracking-[0.28em]">
                    Дата
                  </p>
                  <p className="mt-2 text-[1.05rem] leading-6 text-[#2f221c] sm:text-lg">
                    5 июля 2026
                  </p>
                </div>
                <div className="rounded-[22px] border border-[#ddcfc1] bg-[#fbf7f1] px-4 py-4 sm:rounded-[24px] sm:px-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-[11px] sm:tracking-[0.28em]">
                    Место проведения
                  </p>
                  <p className="mt-2 text-[1.05rem] leading-6 text-[#2f221c] sm:text-lg">
                    Загородное кафе «8 миля»
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4 sm:flex-row">
                <a
                  href={contactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#2f221c] px-6 text-sm font-medium tracking-[0.02em] !text-white transition hover:bg-[#45332a] hover:!text-white sm:min-h-14 sm:px-8"
                  style={{ color: "#ffffff" }}
                >
                  Подтвердить участие
                </a>
                <a
                  href="#schedule"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#a98e79] bg-transparent px-6 text-sm font-medium tracking-[0.02em] text-[#2f221c] transition hover:bg-[#efe5da] sm:min-h-14 sm:px-8"
                >
                  Смотреть программу
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[620px] overflow-hidden rounded-[28px] border border-[#d9cbbf] bg-[#ddd2c8] shadow-[0_28px_80px_rgba(70,52,43,0.12)] sm:rounded-[34px] sm:shadow-[0_40px_120px_rgba(70,52,43,0.14)]">
                <div className="relative aspect-[0.82] min-h-[360px] sm:aspect-[0.88] sm:min-h-[420px]">
                  <Image
                    src="/wedding/hero.jpg"
                    alt="Константин и Мария"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover object-[center_22%] md:object-[center_18%]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,23,18,0.06)_0%,rgba(33,23,18,0.2)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-xs sm:tracking-[0.28em]">
              Приглашение
            </p>
            <h2
              className="max-w-md text-[2rem] leading-[1.02] sm:text-3xl md:text-5xl"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
              }}
            >
              Дорогие родные и друзья!
            </h2>
          </div>
          <div className="grid gap-5 text-[1rem] leading-7 text-[#5c473b] sm:gap-6 sm:text-lg sm:leading-8 md:text-[1.15rem]">
            <p>
              Совсем скоро для нас наступит особенный день — день,
              когда мы станем семьёй.
            </p>
            <p>
              Нам хочется провести его в красивой, тёплой атмосфере,
              среди природы, вечернего света и людей,
              которые для нас по-настоящему важны.
              Будем счастливы видеть вас рядом!
            </p>
          </div>
        </div>
      </section>

      <section
        id="schedule"
        className="border-y border-[#dccfc2] bg-[#f2e9df]/80"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-xs sm:tracking-[0.28em]">
                Тайминг дня
              </p>
              <h2
                className="text-[2rem] leading-[1.02] sm:text-3xl md:text-5xl"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
                }}
              >
                Программа праздника
              </h2>
            </div>
            <p className="max-w-xl text-[0.98rem] leading-7 text-[#6f5a4d] sm:text-base">
              День выстроен так, чтобы вам было комфортно: от продуманного
              трансфера до длинного теплого вечера за городом.
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {timeline.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-[24px] border border-[#ddcfc1] bg-[#fbf7f1] p-4 shadow-[0_18px_45px_rgba(70,52,43,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_rgba(70,52,43,0.09)] sm:rounded-[30px] sm:p-5 md:p-7"
              >
                <div className="flex items-start gap-4 sm:gap-5 md:gap-7">
                  <TimelineIcon type={item.icon} />
                  <div className="flex-1">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#907865] sm:text-[11px] sm:tracking-[0.28em]">
                      Этап {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className="mb-2 text-[1.5rem] leading-[1.04] sm:mb-3 sm:text-[1.85rem] sm:leading-tight"
                      style={{
                        fontFamily:
                          '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="max-w-3xl text-[0.98rem] leading-6 text-[#5c473b] sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                    <div className="mt-3 inline-flex rounded-full border border-[#e3d8cc] bg-[#f3ebe1] px-3.5 py-2 text-[12px] font-medium tracking-[0.04em] text-[#5e483b] sm:mt-4 sm:px-4 sm:text-sm sm:tracking-[0.06em]">
                      {item.time}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="location"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-24"
      >
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="grid gap-6 sm:gap-8">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-xs sm:tracking-[0.28em]">
                Локация
              </p>
              <h2
                className="text-[2rem] leading-[1.02] sm:text-3xl md:text-5xl"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
                }}
              >
                Загородное кафе
                <br />
                «8 миля»
              </h2>
              <p className="mt-4 max-w-xl text-[1rem] leading-7 text-[#5c473b] sm:text-lg sm:leading-8">
                Мы выбрали загородную площадку, где особенно чувствуется красота
                летнего вечера: природа вокруг, спокойный воздух и пространство,
                в котором хочется просто быть рядом, разговаривать,
                смеяться и запоминать этот день.
                Ниже мы оставили всю важную информацию,
                чтобы вам было удобно спланировать поездку.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <div className="rounded-[22px] border border-[#ddcfc1] bg-[#fbf7f1] p-5 sm:rounded-[24px] sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-[11px] sm:tracking-[0.28em]">
                  Сбор гостей
                </p>
                <p className="mt-2 text-[1.05rem] leading-6 text-[#2f221c] sm:text-lg">
                  15:00-15:30
                </p>
              </div>
              <div className="rounded-[22px] border border-[#ddcfc1] bg-[#fbf7f1] p-5 sm:rounded-[24px] sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-[11px] sm:tracking-[0.28em]">
                  Трансфер
                </p>
                <p className="mt-2 text-[1.05rem] leading-6 text-[#2f221c] sm:text-lg">
                  С 14:30 для гостей
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#2f221c] px-6 text-sm font-medium text-white transition hover:bg-[#45332a] sm:min-h-14 sm:px-8"
                style={{ color: "#ffffff" }}
              >
                Открыть маршрут
              </a>
              <a
                href={contactLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#a98e79] px-6 text-sm font-medium text-[#2f221c] transition hover:bg-[#efe5da] sm:min-h-14 sm:px-8"
              >
                Написать в Telegram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#ddcfc1] bg-[#e8ddd2] shadow-[0_24px_70px_rgba(70,52,43,0.09)] sm:rounded-[32px] sm:shadow-[0_28px_90px_rgba(70,52,43,0.1)]">
            <div className="relative aspect-[0.98] min-h-[320px] sm:aspect-[1.05] sm:min-h-[380px]">
              <iframe
                title="Карта загородного кафе 8 миля"
                src={mapEmbedLink}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[72%]">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-[#2f221c] px-3.5 py-2 text-[10px] uppercase tracking-[0.22em] text-white shadow-[0_12px_30px_rgba(47,34,28,0.24)] sm:px-4 sm:text-xs sm:tracking-[0.28em]">
                    8 миля
                  </div>
                  <div className="relative">
                    <div className="relative h-18 w-18 overflow-hidden rounded-full border-4 border-[#f6f0e8] shadow-[0_18px_40px_rgba(47,34,28,0.22)] sm:h-22 sm:w-22 sm:border-[5px]">
                      <Image
                        src="/wedding/venue.jpg"
                        alt="Загородное кафе 8 миля"
                        fill
                        sizes="88px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="absolute left-1/2 top-full h-5 w-[2px] -translate-x-1/2 bg-[#2f221c]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="dress-code"
        className="border-y border-[#dccfc2] bg-[#fbf7f1]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:gap-10 sm:px-6 sm:py-16 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-16 lg:py-24">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-xs sm:tracking-[0.28em]">
              Dress code
            </p>
            <h2
              className="text-[2rem] leading-[1.02] sm:text-3xl md:text-5xl"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
              }}
            >
              Палитра нашего дня
            </h2>
            <Ornament className="mt-5 h-6 w-28 text-[#b89f8a]" />
            <p className="mt-5 max-w-md text-[1rem] leading-7 text-[#5c473b] sm:text-lg sm:leading-8">
              Нам будет очень приятно, если в своих образах вы поддержите настроение
              нашего дня. Подойдут спокойные природные оттенки, мягкие фактуры и 
              элегантные силуэты. Но важнее всего — ваше хорошее настроение и комфорт.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {dressCodeColors.map((color) => (
                <div
                  key={color.name}
                  className="rounded-[22px] border border-[#ddcfc1] bg-white p-3.5 sm:rounded-[24px] sm:p-4"
                >
                  <div
                    className="mb-3 aspect-square rounded-[16px] border border-[#e3d7cb] sm:mb-4 sm:rounded-[18px]"
                    style={{ backgroundColor: color.value }}
                  />
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#6f5a4d] sm:text-xs sm:tracking-[0.22em]">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[24px] border border-[#ddcfc1] bg-[#efe6db] p-5 sm:rounded-[28px] sm:p-6">
              <p className="text-[0.98rem] leading-7 text-[#5c473b] sm:text-base">
                Мы будем рады спокойным природным оттенкам: молочному,
                бежевому, карамельному, шоколадному, серо-зелёному,
                хвойному и другим мягким естественным цветам.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-xs sm:tracking-[0.28em]">
            Моменты
          </p>
          <h2
            className="text-[2rem] leading-[1.02] sm:text-3xl md:text-5xl"
            style={{
              fontFamily:
                '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
            }}
          >
            Немного нашего настроения
          </h2>
          <p className="mt-4 text-[1rem] leading-7 text-[#5c473b] sm:text-lg sm:leading-8">
            Нам близок образ лесной сказки — не шумной и театральной, а тёплой, живой и немного волшебной.
          </p>
          <p className="mt-4 text-[1rem] leading-7 text-[#5c473b] sm:text-lg sm:leading-8">
            Мы мечтаем о дне, в котором будут природа, мягкий свет, летний воздух, спокойная красота и ощущение, будто время на несколько часов стало медленнее.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="group relative overflow-hidden rounded-[28px] border border-[#ddcfc1] bg-[#ddd2c8] shadow-[0_22px_65px_rgba(70,52,43,0.09)] sm:rounded-[32px] sm:shadow-[0_28px_90px_rgba(70,52,43,0.1)]">
            <div className="relative h-[380px] sm:h-[520px] md:h-[700px]">
              <Image
                src="/wedding/hero.jpg"
                alt="Константин и Мария на ступенях"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-[31%_14%] transition duration-700 group-hover:scale-[1.03] sm:object-[29%_3%]"
              />
            </div>
          </div>
          <div className="grid gap-3 sm:gap-4">
            <div className="group relative overflow-hidden rounded-[28px] border border-[#ddcfc1] bg-[#ddd2c8] shadow-[0_22px_65px_rgba(70,52,43,0.08)] sm:rounded-[32px] sm:shadow-[0_28px_90px_rgba(70,52,43,0.08)]">
              <div className="relative h-[320px] sm:h-[500px] md:h-[560px]">
                <Image
                  src="/wedding/portrait.jpg"
                  alt="Портрет Константина и Марии"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover object-[50%_14%] transition duration-700 group-hover:scale-[1.03] sm:object-[46%_12%]"
                />
              </div>
            </div>
            <div className="rounded-[24px] border border-[#ddcfc1] bg-[#fbf7f1] p-5 sm:rounded-[30px] sm:p-7">
              <Ornament className="mb-5 h-6 w-28 text-[#b89f8a]" />
              <p className="text-[0.98rem] leading-7 text-[#5c473b] sm:text-base">
                Будем счастливы разделить этот день с теми, кто дорог нашему
                сердцу. Спасибо, что вы рядом с нами в этот важный момент.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-xs sm:tracking-[0.28em]">
            Важные детали
          </p>
          <h2
            className="text-[2rem] leading-[1.02] sm:text-3xl md:text-5xl"
            style={{
              fontFamily:
                '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
            }}
          >
            Чтобы день прошел легко
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
          {details.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-[#ddcfc1] bg-[#fbf7f1] p-5 sm:rounded-[28px] sm:p-6"
            >
              <h3
                className="mb-3 text-[1.6rem] leading-[1.05] sm:mb-4 sm:text-[1.9rem] sm:leading-tight"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
                }}
              >
                {item.title}
              </h3>
              <p className="text-[0.98rem] leading-7 text-[#5c473b] sm:text-base">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="border-t border-[#dccfc2] bg-[#f9f4ed]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#907865] sm:text-xs sm:tracking-[0.28em]">
              FAQ
            </p>
            <h2
              className="text-[2rem] leading-[1.02] sm:text-3xl md:text-5xl"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
              }}
            >
              Частые вопросы
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[24px] border border-[#ddcfc1] bg-[#fbf7f1] p-5 sm:rounded-[28px] sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[1.02rem] leading-6 font-medium text-[#2f221c] sm:items-center sm:text-lg">
                  <span>{item.question}</span>
                  <span className="mt-0.5 text-xl leading-none text-[#9a826f] transition group-open:rotate-45 sm:mt-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-[#5c473b] sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="border-t border-[#dccfc2] bg-[#2f221c] text-[#f6f0e8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
            <div className="max-w-2xl">
              <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#c8b09e] sm:text-xs sm:tracking-[0.28em]">
                RSVP и контакты
              </p>
              <h2
                className="text-[2rem] leading-[1.02] sm:text-3xl md:text-5xl"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
                }}
              >
                Будем счастливы видеть вас рядом
              </h2>
              <p className="mt-4 text-[1rem] leading-7 text-[#e9dccf] sm:mt-5 sm:text-lg sm:leading-8">
                Пожалуйста, подтвердите участие и напишите нам по любым вопросам
                в Telegram. Это поможет нам заранее позаботиться о трансфере и
                комфорте каждого гостя.
              </p>

              <div className="mt-6 grid max-w-xl gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2">
                <a
                  href={contactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#f6f0e8] px-6 text-sm font-medium !text-[#2f221c] transition hover:bg-white sm:min-h-14 sm:px-8"
                >
                  Задать вопрос
                </a>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#a58a78] px-6 text-sm font-medium !text-white transition hover:bg-[rgba(255,255,255,0.06)] sm:min-h-14 sm:px-8"
                  style={{ color: "#ffffff" }}
                >
                  Открыть маршрут
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[300px] rounded-[26px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] p-4 text-center backdrop-blur-sm sm:max-w-none sm:rounded-[30px]">
                <Image
                  src="/wedding/qr-code.png"
                  alt="QR-код Telegram"
                  width={220}
                  height={220}
                  className="mx-auto h-44 w-44 rounded-[18px] bg-white p-2 sm:h-52 sm:w-52"
                />
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#cfb9a9] sm:text-sm sm:tracking-[0.22em]">
                  Telegram
                </p>
                <p className="mt-2 text-[0.98rem] text-[#f6f0e8] sm:text-base">@KNIZHNIK_KM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#d8cabc] bg-[rgba(246,240,232,0.94)] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <div className="mx-auto max-w-md">
          <a
            href={contactLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#2f221c] px-5 text-sm font-medium !text-white"
            style={{ color: "#ffffff" }}
          >
            Задать вопрос
          </a>
        </div>
      </div>
    </main>
  );
}

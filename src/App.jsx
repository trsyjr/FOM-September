import { useEffect, useRef, useState } from 'react'
import C from './content.js'

/* ---------- little drawings ---------- */
const HEART_PATH =
  'M12 21C5 16.5 2 12.5 2 8.8 2 6.1 4 4.2 6.5 4.2c1.9 0 3.7 1 5.5 3.1 1.8-2.1 3.6-3.1 5.5-3.1C20 4.2 22 6.1 22 8.8 22 12.5 19 16.5 12 21z'
const SPARKLE_PATH =
  'M12 2c.8 5.2 4.8 9.2 10 10-5.2.8-9.2 4.8-10 10-.8-5.2-4.8-9.2-10-10 5.2-.8 9.2-4.8 10-10z'
const HEART_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${HEART_PATH}"/></svg>`

function Heart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={HEART_PATH} fill="currentColor" />
    </svg>
  )
}

function Sparkle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={SPARKLE_PATH} fill="currentColor" />
    </svg>
  )
}

function Arrow({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h15M13 6l6 6-6 6" fill="none" />
    </svg>
  )
}

function Squiggle() {
  return (
    <svg
      viewBox="0 0 200 12"
      width="200"
      height="12"
      className="c-pink w-48 max-w-full"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 6 Q 14 -2 26 6 T 50 6 T 74 6 T 98 6 T 122 6 T 146 6 T 170 6 T 198 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* round badge with text running around it */
function Badge({ text, className }) {
  return (
    <div className={'badge ' + className} aria-hidden="true">
      <svg className="badge-ring" viewBox="0 0 200 200">
        <defs>
          <path id="badge-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text fill="currentColor" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="15">
          <textPath href="#badge-circle" textLength="455" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="badge-core">
        <Heart />
      </span>
    </div>
  )
}

/* ---------- polaroid photo frame ---------- */
const TAPES = ['blue', 'pink', 'lilac', 'mint']

function Photo({ p = {}, i = 0, tilt = 0, ratio = '4 / 5', tape = 'blue', sticker = false }) {
  const [failed, setFailed] = useState(false)
  const ok = p.src && !failed
  return (
    <div className="sway" style={{ '--sd': `-${((i * 1.3) % 6).toFixed(1)}s` }}>
      <figure className="polaroid m-0" style={{ '--tilt': `${tilt}deg` }}>
        <span className={`tape tape-${tape}`} aria-hidden="true" />
        {sticker && (
          <span className="sticker" aria-hidden="true">
            <Heart />
          </span>
        )}
        <div className="photo-well" style={{ aspectRatio: p.ratio || ratio }}>
          {ok ? (
            <img
              src={p.src}
              alt={p.alt || p.caption || `${C.name} photo`}
              loading="lazy"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className={`ph ph-${i % 4}`}>
              <Heart />
              <span>{p.src || 'add an image path'}</span>
            </div>
          )}
        </div>
        <figcaption className="caption">{p.caption || ' '}</figcaption>
      </figure>
    </div>
  )
}

/* ---------- scrolling ribbon ---------- */
function Ribbon({ items, blue = false }) {
  const group = (k) => (
    <div className="ribbon-group" key={k} aria-hidden={k === 1 ? 'true' : undefined}>
      {items.map((t, n) => (
        <span className="ribbon-item" key={n}>
          {t}
          <Sparkle />
        </span>
      ))}
    </div>
  )
  return (
    <div className={'ribbon' + (blue ? ' ribbon-blue' : '')} role="presentation">
      <div className="ribbon-track">
        {group(0)}
        {group(1)}
      </div>
    </div>
  )
}

/* ---------- floating background hearts and sparkles ---------- */
const FLOATS = [
  { k: 'heart', c: 'pink', x: '5%', y: '16%', s: 26, t: 11, d: -2 },
  { k: 'sparkle', c: 'blue', x: '14%', y: '58%', s: 22, t: 9, d: -5 },
  { k: 'heart', c: 'lilac', x: '24%', y: '82%', s: 20, t: 13, d: -7 },
  { k: 'sparkle', c: 'pink', x: '38%', y: '10%', s: 18, t: 10, d: -3 },
  { k: 'heart', c: 'blue', x: '47%', y: '70%', s: 24, t: 12, d: -9 },
  { k: 'sparkle', c: 'lilac', x: '58%', y: '30%', s: 26, t: 8, d: -1 },
  { k: 'heart', c: 'pink', x: '68%', y: '88%', s: 22, t: 14, d: -6 },
  { k: 'sparkle', c: 'blue', x: '76%', y: '12%', s: 20, t: 9, d: -4 },
  { k: 'heart', c: 'lilac', x: '86%', y: '46%', s: 28, t: 12, d: -8 },
  { k: 'sparkle', c: 'pink', x: '93%', y: '74%', s: 18, t: 10, d: -2 },
  { k: 'heart', c: 'blue', x: '31%', y: '38%', s: 16, t: 15, d: -10 },
  { k: 'heart', c: 'pink', x: '82%', y: '26%', s: 18, t: 11, d: -5 },
]

function Backdrop() {
  return (
    <>
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />
      <div className="floats" aria-hidden="true">
        {FLOATS.map((f, n) => (
          <span
            key={n}
            className={`float float-${f.c}`}
            style={{ '--x': f.x, '--y': f.y, '--s': `${f.s}px`, '--t': `${f.t}s`, '--d': `${f.d}s` }}
          >
            {f.k === 'heart' ? <Heart /> : <Sparkle className="twinkle" />}
          </span>
        ))}
      </div>
    </>
  )
}

/* little hearts pop out wherever you click */
function useHeartBurst() {
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    const burst = (ev) => {
      for (let n = 0; n < 6; n++) {
        const s = document.createElement('span')
        s.className = 'burst'
        s.style.left = `${ev.clientX}px`
        s.style.top = `${ev.clientY}px`
        const a = (Math.PI * 2 * n) / 6 + Math.random() * 0.6
        const d = 30 + Math.random() * 34
        s.style.setProperty('--dx', `${Math.cos(a) * d}px`)
        s.style.setProperty('--dy', `${Math.sin(a) * d - 22}px`)
        s.innerHTML = HEART_SVG
        document.body.appendChild(s)
        setTimeout(() => s.remove(), 950)
      }
    }
    document.addEventListener('pointerdown', burst)
    return () => document.removeEventListener('pointerdown', burst)
  }, [])
}

/* ---------- cover / landing page ---------- */
function Landing({ onOpen, leaving }) {
  const [main, second] = C.hero
  const badgeText = `${C.title} · ${C.month} · `.toUpperCase()
  return (
    <div className="flex flex-col gap-14 sm:gap-20">
      <section
        id="view-top"
        tabIndex={-1}
        aria-labelledby="cover-title"
        className={
          'relative grid items-center gap-14 py-4 outline-none sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]' +
          (leaving ? ' leaving' : '')
        }
      >
        <Sparkle className="c-lilac twinkle absolute -top-2 left-[44%] hidden h-9 w-9 sm:block" />
        <Sparkle className="c-pink twinkle absolute bottom-0 left-[40%] hidden h-6 w-6 lg:block" />

        <div className="flex min-w-0 flex-col gap-5">
          <p className="eyebrow pop m-0" style={{ '--d': '.1s' }}>
            {C.cover.eyebrow}
          </p>
          <h1 id="cover-title" className="title m-0">
            {C.title}
          </h1>
          <div className="pop flex flex-col gap-3" style={{ '--d': '.3s' }}>
            <p className="month m-0">{C.monthName}</p>
            <Squiggle />
          </div>
          <div className="pop flex min-w-0 flex-col gap-1" style={{ '--d': '.4s' }}>
            <p className="name m-0">Get to Know Our {C.nickname}</p>
            {/* <p className="role m-0">{C.role}</p> */}
          </div>
          {/* <p className="tagline pop m-0" style={{ '--d': '.5s' }}>
            {C.cover.teaser}
          </p> */}
          <div className="pop flex flex-wrap items-center gap-x-6 gap-y-4 pt-2" style={{ '--d': '.6s' }}>
            <button
              type="button"
              className="view-btn"
              onClick={onOpen}
              aria-label={`View ${C.monthName}’s feature`}
            >
              {C.cover.button}
              <Arrow className="arrow" />
            </button>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 items-start gap-5 pt-8 lg:block lg:min-h-[40rem] lg:max-w-none lg:pt-0 xl:min-h-[46rem]">
          <Badge text={badgeText} className="-top-2 right-0 lg:right-auto lg:-left-6 lg:top-0" />
          {main && (
            <div
              className="pop min-w-0 lg:absolute lg:left-[10%] lg:top-8 lg:w-[72%]"
              style={{ '--d': '.3s' }}
            >
              <Photo p={main} i={0} tilt={-3} ratio="4 / 5" tape="blue" sticker />
            </div>
          )}
          {second && (
            <div
              className="pop min-w-0 lg:absolute lg:bottom-0 lg:right-0 lg:w-[48%]"
              style={{ '--d': '.5s' }}
            >
              <Photo p={second} i={1} tilt={4} ratio="1 / 1" tape="pink" />
            </div>
          )}
        </div>
      </section>

      {/* <Ribbon items={[C.title, C.monthName, `meet ${C.name}`, 'tap view']} /> */}
    </div>
  )
}

/* ---------- one question + its photos ---------- */
function Entry({ e, n }) {
  const odd = n % 2 === 1
  const photos = e.photos || []
  return (
    <article
      className={
        'entry reveal grid gap-8 xl:gap-12 ' +
        (odd
          ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]'
          : 'lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]')
      }
    >
      <div className={'flex min-w-0 flex-col gap-4 ' + (odd ? '' : 'lg:order-2')}>
        <p className="q-pill m-0 self-start">
          <Heart /> Question {n}
        </p>
        <h2 className="m-0">
          <span className="question">{e.q}</span>
        </h2>
        <p className="answer m-0 max-w-3xl">{e.a}</p>
      </div>
      <div
        className={
          'grid grid-cols-2 items-start gap-5 lg:flex lg:flex-col lg:gap-7 ' + (odd ? '' : 'lg:order-1')
        }
      >
        {photos.map((p, k) => {
          const frame = (
            <Photo
              p={p}
              i={n * 3 + k}
              tilt={k === 0 ? (odd ? 2.2 : -2.2) : odd ? -3 : 3}
              ratio={k === 0 ? (n % 3 === 0 ? '1 / 1' : '4 / 5') : '1 / 1'}
              tape={TAPES[(n + k) % 4]}
              sticker={k === 0 && n % 2 === 0}
            />
          )
          return k === 0 ? (
            <div
              key={k}
              className={'w-full min-w-0 ' + (photos.length === 1 ? 'col-span-2 lg:col-span-1' : '')}
            >
              {frame}
            </div>
          ) : (
            <div key={k} className="second min-w-0" data-side={odd ? 'left' : 'right'}>
              {frame}
            </div>
          )
        })}
      </div>
    </article>
  )
}

/* ---------- the diary ---------- */
const WALL_RATIOS = ['4 / 5', '1 / 1', '5 / 4', '4 / 5', '1 / 1', '4 / 5']
const WALL_TILTS = [-3, 2, -1.5, 3, -2, 1.5]

function Diary({ onBack }) {
  const ribbonItems = [C.title, C.monthName, `meet ${C.name}`, C.nickname, 'a pile of memories']
  const [main, second] = C.hero
  return (
    <div className="enter flex flex-col gap-14 sm:gap-20">
      <div id="view-top" tabIndex={-1} className="flex flex-col gap-8 outline-none">
        <button type="button" className="back-btn" onClick={onBack}>
          <Arrow className="h-4 w-4 rotate-180" /> Back to cover
        </button>

        <header className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <Sparkle className="c-lilac twinkle absolute -top-3 right-2 hidden h-10 w-10 sm:block" />
          <Sparkle className="c-pink twinkle absolute bottom-2 left-[48%] hidden h-6 w-6 lg:block" />
          <div className="flex min-w-0 flex-col gap-5">
            {/* <p className="stamp pop m-0" style={{ '--d': '0s' }}>
              <Heart className="h-3.5 w-3.5" /> {C.issue} &middot; {C.month}
            </p> */}
            <h1 className="title m-0">{C.title}</h1>
            <div className="pop" style={{ '--d': '.25s' }}>
              <Squiggle />
            </div>
            <div className="pop flex min-w-0 flex-col gap-1" style={{ '--d': '.35s' }}>
              <p className="name m-0">{C.name}</p>
              <p className="role m-0">{C.role}</p>
            </div>
            <p className="tagline pop m-0" style={{ '--d': '.45s' }}>
              {C.tagline}
            </p>
            <div className="pop max-w-sm pt-3" style={{ '--d': '.55s' }}>
              <div className="note">
                <span className="pin" aria-hidden="true">
                  <Heart />
                </span>
                <p className="note-title">Quick facts</p>
                <dl className="m-0">
                  {C.facts.map(([label, value]) => (
                    <div className="fact" key={label}>
                      <Heart />
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-2 items-start gap-5 lg:block lg:min-h-[36rem]">
            {main && (
              <div className="pop min-w-0 lg:absolute lg:left-0 lg:top-0 lg:w-[88%]" style={{ '--d': '.3s' }}>
                <Photo p={main} i={0} tilt={-2.5} ratio="4 / 5" tape="blue" sticker />
              </div>
            )}
            {second && (
              <div className="pop min-w-0 lg:absolute lg:bottom-0 lg:right-0 lg:w-[56%]" style={{ '--d': '.5s' }}>
                <Photo p={second} i={1} tilt={4} ratio="1 / 1" tape="pink" />
              </div>
            )}
          </div>
        </header>
      </div>

      <Ribbon items={ribbonItems} />

      <main className="notebook">
        <span className="bookmark" aria-hidden="true" />
        <div className="flex flex-col gap-14">
          {C.entries.map((e, idx) => (
            <Entry key={idx} e={e} n={idx + 1} />
          ))}
        </div>
      </main>

      <Ribbon items={[...ribbonItems].reverse()} blue />

      <section aria-labelledby="wall-title" className="flex flex-col gap-10">
        <div className="reveal flex min-w-0 flex-col gap-2">
          <h2 id="wall-title" className="section-title m-0">
            {C.wallTitle}
          </h2>
          <p className="note-type m-0">{C.wallNote}</p>
        </div>
        <div className="grid grid-cols-2 items-start gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {C.wall.map((p, i) => (
            <div key={i} className="reveal min-w-0">
              <Photo
                p={p}
                i={i}
                tilt={WALL_TILTS[i % WALL_TILTS.length]}
                ratio={WALL_RATIOS[i % WALL_RATIOS.length]}
                tape={TAPES[i % 4]}
                sticker={i % 5 === 2}
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="reveal flex flex-col gap-8 pb-4 sm:flex-row sm:items-center sm:gap-12">
        <div className="note note-butter text-center sm:w-80">
          <span className="pin" aria-hidden="true">
            <Heart />
          </span>
          <p className="note-title">{C.nextLabel}</p>
          <p className="m-0 text-3xl leading-tight">{C.nextName} ❤️</p>
        </div>
        <p className="note-type m-0 max-w-xl ml-36">{C.thanks}</p>
      </footer>
    </div>
  )
}

/* ---------- app: cover first, then the diary ---------- */
export default function App() {
  const [view, setView] = useState('landing')
  const [leaving, setLeaving] = useState(false)
  const prevView = useRef(view)
  useHeartBurst()

  useEffect(() => {
    if (prevView.current !== view) {
      prevView.current = view
      document.getElementById('view-top')?.focus({ preventScroll: true })
    }
  }, [view])

  function openDiary() {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const go = () => {
      setView('diary')
      setLeaving(false)
      window.scrollTo({ top: 0 })
    }
    if (reduce) {
      go()
      return
    }
    setLeaving(true)
    setTimeout(go, 620)
  }

  function backToCover() {
    setView('landing')
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <Backdrop />
      {/* page width: max-w-[90rem] = 1440px. Use max-w-7xl (1280px) for a smaller step, or max-w-full for edge to edge */}
      <div className="layer mx-auto flex w-full max-w-[90rem] flex-col px-4 py-8 sm:px-6 sm:py-14">
        {view === 'landing' ? (
          <Landing onOpen={openDiary} leaving={leaving} />
        ) : (
          <Diary onBack={backToCover} />
        )}
      </div>
    </>
  )
}

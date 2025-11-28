import { talks } from "@/lib/data";

export const metadata = {
  title: "Talks | Carlos's Corner",
  description: "Conference talks and presentations I've given.",
};

export default function TalksPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Talks</h1>
        <p className="text-white/50 text-lg mb-12">
          Conference talks and presentations I&apos;ve given at various events.
        </p>

        <div className="space-y-6">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2">
                    {talk.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/50">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {talk.date}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {talk.location}
                    </span>
                  </div>
                  <p className="text-white/40 mt-2">{talk.event}</p>
                </div>

                <div className="flex items-center gap-3">
                  {talk.videoUrl && (
                    <a
                      href={talk.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Video
                    </a>
                  )}
                  {talk.slidesUrl && (
                    <a
                      href={talk.slidesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                      </svg>
                      Slides
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


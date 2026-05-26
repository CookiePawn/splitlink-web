import Link from "next/link";

type LegalPageProps = {
  eyebrow: string;
  content: {
    title: string;
    effectiveDate: string;
    sections: Array<{
      title: string;
      text: string;
    }>;
  };
};

export function LegalPage({ eyebrow, content }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#fffdf7] text-[#1d1e1e]">
      <div className="mx-auto w-full max-w-3xl px-6 py-8 sm:py-12">
        <nav className="mb-12 flex items-center justify-between border-b border-[#e2d8ca] pb-5">
          <Link href="/" className="text-xl font-black text-[#06785f]">
            SplitLink
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#d1d1d1] bg-white px-4 py-2 text-sm font-black text-[#4e4e4e] transition hover:border-[#10a984] hover:text-[#06785f]"
          >
            홈으로
          </Link>
        </nav>

        <p className="text-sm font-black text-[#ff5b56]">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-3 text-sm font-bold text-[#8e8e8e]">{content.effectiveDate}</p>

        <div className="mt-10 space-y-8 rounded-lg border border-[#e2d8ca] bg-white p-6 shadow-[0_12px_30px_rgba(30,24,12,0.06)] sm:p-8">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-black text-[#1d1e1e]">{section.title}</h2>
              <p className="mt-3 text-base font-medium leading-8 text-[#4e4e4e]">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

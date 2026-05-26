import Link from "next/link";

const features = [
  {
    title: "모임을 만들고",
    description: "여행, 회식, 프로젝트처럼 여러 사람이 함께 쓴 돈을 정산방으로 묶어 관리합니다.",
  },
  {
    title: "지출별 참여자를 고르고",
    description: "모두가 나눈 비용과 일부만 참여한 비용을 따로 반영해 실제 상황에 맞게 계산합니다.",
  },
  {
    title: "최종 송금만 확인",
    description: "누가 누구에게 얼마를 보내면 끝나는지 한눈에 보여주고 결과 이미지 공유까지 이어집니다.",
  },
];

const expenses = [
  { name: "숙소 예약", payer: "지민", amount: "240,000원", note: "전체 참여" },
  { name: "렌터카", payer: "도윤", amount: "96,000원", note: "민서 제외" },
  { name: "저녁 식사", payer: "민서", amount: "72,000원", note: "전체 참여" },
];

const transfers = [
  { from: "민서", to: "지민", amount: "54,000원" },
  { from: "하준", to: "도윤", amount: "18,000원" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf7] text-[#1d1e1e]">
      <section className="relative overflow-hidden border-b border-[#e2d8ca] bg-[#fffdf7]">
        <div className="mx-auto grid min-h-[720px] w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-6 md:grid-cols-[1fr_440px] md:px-10 lg:px-12">
          <nav className="flex items-center justify-between md:col-span-2">
            <div className="text-xl font-black tracking-normal text-[#06785f]">SplitLink</div>
            <div className="hidden items-center gap-7 text-sm font-bold text-[#4e4e4e] sm:flex">
              <a href="#features" className="transition hover:text-[#06785f]">
                기능
              </a>
              <a href="#flow" className="transition hover:text-[#06785f]">
                사용 흐름
              </a>
              <a href="#share" className="transition hover:text-[#06785f]">
                공유
              </a>
            </div>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[#93e0c9] bg-white px-4 py-2 text-sm font-bold text-[#0a8d70] shadow-[0_8px_24px_rgba(30,24,12,0.08)]">
              모임 정산을 더 짧고 정확하게
            </p>
            <h1 className="text-5xl font-black leading-[1.08] tracking-normal text-[#1d1e1e] sm:text-6xl lg:text-7xl">
              SplitLink
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[#4e4e4e] sm:text-2xl sm:leading-9">
              지출마다 참여자가 달라도 괜찮아요. 정산방을 만들고 비용을 입력하면
              SplitLink가 받을 돈과 보낼 돈을 깔끔하게 정리합니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#flow"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#10a984] px-6 text-base font-black text-white shadow-[0_14px_28px_rgba(16,169,132,0.22)] transition hover:bg-[#0a8d70]"
              >
                정산 흐름 보기
              </a>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d1d1d1] bg-white px-6 text-base font-black text-[#1d1e1e] transition hover:border-[#10a984] hover:text-[#06785f]"
              >
                주요 기능
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px] md:justify-self-end">
            <div className="rounded-[32px] border border-[#3c3124] bg-[#1d1e1e] p-3 shadow-[0_28px_70px_rgba(30,24,12,0.22)]">
              <div className="overflow-hidden rounded-[24px] bg-white">
                <div className="flex items-center justify-between border-b border-[#e3e3e3] px-5 py-5">
                  <span className="text-lg font-black text-[#06785f]">SplitLink</span>
                  <span className="rounded-full bg-[#eaf9f2] px-3 py-1 text-xs font-black text-[#0a8d70]">
                    정산 중
                  </span>
                </div>
                <div className="space-y-4 bg-[#fafafa] p-5">
                  <div className="rounded-2xl border border-[#93e0c9] bg-white p-5">
                    <p className="text-sm font-bold text-[#686868]">제주 여행</p>
                    <p className="mt-2 text-3xl font-black text-[#1d1e1e]">408,000원</p>
                    <div className="mt-4 flex -space-x-2">
                      {["지", "도", "민", "하"].map((member) => (
                        <span
                          key={member}
                          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#c9f0e3] text-sm font-black text-[#06785f]"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-[0_10px_28px_rgba(30,24,12,0.08)]">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="font-black">최종 정산</p>
                      <p className="text-xs font-black text-[#ff5b56]">2건</p>
                    </div>
                    <div className="space-y-3">
                      {transfers.map((item) => (
                        <div
                          key={`${item.from}-${item.to}`}
                          className="flex items-center justify-between rounded-xl bg-[#fff8e6] px-4 py-3"
                        >
                          <span className="text-sm font-bold text-[#4e4e4e]">
                            {item.from} → {item.to}
                          </span>
                          <span className="text-sm font-black text-[#b87400]">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-5">
                    <p className="mb-4 font-black">지출 내역</p>
                    <div className="space-y-3">
                      {expenses.map((expense) => (
                        <div key={expense.name} className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-black">{expense.name}</p>
                            <p className="mt-1 text-xs font-bold text-[#686868]">
                              {expense.payer} 결제 · {expense.note}
                            </p>
                          </div>
                          <p className="shrink-0 text-sm font-black">{expense.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-black text-[#ff5b56]">FEATURES</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            복잡한 더치페이를 정산 가능한 단위로 나눕니다
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="rounded-lg border border-[#e2d8ca] bg-white p-6 shadow-[0_12px_30px_rgba(30,24,12,0.06)]">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf9f2] text-sm font-black text-[#06785f]">
                0{index + 1}
              </div>
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 text-base font-semibold leading-7 text-[#686868]">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="flow" className="border-y border-[#e2d8ca] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10 lg:px-12">
          <div>
            <p className="text-sm font-black text-[#206aa7]">FLOW</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              입력은 짧게, 계산은 자동으로
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[#4e4e4e]">
              정산방 이름, 기간, 참여자를 정하고 지출을 추가하세요. 각 지출에서 결제자와
              참여자를 선택하면 사람별 부담액과 송금 방향이 다시 계산됩니다.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              ["정산방 생성", "모임명, 날짜, 참여자를 등록해 하나의 정산 공간을 만듭니다."],
              ["지출 추가", "금액, 결제자, 참여자를 입력하고 제외 인원을 바로 반영합니다."],
              ["정산 확정", "최종 송금 목록을 확인한 뒤 완료 상태로 잠급니다."],
            ].map(([title, description]) => (
              <div key={title} className="flex gap-4 rounded-lg border border-[#e3e3e3] bg-[#fafafa] p-5">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#10a984]" />
                <div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 text-base font-semibold leading-7 text-[#686868]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="share" className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-8 rounded-lg bg-[#1d1e1e] p-7 text-white sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-black text-[#93e0c9]">SHARE</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              최종 정산 결과를 이미지로 공유하세요
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#d1d1d1]">
              SplitLink는 최종 정산 영역을 캡처해 공유할 수 있도록 설계되어 있습니다.
              단체 채팅방에 올리기 좋은 형태로 송금 내역만 또렷하게 남깁니다.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 text-[#1d1e1e] md:min-w-72">
            <p className="text-sm font-black text-[#06785f]">제주 여행 최종 정산</p>
            <div className="mt-4 space-y-3">
              {transfers.map((item) => (
                <div key={item.amount} className="rounded-md bg-[#eaf9f2] p-4">
                  <p className="text-sm font-black">
                    {item.from} → {item.to}
                  </p>
                  <p className="mt-1 text-2xl font-black text-[#06785f]">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e2d8ca] bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <div>
            <p className="text-lg font-black text-[#06785f]">SplitLink</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#686868]">
              모임 정산을 더 짧고 정확하게 정리합니다.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-bold text-[#4e4e4e]">
            <Link href="/terms" className="transition hover:text-[#06785f]">
              이용약관
            </Link>
            <Link href="/privacy" className="transition hover:text-[#06785f]">
              개인정보처리방침
            </Link>
            <a href="mailto:dev.jcahn@gmail.com" className="transition hover:text-[#06785f]">
              문의
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

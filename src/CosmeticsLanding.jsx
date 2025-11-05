import React from "react";

const products = [
  {
    id: 1,
    name: "수분 광채 크림",
    desc: "겉은 촉촉하게, 속은 탄력 있게. 모든 피부 타입용",
    price: "45,000원",
    img: "https://via.placeholder.com/420x300?text=Moist+Glow+Cream",
  },
  {
    id: 2,
    name: "비타민 C 세럼",
    desc: "칙칙한 피부를 환하게 — 고농축 비타민 C",
    price: "62,000원",
    img: "https://via.placeholder.com/420x300?text=Vitamin+C+Serum",
  },
  {
    id: 3,
    name: "깔끔한 클렌저",
    desc: "저자극 포뮬러, 부드러운 거품",
    price: "28,000원",
    img: "https://via.placeholder.com/420x300?text=Gentle+Cleanser",
  },
];

export default function CosmeticsLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold">NT</div>
            <div>
              <h1 className="text-lg font-semibold">나인티투 (NinetyTwo)</h1>
              <p className="text-xs text-gray-500">자연을 담은 프리미엄 스킨케어 — 직접 체험하고 구매하세요</p>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-bold">회사소개</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6 items-center">
          <p className="text-gray-700">나인티투(NinetyTwo)는 안전하고 투명한 유통을 약속합니다. 모든 제품은 국내외 엄선된 원료로 제조되며, 정품 보증과 고객 만족을 최우선으로 합니다. 방문 상담 예약은 전화 또는 아래 폼으로 접수하세요.</p>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold">사업자 정보</h4>
            <ul className="text-sm text-gray-600 mt-2">
              <li>상호: 나인티투 (NinetyTwo)</li>
              <li>대표: 김현수</li>
              <li>사업자등록번호: 305-41-27440</li>
              <li>연락처: 010-9667-5951</li>
              <li>주소: 대구시 달성군 유가읍 테크노대로 195 105동 1205호</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

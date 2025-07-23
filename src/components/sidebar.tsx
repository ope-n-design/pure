import { scrollToSection } from "../utils/scroll";
<<<<<<< HEAD
HEAD
import React from "react";

interface SidebarProps {


export default function Sidebar({
  introUnlocked,
  isMobile,
  isSidebarOpen,
  setSidebarOpen,
}: {
 e880b95f (Initial commit for deployment)
=======
import React from "react";

interface SidebarProps {
>>>>>>> c768ebde (실적추가)
  introUnlocked: boolean;
  isMobile?: boolean;
  isSidebarOpen?: boolean;
  setSidebarOpen?: (value: boolean) => void;
<<<<<<< HEAD
HEAD
=======
>>>>>>> c768ebde (실적추가)
}

const Sidebar: React.FC<SidebarProps> = ({
  introUnlocked,
  isMobile = false,
  isSidebarOpen = false,
  setSidebarOpen,
}) => {
  const logoImage = "/images/logo.png";

<<<<<<< HEAD
  const handleClick = (id: string) => {
    if (!introUnlocked) return;
    scrollToSection(id);
    if (isMobile && setSidebarOpen) {
      setSidebarOpen(false);
    }

}) {
  const handleClick = (id: string) => {
    if (!introUnlocked) return;
    scrollToSection(id);
    if (isMobile && setSidebarOpen) setSidebarOpen(false); // 모바일에선 클릭 후 자동 닫기
e880b95f (Initial commit for deployment)
=======
  const handleClick = (id: string) => {
    if (!introUnlocked) return;
    scrollToSection(id);
    if (isMobile && setSidebarOpen) {
      setSidebarOpen(false);
    }
>>>>>>> c768ebde (실적추가)
  };

  const menuItems = [
    { id: "about", label: "소개" },
    { id: "process", label: "작업과정" },
    { id: "portfolio", label: "포트폴리오" },
    { id: "works", label: "실적" },
    { id: "contact", label: "문의" },
  ];

  return (
    <>
      {/* ✅ PC용 사이드바 */}
      <aside className="hidden md:block fixed right-0 top-0 h-screen w-1/5 z-50">
        <div className="h-full w-full px-6 pt-20 pb-6 flex flex-col justify-between bg-white/20 backdrop-blur-md backdrop-saturate-150 border-l border-white/30 shadow-lg text-right font-serifTitle text-forest-dark text-lg">
          <div className="text-2xl font-bold text-green-900 mb-0.5">순 숲</div>
          <div className="flex flex-col space-y-6 items-end">
            {menuItems.map((item) => (
              <span
                key={item.id}
                className="cursor-pointer hover:text-forest-light transition"
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </span>
            ))}
          </div>
          <img
<<<<<<< HEAD
HEAD
            src={logoImage}

            src="/public/image/logo.png"
e880b95f (Initial commit for deployment)
=======
            src={logoImage}
>>>>>>> c768ebde (실적추가)
            alt="로고"
            className="w-20 h-20 object-contain mt-6"
          />
        </div>
      </aside>

<<<<<<< HEAD
HEAD
      {/* ✅ 모바일용 사이드바 */}
      {isMobile && isSidebarOpen && (
        <>

      {/* ✅ 모바일용 사이드바 (슬라이드 인) */}
      {isMobile && isSidebarOpen && (
        <>
          {/* 배경 오버레이 */}
e880b95f (Initial commit for deployment)
=======
      {/* ✅ 모바일용 사이드바 */}
      {isMobile && isSidebarOpen && (
        <>
>>>>>>> c768ebde (실적추가)
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen?.(false)}
          />
<<<<<<< HEAD
HEAD
          <aside className="fixed top-0 left-0 h-full w-36 bg-white z-50 shadow-lg p-4">

          {/* 사이드바 본체 */}
          <aside className="fixed top-0 left-0 h-full w-48 bg-white z-50 shadow-lg p-4">
e880b95f (Initial commit for deployment)
=======
          <aside className="fixed top-0 left-0 h-full w-36 bg-white z-50 shadow-lg p-4">
>>>>>>> c768ebde (실적추가)
            <button
              className="mb-6 text-xl"
              onClick={() => setSidebarOpen?.(false)}
            >
              ✕
            </button>
            <div className="text-xl font-bold text-green-900 mb-4">순 숲</div>
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <span
                  key={item.id}
                  className="cursor-pointer hover:text-forest-light transition text-left text-lg"
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </span>
              ))}
            </div>
            <img
<<<<<<< HEAD
 HEAD
              src={logoImage}

              src="/public/image/logo.png"
e880b95f (Initial commit for deployment)
=======
              src={logoImage}
>>>>>>> c768ebde (실적추가)
              alt="로고"
              className="w-20 h-20 object-contain mt-6"
            />
          </aside>
        </>
      )}
    </>
  );
<<<<<<< HEAD
 HEAD
};

export default Sidebar;

}
e880b95f (Initial commit for deployment)
=======
};

export default Sidebar;
>>>>>>> c768ebde (실적추가)

"use client";
import usePageStore from "@/lib/useStore";

export default function Breadcrumb() {
  const { selectedPage, selectedMainPage } = usePageStore();
  
  if (!selectedPage) return null;

  const mainPageText = selectedMainPage || "Recently";
  
  return (
    <div className="text-sm hidden lg:block space-x-2">
      <span className="text-slate-400">{mainPageText}</span>
      <span className="text-slate-200 mx-1">/</span>
      <span className="text-slate-600">{selectedPage}</span>
    </div>
  );
}

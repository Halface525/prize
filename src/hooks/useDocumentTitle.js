import { useEffect } from "react";
import { site } from "../data/site";

/** 设置页面标题：`半面奖 · The Halface Prize` */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.nameZh}` : `${site.nameZh} · ${site.nameEn}`;
  }, [title]);
}

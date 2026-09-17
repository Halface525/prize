import { useState, useEffect } from "react";
import { parseMarkdown } from "../utils/markdown";

/**
 * 拉取并解析 Markdown。路径相对站点 base，子路径部署也能用。
 */
export function useArticle(filePath) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filePath) return;
    let cancelled = false;

    setLoading(true);
    setError(null);

    const url = `${import.meta.env.BASE_URL}${filePath}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`加载失败：${filePath}`);
        return res.text();
      })
      .then((md) => {
        if (cancelled) return;
        const { metadata, content } = parseMarkdown(md);
        setData({ metadata, content });
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [filePath]);

  return { data, loading, error };
}

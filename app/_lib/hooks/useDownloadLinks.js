import { useState, useEffect } from "react";
import { getDownloadLink } from "../data-service";

export default function useDownloadLinks(purchaseItems) {
  const [downloadLinks, setDownloadLinks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!purchaseItems || purchaseItems.length === 0) {
      setLoading(false);
      return;
    }

    const fetchLinks = async () => {
      try {
        const links = {};
        for (const item of purchaseItems) {
          try {
            const url = await getDownloadLink(item.id);
            links[item.id] = url;
          } catch {
            console.error(`Failed to get download link for ${item.id}`, err);
            setError(true); // even if one fails
          }
        }
        setDownloadLinks(links);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, [purchaseItems]);

  return { downloadLinks, loading, error };
}



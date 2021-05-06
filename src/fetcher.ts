export const fetcher = async (url: string, init?: RequestInit) => {
  const res = await fetch(url, init);

  if (res.status !== 200) {
    const text = await res.text();

    try {
      const json = JSON.parse(text);
      throw new Error(json.error || json.message || "Error making request");
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw new Error(text || "Error making request");
      }

      throw e;
    }
  }

  return res.json();
};

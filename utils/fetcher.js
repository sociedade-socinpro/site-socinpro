export async function fetcher(path, init = {}) {
  const baseUrl = process.env.API_URL;

  const url = `${baseUrl}${path}`;

  const res = await fetch(url, {
    ...init,
    headers: {
      ...init.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscar ${url}: ${res.status}`);
  }

  return res.json();
}

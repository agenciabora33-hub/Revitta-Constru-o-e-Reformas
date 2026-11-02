/**
 * Script to submit canonical URLs to IndexNow API (Bing, Yandex, Seznam, Naver)
 * Usage: npx tsx scripts/indexnow.ts
 */

const HOST = 'revittacaxias.com.br';
const KEY = 'revitta88c42a59a72e413ba0c31d683a9926df';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/reformas-residenciais-caxias-do-sul/`,
  `https://${HOST}/reformas-comerciais-caxias-do-sul/`,
  `https://${HOST}/manutencao-predial-caxias-do-sul/`,
  `https://${HOST}/eletricista-caxias-do-sul/`,
  `https://${HOST}/encanador-caxias-do-sul/`,
  `https://${HOST}/pedreiro-caxias-do-sul/`,
  `https://${HOST}/pintor-caxias-do-sul/`,
  `https://${HOST}/drywall-caxias-do-sul/`,
  `https://${HOST}/piso-vinilico-caxias-do-sul/`,
  `https://${HOST}/conserto-telhado-caxias-do-sul/`,
  `https://${HOST}/faz-tudo-caxias-do-sul/`,
  `https://${HOST}/trabalhe-conosco/`
];

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS
  };

  console.log(`[IndexNow] Submitting ${URLS.length} URLs to api.indexnow.org...`);

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log(`[IndexNow] Response status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log('[IndexNow] URLs submitted successfully!');
    } else {
      const text = await res.text();
      console.warn('[IndexNow] Non-200 response:', text);
    }
  } catch (err) {
    console.error('[IndexNow] Error submitting to IndexNow:', err);
  }
}

submitIndexNow();

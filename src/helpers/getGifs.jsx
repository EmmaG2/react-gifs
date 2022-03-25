export const getGifs = async (category) => {
  let gifData = []

  const key = 'DG0KWU3807B5';
  const search = 'random';
  const searchParam = category;
  const limit = 30;

  const url = `https://g.tenor.com/v1/${search}?q=${encodeURI(searchParam)}&key=${key}&limit=${limit}`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  for (let i = 0; i < limit; i++) {
    const id = results[i]?.id
    const url = results[i]['media'][0]['mediumgif']['url'];

    gifData.push({url, id})
  }

  console.log(gifData);
 return gifData
}
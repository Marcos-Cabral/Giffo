export const getGifsByCategory = async (category) => {
    const apiKey = 'MTMQm5y1nBXC3AEwjcYHlTbwMdGixK2h';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            url: img.images.downsized_medium.url,
            title: img.title
        }
    })
    return gifs;
}
// api/news.js
export default async function handler(req, res) {
    const searchQuery = req.query.q || 'india'; // Default to "india" if no query provided
    const apiKey = process.env.VITE_API_KEY_news; // Access the API key securely from Vercel's environment variables
    
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`);
    const data = await response.json();
    
    res.status(response.status).json(data); // Forward the response back to the client
}

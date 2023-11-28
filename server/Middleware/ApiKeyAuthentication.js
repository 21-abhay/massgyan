
const authenticateApiKey = (req, res, next)=> {
    const apiKey = req.headers['api-key'];
    const validApiKey = process.env.API_KEY; // Replace with your actual API key
  
    if (apiKey === validApiKey) {
      next(); // API key is valid, proceed to the route handler
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  }

module.exports = authenticateApiKey;
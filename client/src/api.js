import axios from 'axios';

// ⚠️ Met ici ton URL Railway (ton backend hébergé)
const api = axios.create({
  baseURL: 'https://fullstacktest-production-42ab.up.railway.app/', // remplace par ton vrai lien Railway
});

export default api;

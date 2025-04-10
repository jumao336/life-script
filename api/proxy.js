const axios = require('axios');

module.exports = async (req, res) => {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 处理 OPTIONS 请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 只接受 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '仅支持 POST 请求' });
  }

  try {
    // 将请求转发给目标 API
    const response = await axios({
      method: 'POST',
      url: 'https://life-script-production.up.railway.app/api/generate',
      headers: {
        'Content-Type': 'application/json',
      },
      data: req.body,
      timeout: 120000 // 120秒超时
    });

    // 返回 API 响应
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('代理请求错误:', error.message);
    
    // 返回错误信息
    return res.status(500).json({
      error: '代理请求失败',
      message: error.message
    });
  }
}; 
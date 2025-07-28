export function applyCors(req, res) {
  return new Promise((resolve) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // O restringe según necesidad
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'
    );
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return resolve();
    }
    return resolve();
  });
}

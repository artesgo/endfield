export default async (req, res) => {
  const { reqHandler } = await import('../dist/apps/shop/server/server.mjs');
  return reqHandler(req, res);
};

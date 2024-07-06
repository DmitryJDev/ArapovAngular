export default async (request, context) => {
  return new Response('404 - Page Not Found', { status: 404 });
};

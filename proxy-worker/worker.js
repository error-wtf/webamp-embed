export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const target = url.searchParams.get('url');
    if (!target) {
      return new Response('Usage: ?url=http://stream-url', { status: 400 });
    }

    // Only proxy http:// URLs (no open relay for https)
    if (!target.startsWith('http://')) {
      return new Response('Only http:// URLs allowed', { status: 403 });
    }

    try {
      const resp = await fetch(target, {
        headers: { 'User-Agent': 'Mozilla/5.0 Webamp-Radio-Proxy/1.0' },
        redirect: 'follow',
      });

      const headers = new Headers();
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Content-Type', resp.headers.get('Content-Type') || 'audio/mpeg');
      if (resp.headers.get('Icy-Name')) headers.set('Icy-Name', resp.headers.get('Icy-Name'));

      return new Response(resp.body, { status: resp.status, headers });
    } catch (e) {
      return new Response('Proxy error: ' + e.message, { status: 502 });
    }
  },
};

// Serves the static site from ./public and sends www to the bare domain.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.naturalwineimporters.com") {
      url.hostname = "naturalwineimporters.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};

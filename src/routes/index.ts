/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  return {
    status: 303,
    headers: {
      location: `/ebti`,
    },
  }
}

import type { RequestHandler } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getVariant, searchIcons } from '../../icons';

export const GET: RequestHandler = async ({ params, url, request }) => {
  const variant = url.searchParams.get('variant');
  const query = params.query?.split('.')[0];
  const noFallback = !!params.noFallback;

  let icon = searchIcons(query, false)[0];

  if (icon == null) {
    if (noFallback) {
      return new Response('Resource not found', { status: 404 });
    }

    // By default fallback to railway logo
    icon = searchIcons('Railway', false)[0];
  }

  const file = getVariant(icon, variant);
  const path = '/i/' + file;

  throw redirect(302, path);
};
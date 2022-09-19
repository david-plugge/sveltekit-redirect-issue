import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const redirects: Record<string, string> = {
	'/old-url-param': '/new-url-param',
	'/old-url-param-2': '/new-url-param-2'
};

export const load: LayoutServerLoad = ({ url }) => {
	if (url.pathname in redirects) {
		console.log('should redirect');
		throw redirect(301, redirects[url.pathname]);
	}
};

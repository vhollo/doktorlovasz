export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('hu', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { client } from './sanity';

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
	return builder.image(source);
}

export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('hu', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

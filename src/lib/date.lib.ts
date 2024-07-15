export const formatDate = (date:Date) => {
    return new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(date);
}
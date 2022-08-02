export const truncTitle = (title) => title.length > 42 ? `${title.substring(0, 42)}...` : title;

export const normalizeDate = (date) => new Date(date).toLocaleDateString();

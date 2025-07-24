type DateFormat = 'full' | 'dayMonth';

const options: Record<DateFormat, Intl.DateTimeFormatOptions> = {
    full: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    },
    dayMonth: {
        month: 'long',
        day: 'numeric',
    },
};

const formatDate = (dateStr: string, format: DateFormat = 'full'): string => {
    const date = new Date(dateStr);
    const userLocale = navigator.language || 'en-US';
    return new Intl.DateTimeFormat(userLocale, options[format]).format(date);
};

export default formatDate;

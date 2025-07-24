const timeFormat = (dateTimeString: string): string => {
    const isoString = dateTimeString.replace(' ', 'T');
    const date = new Date(isoString);

    if (isNaN(date.getTime())) return 'Invalid Date';

    const locale = navigator.language || 'en-US';
    const formatter = new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
    });

    return formatter.format(date);
};

export default timeFormat;

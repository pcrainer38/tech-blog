module.exports = {
    format_date: (date) => {
        if (!date) {
            console.log('No date available');
        } else {
        return date.toLocaleDateString();
        }
    },
};
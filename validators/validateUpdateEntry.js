module.exports = data => {
    const {
        title,
        desc
    } = data;

    let error = null;

    if (title.length < 3) error = "Title length is less than 3 characters!";
    if (desc.length < 3) error = "Description length is less than 3 characters!"
    if (desc === null) error = "Description does not exist!";
    if (title === null) error = "Title does not exist!";

    return {
        isValid: error === null,
        error
    };
};
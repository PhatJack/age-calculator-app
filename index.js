const getElement = (id) => document.getElementById(id);

const showError = (errMsgElement, inputElement, textElement, errorMessage) => {
	errMsgElement.textContent = errorMessage;
	errMsgElement.classList.remove("hidden");
	inputElement.classList.add("border-red-400");
	textElement.classList.add("text-red-400");
};

const hideError = (errMsgElement, inputElement, textElement) => {
	errMsgElement.classList.add("hidden");
	inputElement.classList.remove("border-red-400");
	textElement.classList.remove("text-red-400");
};

const validateInput = (input, errMsgElement, textElement, min, max, customErrorMessage) => {
	const value = input.value.trim();
	const isValid = value !== '' && !isNaN(value) && parseInt(value) >= min && parseInt(value) <= max;

	if (value === '') {
		showError(errMsgElement, input, textElement, "This field is required");
	} else if (isValid) {
		hideError(errMsgElement, input, textElement);
	} else {
		const errorMessage = (value < min || value > max) ? customErrorMessage : "Invalid input";
		showError(errMsgElement, input, textElement, errorMessage);
	}

	return isValid;
};
const calculateAge = (inputDate) => {
    const currentDate = new Date();
    const inputDateTime = new Date(inputDate);

    const ageInMilliseconds = currentDate - inputDateTime;
    const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
    const ageInYears = ageInDays / 365.25; // accounting for leap years

    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInDays - (years * 365.25 + months * (365.25 / 12))));

    return { years, months, days };
};

const form = document.getElementById("form");
const yearsResult = document.getElementById("yearsResult");
const monthsResult = document.getElementById("monthsResult")
const daysResult = document.getElementById("daysResult")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const year = document.querySelector('input[name="year"]');
    const month = document.querySelector('input[name="month"]');
    const day = document.querySelector('input[name="day"]');

    if (validateInput(day, getElement("day-error-msg"), getElement("text-day"), 1, 31, "Must be a valid day") &&
        validateInput(month, getElement("month-error-msg"), getElement("text-month"), 1, 12, "Must be a valid month") &&
        validateInput(year, getElement("year-error-msg"), getElement("text-year"), 0, 2024, "Must be a valid year")) {

        const inputDate = `${year.value}-${month.value}-${day.value}`;
        const age = calculateAge(inputDate);
		yearsResult.textContent = age.years
		monthsResult.textContent = age.months
		daysResult.textContent = age.days
        // Do something with the age (e.g., display it)
        console.log("Years:", age.years, "Months:", age.months, "Days:", age.days);
    }
});


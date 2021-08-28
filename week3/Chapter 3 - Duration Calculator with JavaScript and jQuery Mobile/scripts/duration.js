function calculateDuration() {
	var startDateElement = document.getElementById("startDate");
	var startDate = Date.parse(startDateElement.value);
	var endDateElement = document.getElementById("endDate");
	var endDate = Date.parse(endDateElement.value);

	var duration = endDate - startDate;
	duration = duration / (1000 * 3600 * 24);

  	var durationElement = document.getElementById("duration");
	durationElement.innerHTML = duration;
}
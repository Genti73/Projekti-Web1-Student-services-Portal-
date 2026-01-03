document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("applicationForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("formMessage");

            if (name === "" || email === "" || service === "") {
                message.textContent = "Please fill in all fields.";
                message.style.color = "red";
                return;
            }

            if (!email.includes("@")) {
                message.textContent = "Please enter a valid email.";
                message.style.color = "red";
                return;
            }

            message.textContent =
                "Application submitted successfully on " +
                new Date().toLocaleDateString();

            message.style.color = "green";

            form.reset();
        });
    }

});

// ANNOUNCEMENTS
document.addEventListener("DOMContentLoaded", function () {

    const announcementList = document.getElementById("announcementList");

    if (announcementList) {

        const announcements = [
            "Exam registration opens next week",
            "Deadline for scholarship applications",
            "University closed on national holiday"
        ];

        announcements.map(item => {
            const li = document.createElement("li");
            li.textContent = item + " (" + new Date().toLocaleDateString() + ")";
            announcementList.appendChild(li);
        });

        // jQuery effect
        $("#toggleBtn").click(function () {
            $("#announcementList").slideToggle();
        });
    }
});


// CONTACT FORM VALIDATION
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const message = document.getElementById("contactMessage").value.trim();
            const response = document.getElementById("contactResponse");

            if (name === "" || email === "" || message === "") {
                response.textContent = "All fields are required.";
                response.style.color = "red";
                return;
            }

            if (message.length < 10) {
                response.textContent = "Message must be at least 10 characters.";
                response.style.color = "red";
                return;
            }

            response.textContent =
                "Thank you, " + name.toUpperCase() +
                ". Your message was sent on " +
                new Date().toLocaleDateString();

            response.style.color = "green";

            contactForm.reset();
        });
    }
});

//fade-in sectioni 
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("visible");
    });
});



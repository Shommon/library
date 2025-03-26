//Listen for Form Submission
document.getElementById("popupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = this.querySelector('[name="title"]').value;
    const description = this.querySelector('[name="description"]').value;
    console.log('Submit')
    console.log(title)
    console.log(description)

    this.querySelector('form[class="form_container"]').reset();
});





// Open and Close form
function openForm() {
    document.getElementById("popupForm").style.display = "flex";
};

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
};


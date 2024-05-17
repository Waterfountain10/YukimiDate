document.getElementById("helloButton").addEventListener("click", function() {
    // Hide the initial content
    document.getElementById("initialContent").classList.add("hidden");

    // Show the new content
    const newContent = document.getElementById("newContent");
    newContent.classList.remove("hidden");

    // Start the typewriter effect
    const text = "Would you go on a picnic with me?";
    let index = 0;
    const speed = 50; // Adjust typing speed here

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typedText").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            // Show the response buttons after the typewriter effect finishes
            document.getElementById("responseButtons").style.display = "block";
        }
    }

    typeWriter();
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    const container = document.querySelector('.container');
    const button = document.getElementById("noButton");

    // Get the dimensions of the container and the button
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate new position
    const newTop = Math.random() * (containerRect.height - buttonRect.height);
    const newLeft = Math.random() * (containerRect.width - buttonRect.width);

    // Set the new position
    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
});

document.getElementById("yesButton").addEventListener("click", function() {
    // Hide the new content
    document.getElementById("newContent").classList.add("hidden");

    // Show the final content
    const finalContent = document.getElementById("finalContent");
    finalContent.classList.remove("hidden");
});

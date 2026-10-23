<script>
        function sendMessage() {
            var name = document.getElementById("name").value.trim();
            var message = document.getElementById("message").value.trim();
            var result = document.getElementById("result");

            if (name == "" || message == "") {
                result.textContent =
                "Please fill in both boxes.";
            } else {
                result.textContent =
                "Thank you, " + name +
                "! Your message is: " + message;
            }
        }
    </script>



const suggestionList = document.getElementById("suggestion-list");
      const likedSuggestions = new Set();

      function submitSuggestion() {
        const suggestionText = document.getElementById("suggestion-text").value;
        if (suggestionText.trim() !== "") {
          const suggestion = document.createElement("div");
          suggestion.className = "suggestion";
          suggestion.innerHTML = `
                    <p>${suggestionText}</p>
                    <span class="likes">0</span>
                    <button onclick="likeSuggestion(this)" data-liked="false">\u2661</button>
                `;
          suggestionList.appendChild(suggestion);
          document.getElementById("suggestion-text").value = "";
        }
      }

      function likeSuggestion(button) {
        const liked = button.getAttribute("data-liked");
        if (liked === "false") {
          const likesElement = button.parentElement.querySelector(".likes");
          let likes = parseInt(likesElement.textContent);
          likes++;
          likesElement.textContent = likes;
          button.setAttribute("data-liked", "true");
          button.textContent = "\u2661";
          likedSuggestions.add(
            button.parentElement.querySelector("p").textContent
          );
          if (likes === 100) {
            sendNotificationByEmail();
          }
        }
      }

      function sendNotificationByEmail() {
        // Créer une adresse mail sur emailjs.com
        // Utilisez l'API EmailJS pour envoyer l'e-mail de notification
        emailjs.init("user_your_emailjs_user_id"); // Remplacez "your_emailjs_user_id" par votre ID utilisateur EmailJS

        const templateParams = {
          to_email: "test.test@gmail.com", // Adresse e-mail de destination
          message: "La suggestion a atteint 100 j'aimes !", // Le message que vous voulez envoyer
        };

        emailjs
          .send(
            "your_emailjs_service_id",
            "your_emailjs_template_id",
            templateParams
          )
          .then(
            function (response) {
              console.log("E-mail envoyé avec succès : ", response);
            },
            function (error) {
              console.log("Erreur lors de l'envoi de l'e-mail : ", error);
            }
          );
      }

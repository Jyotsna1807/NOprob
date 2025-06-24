function diagnoseSymptoms() {
  const selected = Array.from(document.getElementById("symptoms").selectedOptions).map(opt => opt.value);
  localStorage.setItem("userSymptoms", JSON.stringify(selected));
  window.location.href = "results.html";
}

function searchGoogle() {
  const selected = Array.from(document.getElementById("symptoms").selectedOptions).map(opt => opt.value);
  if (selected.length === 0) {
    alert("Please select at least one symptom to search.");
    return;
  }
  const query = selected.join(" ");
  const url = `https://www.google.com/search?q=${encodeURIComponent(query + " causes and remedies")}`;
  window.open(url, "_blank");
}

function displayResults() {
  const symptoms = JSON.parse(localStorage.getItem("userSymptoms")) || [];
  let output = "";

  const diagnosisData = {
    "fever": {
      diagnosis: "Possible infection (viral/bacterial)",
      remedy: "Stay hydrated, rest, and use a cool compress."
    },
    "fatigue": {
      diagnosis: "Could indicate anemia or thyroid issue.",
      remedy: "Eat iron-rich foods, rest, and hydrate."
    },
    "frequent-urination": {
      diagnosis: "Possible UTI, diabetes, or excess fluids.",
      remedy: "Reduce caffeine, do bladder training, and consult a doctor if it persists."
    },
    "ice-craving": {
      diagnosis: "Pagophagia - often due to iron deficiency.",
      remedy: "Consume more iron-rich foods like spinach, eggs, and legumes."
    },
    "body-pain": {
      diagnosis: "May be due to strain, stress, or deficiency.",
      remedy: "Try warm baths, turmeric milk, massage, rest, and hydration."
    },
    "red-eyes": {
      diagnosis: "May be conjunctivitis or allergy-related.",
      remedy: "Use cold compresses and stay away from allergens."
    },
    "headache": {
      diagnosis: "Could be migraine, stress, or dehydration.",
      remedy: "Rest, hydrate, and avoid loud/noisy environments."
    },
    "cough": {
      diagnosis: "Could be flu, COVID-19, or respiratory infection.",
      remedy: "Drink warm fluids, use ginger tea, and rest."
    },
    "nausea": {
      diagnosis: "May be due to digestive issues or infections.",
      remedy: "Drink ginger tea, eat bland food, rest."
    },
    "anxiety": {
      diagnosis: "Emotional stress or mental health concern.",
      remedy: "Deep breathing, mindfulness, and talking to a trusted person helps."
    }
  };

  symptoms.forEach(symptom => {
    const entry = diagnosisData[symptom];
    if (entry) {
      output += `
        <div class="result-block">
          <h3><i class="fas fa-stethoscope"></i> ${symptom.replace("-", " ").toUpperCase()}</h3>
          <p><i class="fas fa-notes-medical"></i> <strong>Diagnosis:</strong> ${entry.diagnosis}</p>
          <p><i class="fas fa-mortar-pestle"></i> <strong>Home Remedy:</strong> ${entry.remedy}</p>
          <hr>
        </div>
      `;
    }
  });

  document.getElementById("results-box").innerHTML = output || "<p>No matching diagnosis found.</p>";
}

function chatWithJojo() {
  const msg = document.getElementById("userMessage").value.toLowerCase();
  const chatBox = document.getElementById("chatResponse");

  let reply = "I'm here for you!";

  if (msg.includes("fever")) reply = "Make sure you drink water and rest well!";
  else if (msg.includes("thank")) reply = "You're always welcome! 😊";
  else if (msg.includes("covid")) reply = "Stay isolated and monitor your symptoms. Rest is key!";
  else if (msg.includes("sad") || msg.includes("alone")) reply = "You're not alone. I’m right here 💜";
  else if (msg.includes("headache")) reply = "Try resting in a dark room and drink some water.";
  else if (msg.includes("hi") || msg.includes("hello")) reply = "Hi there! I'm Jojo, your health buddy 🤖";

  chatBox.innerHTML = `<p><strong>Jojo:</strong> ${reply}</p>`;
}

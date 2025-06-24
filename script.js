const diagnoses = {
  fever: {
    diagnosis: "Possibly Flu or COVID-19.",
    remedy: "Stay hydrated and rest. Monitor your temperature regularly. Use fever-reducing medications if needed."
  },
  headache: {
    diagnosis: "Migraine or tension headache.",
    remedy: "Rest in a dark room. Use a cold compress. Try deep breathing or gentle massage."
  },
  fatigue: {
    diagnosis: "Could be due to stress or vitamin deficiency.",
    remedy: "Ensure good sleep, eat iron-rich foods, and stay hydrated."
  },
  anxiety: {
    diagnosis: "Signs of emotional stress or anxiety disorder.",
    remedy: "Try meditation, journaling, and talk to someone you trust."
  },
  sadness: {
    diagnosis: "Mild depression or emotional imbalance.",
    remedy: "Stay active, connect with loved ones, or consult a counselor if needed."
  },
  cough: {
    diagnosis: "Cold, bronchitis, or COVID-19.",
    remedy: "Honey with warm water, avoid cold drinks, inhale steam with eucalyptus oil."
  },
  nausea: {
    diagnosis: "Gastric issue or viral infection.",
    remedy: "Ginger tea or sucking on lemon, stay in a cool environment."
  },
  "frequent-urination": {
    diagnosis: "UTI, diabetes, or high fluid intake.",
    remedy: "Avoid caffeine, drink water mindfully, and practice bladder training."
  },
  "ice-craving": {
    diagnosis: "Iron deficiency or Pagophagia.",
    remedy: "Eat spinach, dates, eggs, and fortified cereals."
  },
  "body-pain": {
    diagnosis: "Muscle strain, poor sleep, or nutrient deficiency.",
    remedy: "Try turmeric milk, warm bath, gentle yoga, and hydrate well."
  },
  "red-eyes": {
    diagnosis: "Conjunctivitis or allergy-related irritation.",
    remedy: "Use cold compress, artificial tears, and avoid rubbing eyes."
  }
};

function diagnose() {
  const selected = Array.from(document.getElementById("symptoms").selectedOptions).map(opt => opt.value);
  const typed = document.getElementById("typed-symptoms").value.toLowerCase();

  const allSymptoms = [...selected];
  for (let key in diagnoses) {
    if (typed.includes(key.replace("-", " "))) {
      allSymptoms.push(key);
    }
  }

  if (allSymptoms.length === 0) {
    document.getElementById("result").innerText = "Please select or enter at least one symptom.";
    return;
  }

  let resultText = "";
  allSymptoms.forEach(symptom => {
    if (diagnoses[symptom]) {
      resultText += `🦠 <b>Symptom:</b> ${symptom.replace("-", " ")}<br>
        <b>Diagnosis:</b> ${diagnoses[symptom].diagnosis}<br>
        <b>Home Remedy:</b> ${diagnoses[symptom].remedy}<br><br>`;
    }
  });

  if (resultText === "") resultText = "No strong match found. Please consult a professional.";

  document.getElementById("result").innerHTML = resultText;
}

function searchGoogle() {
  const typed = document.getElementById("typed-symptoms").value.trim();
  const selected = Array.from(document.getElementById("symptoms").selectedOptions).map(opt => opt.value);
  const query = encodeURIComponent((typed || selected.join(" ")) + " symptoms diagnosis");
  window.open("https://www.google.com/search?q=" + query, "_blank");
}

function talkToJojo() {
  alert("Hi, I’m Jojo – your wellness buddy! 😊 I'm still learning, but I'm here to help. Tell me more about how you feel.");
}

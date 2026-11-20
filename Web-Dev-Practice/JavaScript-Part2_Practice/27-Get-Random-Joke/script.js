// JavaScript Logic
const loadBtn = document.getElementById("load-btn");
const resultBox = document.getElementById("result-box");

const fetchJoke = async () => {
  // STEP 1: Jab tak data aa raha hai, user ko "Loading..." dikhao
  resultBox.innerHTML = "<p>⏳ Loading joke from server...</p>";
  loadBtn.disabled = true; // Button lock kar do

  try {
    // STEP 2: Server ko call lagao (Kadam 1: Lifafa lo)
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming");

    // Trap 3 Security Check: Kya server ne 200 OK diya?
    if (!res.ok) {
      throw new Error(`Server Error: ${res.status}`);
    }

    // STEP 3: Lifafe se JSON data nikalo (Kadam 2: Asli Array/Object lo)
    const data = await res.json();
    
    // Yeh API ek array deti hai jiske andar 1 joke object hota hai: [{ setup: "...", punchline: "..." }]
   const { category, type, joke, setup, delivery } = data;

// Check karo joke single line ka hai ya 2-part ka:
const finalJoke = type === "single" ? joke : `${setup} — ${delivery}`;

resultBox.innerHTML = `
  <p><strong>Category:</strong> ${category}</p>
  <p>${finalJoke}</p>
`;

  } catch (err) {
    // STEP 5: Agar internet band hai ya upar koi bhi error aaya, toh seedha yahan koodega
    resultBox.innerHTML = `<p style="color: red;">❌ Failed to load joke: ${err.message}</p>`;
  } finally {
    // STEP 6: Chahe data aaye ya error aaye, aakhri mein button wapas chalu kar do!
    loadBtn.disabled = false;
  }
};

// Button click par async function chala do
loadBtn.addEventListener("click", fetchJoke);
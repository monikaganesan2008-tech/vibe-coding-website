function searchTopic() {
    // Input box-la irundhu text-ah eduthu lowercase-ah mathrom
    let topic = document.getElementById("searchInput").value.trim().toLowerCase();
    let resultElement = document.getElementById("searchResult");

    // Dynamic Validation Check inside Web Elements using If-Else
    if (topic === "") {
        resultElement.innerText = "⚠️ Please enter a topic name!";
        resultElement.style.color = "#e74c3c";
    } 
    else if (topic === "if-else" || topic === "ifelse" || topic === "conditional") {
        resultElement.innerText = "✅ 'If-Else' logic is 100% complete and verified!";
        resultElement.style.color = "#27ae60";
    } 
    else if (topic === "loops" || topic === "for" || topic === "while") {
        resultElement.innerText = "⏳ 'Loops' concept is unlocked! Ready to study next.";
        resultElement.style.color = "#f39c12";
    } 
    else {
        resultElement.innerText = "📚 Topic found in general syllabus. Keep learning!";
        resultElement.style.color = "#2980b9";
    }
}

const loadLessons =()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then((json) => displayLesson(json.data))
};

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    
};


const displayLesson = (lessons) => {
    // 1. get the container 

    const levelContainer=document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // 2. get into every lessons 
    for(let lesson of lessons){

        // 3. create element 
        console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `;
        // 4. append into container 
    
        levelContainer.append(btnDiv);
  }
};
loadLessons()
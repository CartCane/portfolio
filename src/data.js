const data = {
nav : ["About", "Project", "Skills", "Contacts", "Blog"],
 projects: [
    {
        image: "./quiz.png",
        title: "Quiz-App",
        description: "A responsive React-based quiz application that fetches questions from the Open Trivia Database API. Users can test their general knowledge, answer multiple-choice questions, and get instant feedback. At the end of the quiz, the app displays the total score, percentage, and high score, with an option to restart and play again.",
        features: ["Dynamic questions fetched via API", "Multiple-choice answers with instant correctness check", "Score tracking and percentage calculation", "Restart quiz option"],
        tech_stack: ["React", "useReducer", "state-management", "CSS", "Javascript"],
        link: "https://CartCane.github.io/quiz-app"
    },
    {
        image: "./to-do.png",
        title: "To-Do List",
        description: "A simple and efficient To-Do List application built using React and JavaScript. This project allows users to manage their daily tasks with features like adding, editing, deleting, and marking tasks as complete.",
        features: ["✅ Add new task", "✏️ Edit existing tasks", "🗑️ Delete tasks", "📌 Mark tasks as completed", "⚡ Responsive and interactive UI"],
        tech_stack: ["React", "HTML", "CSS", "Javascript"],
        link: "https://CartCane.github.io/my-todo-app"
    },
    {
        image: "./eatNsplit.png",
        title: "EatNSplit App",
        description: "EatNSplit is a user-friendly bill-splitting application built with React and JavaScript. It helps users easily track and split expenses among friends. Perfect for group outings, shared meals, and travel budgeting.",
        features: ["👥 Add friends with names and custom avatars", "➕ Add and split expenses between you and friends", "💰 See who owes whom and how much", "🔄 Dynamic status updates"],
        tech_stack: ["React", "Javascript", "CSS"],
        link: "https://cartcane.github.io/eatNsplit/"
    },
    {
        image: "./movieWiz.png",
        title: "Movie App",
        description: "A simple and user-friendly movie app that lets users search for any movie using the OMDb API and save watched movies in a personal list. It helps users track what they’ve seen and explore movie details easily.",
        features: ["🔍 Movie Search", "✅ Watched Movie List", "🗑️ Remove from Watched List", "🧾 Movie Details View"],
        tech_stack: ["React.js", "vite", "fetch API"],
        link: "https://cartcane.github.io/MovieWizard/"
    }
 ],
 skills: [
    {
        skillDomain: "Frontend",
        tech: ["HTML", "CSS", "Javascript", "React.js", "Redux", "Tailwind CSS", "EJS"]
    },
    {
        skillDomain: "Backend",
        tech: ["Node.js", "Express.js", "PostgreSQL", "Postman"]
    },
    {
        skillDomain: "Devops",
        tech: ["Git", "CI/CD"]
    }
 ],
 footer: {
        title: "Get in touch",
        content: "I'm always open to new opportunities and collaborations. Feel free to reach out with any questions, project inquiries, or simply to connect. I look forward to hearing from you!",
        email: "raghupathyKartik@gmail.com",
        linkedIn: "https://www.linkedin.com/in/karthikeyanr999",
        gitHub: "https://github.com/CartCane"
    }
}

export default data;
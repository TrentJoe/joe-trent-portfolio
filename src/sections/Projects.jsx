export default function Projects(){
  return (
    <section className="projects">
    <h2>Projects</h2>

    <div>
      <h3>Historical Figure Chatbot<img src ="/steve.png" alt = "Steve Irwin Icon" /></h3>
      <p>
        Full-stack chatbot built using React and Express. Implemented RESTful
        APIs to handle communication between frontend and backend and managed
        state to maintain conversational context. Integrated third-party AI services to generate responses in the style of Steve irwin.
        </p>
        <a href="https://github.com/HistoricFigureChatbot/steve-irwin-chatbot.git">
          View on GitHub
        </a>
        <a href= "https://www.steveirwin.tech/">Live Demo</a>
    </div>
    <div>
        <h3>Occupational Health Referral System</h3>
        <p>
          Team-based university project focused on requirements gathering,
          stakeholder interviews, and Agile system design.
        </p>
        <a href="https://github.com/Ace-7854/Computing-In-Business.git">
          View on GitHub
        </a>
      </div>
    
    </section>
  )
}
import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="bg-gray-200 text-gray-800 py-20 about">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About This Assessment
          </h2>
          <p className="text-lg mb-4">
            This assessment was created to demonstrate the ability to understand
            and explain code written in React, as well as to implement various
            features and design elements. The assessment included the following
            tasks:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Creating a separate TypeScript file in the utils folder to fetch
              data using axios.
            </li>
            <li>
              Replacing axios with react-query for data fetching and caching.
            </li>
            <li>Handling errors and loading states with styled components.</li>
            <li>
              Adding a fuzzy search functionality to the Timeline component.
            </li>
            <li>Ensuring responsive design for different screen sizes.</li>
          </ul>
          <p className="text-lg mb-4">
            The goal was to create a user-friendly interface with modern React
            techniques, ensuring a smooth and responsive experience for users.
            The main components include a navbar, a hero section, an about
            section, and a footer.
          </p>
          <p className="text-lg">
            The assessment showcases skills in React development, including
            state management, component styling, responsive design, and
            integrating third-party libraries for enhanced functionality.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

# Markdown Previewer

This is a simple markdown previewer app built using React and the Marked library. The app allows users to enter markdown text in a textarea and preview the rendered HTML in real-time. It satisfies the following user stories:

- User Story #1: I can see a textarea element with a corresponding id="editor".
- User Story #2: I can see an element with a corresponding id="preview".
- User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
- User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type.
- User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
- User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

## Getting started
To get started with the app, you can either:

- View the live demo - [Live](https://steelsnake93.github.io/markdown-previewer  "<[Homepage url]> Live View")
- Clone this repository and run it locally on your machine.
### Prerequisites
To run this app locally, you will need to have the following software installed on your machine:

- Node.js
- npm or yarn package manager
### Installation
To install the app on your local machine, follow these steps:

1. Clone this repository using Git or download the ZIP file.
2. Navigate to the project directory in your terminal or command prompt.
3. Run npm install or yarn to install the required dependencies.
4. Run npm start or yarn start to start the development server.
5. Open your web browser and go to http://localhost:3000 to view the app.
### Usage
To use the app, simply type markdown text into the textarea and the preview will update in real-time. You can also edit the default text to see how it renders in the preview.

### Built with
- React - JavaScript library for building user interfaces
- Marked - Markdown parser and compiler for JavaScript
- Bootstrap - CSS framework for building responsive and mobile-first websites
### Contributing
Contributions are welcome! To contribute to this project, please fork the repository and create a pull request.

### License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/steelsnake93/markdown-previewer/blob/main/LICENSE) file for details.

### Acknowledgments
- This project was inspired by the FreeCodeCamp Markdown Previewer project.
- The default markdown text was taken from the Marked library demo page.
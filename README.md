# Todo List React App

A simple and elegant todo list application built with React and styled with Tailwind CSS. This app allows users to add, edit, delete, and mark tasks as completed with a clean and intuitive interface.

## 🚀 Features

- ✅ Add new todos
- ✏️ Edit existing todos inline
- ❌ Delete todos
- ☑️ Mark todos as completed/uncompleted
- 🎨 Clean and responsive UI with Tailwind CSS
- 📱 Mobile-friendly design

## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript (ES6+)** - Modern JavaScript features
- **HTML5** - Semantic markup
- **CSS3** - Custom styling

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/todo-list-react.git
   cd todo-list-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the app

## 🏗️ Project Structure

```
src/
├── components/
│   └── todo.js          # Individual todo item component
├── App.js               # Main application component
├── App.css              # Custom styles
├── index.js             # React DOM rendering
├── index.css            # Tailwind CSS imports
└── ...other files
```

## 🎯 Usage

1. **Adding a Todo**: Type your task in the input field and click the "+" button or press Enter
2. **Editing a Todo**: Click the edit button (📝) next to any todo item to edit it inline
3. **Completing a Todo**: Click the checkbox to mark a todo as completed
4. **Deleting a Todo**: Click the delete button (❌) to remove a todo

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🎨 Styling

This project uses Tailwind CSS for styling. The main styling features include:

- Responsive design that works on desktop and mobile
- Blue color scheme with subtle gradients
- Smooth transitions and hover effects
- Clean typography and spacing

## 📁 Component Architecture

### App Component (`App.js`)

- Main container component
- Manages the todo list state
- Handles adding, editing, deleting, and toggling todos
- Renders the input field and todo list

### Todo Component (`components/todo.js`)

- Individual todo item component
- Handles inline editing functionality
- Manages its own editing state
- Displays todo text, checkbox, and action buttons

## 🔄 State Management

The app uses React's built-in `useState` hook for state management:

- `todos`: Array of todo objects with `id`, `text`, and `completed` properties
- `inputValue`: Current value of the input field
- `isEditing`: Boolean state for each todo item's edit mode
- `editValue`: Temporary value while editing a todo

## 🌟 Key Features Implementation

### Add Todo

- Validates input to prevent empty todos
- Generates unique IDs using `Date.now()`
- Clears input field after adding

### Edit Todo

- Inline editing with input field replacement
- Save on Enter key press or save button click
- Validates edited text before saving

### Toggle Completion

- Visual feedback with strikethrough text
- Checkbox state synchronized with todo completion status

### Delete Todo

- Removes todo from the list with confirmation via button click

## 🔮 Future Enhancements

- [ ] Local storage persistence
- [ ] Drag and drop reordering
- [ ] Categories/tags for todos
- [ ] Due dates and reminders
- [ ] Dark mode toggle
- [ ] Search and filter functionality
- [ ] Export/import todos

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Created with [Create React App](https://github.com/facebook/create-react-app)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons: Unicode emoji characters

---

**Happy Todo Managing! 📝✨**

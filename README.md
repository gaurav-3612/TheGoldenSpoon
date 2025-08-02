# TheGoldenSpoon - A Modern React Restaurant Website

Welcome to the official repository for "My Restaurant," a fully responsive and feature-rich single-page application built with React. This project demonstrates a modern frontend workflow, showcasing a dynamic and interactive user experience. It's more than just a static webpage; it's a comprehensive demonstration of key frontend development skills.

![Restaurant Website Demo](https://placehold.co/800x400/000000/FFFFFF?text=Project+Screenshot+Here)
*(Suggestion: Replace the placeholder above with a screenshot of your running application!)*

---

## ✨ Key Features

This project is packed with features designed to create a professional and engaging user experience:

* **Fully Responsive Design:** Built with Material-UI, the entire application adapts beautifully to any screen size, from mobile phones to desktop monitors.
* **Dynamic Menu Page:**
    * **Live Filtering:** Users can instantly filter the menu by category (e.g., "North Indian," "South Indian").
    * **Live Sorting:** Menu items can be sorted by price (Low to High or High to Low) to help users find exactly what they're looking for.
    * **Quick View Modal:** Clicking on a menu item opens a "Quick View" modal with a larger image and more details, preventing the need for page reloads.
* **Smooth Animations:** Using the **Framer Motion** library, menu items gracefully animate into view, giving the application a polished and modern feel.
* **Functional Contact Form:** The contact page features a real, working contact form that sends messages directly to an email address using the **Web3Forms** third-party service, showcasing the ability to integrate with external APIs without a custom backend.
* **Component-Based Architecture:** The project follows best practices with a clean, organized, and reusable component structure.

---

## 🛠️ Technologies Used

This project was built using a modern frontend stack:

* **React.js:** For building the user interface with a component-based architecture.
* **React Router:** For handling client-side routing and navigation between pages.
* **Material-UI (MUI):** A comprehensive suite of UI tools to help implement Google's Material Design.
* **Framer Motion:** A production-ready motion library for React to create beautiful and smooth animations.
* **Web3Forms:** For handling the contact form submissions without a backend.
* **CSS:** For custom styling and layout adjustments.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need to have [Node.js](https://nodejs.org/en/) and `npm` (Node Package Manager) installed on your machine.

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the application**
    ```sh
    npm start
    ```
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📂 Project Structure

The project follows a standard React application structure:


/src
|-- /components   # Reusable components (Header, Footer, Layout)
|-- /data         # Static data, like the menu list
|-- /images       # Project images and assets
|-- /pages        # Main page components (Home, Menu, About, Contact)
|-- /styles       # Global CSS and component-specific styles
|-- App.js        # Main application component with routing
|-- index.js      # The entry point of the React application

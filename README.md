# Mega Blog

A modern, full-featured blogging platform built with React, Redux, and Appwrite. Create, manage, and share your stories with a beautiful and intuitive interface.

## ✨ Features

- **Authentication System**

  - User sign up and sign in
  - Secure authentication with Appwrite
  - Protected routes for authenticated users

- **Blog Management**

  - Create and publish blog posts
  - View all your own blogs in one place
  - Upload images with your blog posts
  - Rich text editing with TinyMCE editor integration

- **Modern UI/UX**
  - Responsive design with Tailwind CSS
  - Clean and intuitive interface
  - Smooth navigation experience

## 🛠️ Tech Stack

### Frontend

- **React** - JavaScript library for building user interfaces
- **Redux** - State management with Redux store
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **TinyMCE** - Rich text editor for blog content

### Backend

- **Appwrite** - Backend-as-a-Service for authentication, database, and storage

## 🏗️ Architecture

### State Management

The application uses Redux for centralized state management, ensuring predictable state updates across the application.

### Routing

React Router is configured for seamless navigation between pages with protected routes for authenticated users.

### Component Design

Built with reusability in mind:

- Reusable form components
- Custom input field components
- Modular blog components
- Consistent design patterns throughout

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd mega-blog
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your Appwrite credentials:

   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   VITE_TINYMCE_API_KEY=your_tinymce_api_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Usage

1. **Sign Up**: Create a new account to get started
2. **Sign In**: Log in with your credentials
3. **Create Blog**: Click on "Add New Post" to create a blog
4. **Add Content**: Use the TinyMCE editor to write and format your content
5. **Upload Image**: Add a featured image to your blog post
6. **Publish**: Save and publish your blog
7. **View Blogs**: Access all your published blogs from your dashboard


## 🔑 Key Features Explained

### Redux Store

Centralized state management handles:

- User authentication state
- Blog posts data
- Loading states
- Error handling

### Reusable Components

All input fields and form elements are built as reusable components, ensuring:

- Consistency across the application
- Easy maintenance
- Reduced code duplication

### TinyMCE Integration

Rich text editor provides:

- Formatting options (bold, italic, headings)
- Image insertion
- Link management
- HTML content editing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👤 Author

[**ZAS0**](https://github.com/ZAS)

## 🙏 Acknowledgments

- React community for amazing tools and libraries
- Appwrite team for the excellent backend service
- TinyMCE for the rich text editor

---

Made with ❤️ using React and Appwrite

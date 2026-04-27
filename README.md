# 📁 Document Hub

A simple file management web application built using React and Redux.
Users can upload, view, search, and delete files in one place.

---

## 🚀 Features

* 📤 Upload files (images, documents, etc.)
* 🔍 Search files by name
* 🗂 View all uploaded files in grid format
* ❌ Delete files
* 🌐 Files are stored using Cloudinary

---

## 🛠️ Tech Stack

* React (Frontend)
* Redux Toolkit (State Management)
* Cloudinary API (File Upload)
* CSS (Custom styling)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── FileCard.jsx
│   ├── FileList.jsx
│   ├── SearchFilter.jsx
│   └── UploadFile.jsx
│
├── features/
│   └── fileSlice.js
│
├── pages/
│   └── Dashboard.jsx
│
├── app/
│   └── store.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone <your-repo-link>
cd Document-Manager
```

2. Install dependencies

```
npm install
```

3. Run the development server

```
npm run dev
```

---

## 🌐 Cloudinary Setup

* Create a Cloudinary account
* Replace the upload URL in `fileSlice.js`:

```
https://api.cloudinary.com/v1_1/dhymr2x8y/auto/upload
```

* Add your upload preset:

```
formData.append("upload_preset", "ml_default");
```

---

## 📸 Usage

* Click on **Upload File** to add files
* Use the search bar to filter files
* Click **Open** to view file
* Click **Delete** to remove file

---

## 📌 Notes

* Uploaded files are stored online via Cloudinary
* No backend server is used in this project

---

## 🙌 Conclusion

This project demonstrates basic file handling, state management using Redux, and API integration in React.

---

## 👨‍💻 Author

Saiyam Doshi

## Screenshot
<img width="1404" height="816" alt="Screenshot 2026-04-27 135547" src="https://github.com/user-attachments/assets/548815ed-9540-430a-a28e-39e7306dfd80" />

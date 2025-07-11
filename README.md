
# 📝 Vue Post & Comment App

A simple Vue 3 web application that allows users to view, create, edit posts and add comments. The project uses PrimeVue for the UI and Vuex for state management, and interacts with the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.

---

## 🚀 Features

- ✅ Vue 3 + TypeScript + Composition API
- ✅ Vue Router for page navigation
- ✅ Vuex for centralized state management
- ✅ PrimeVue UI components
- ✅ User-based post filtering
- ✅ Create/Edit posts
- ✅ Add comments with form reset and refresh

---

## 📦 Installation

### 1. Clone the repository


### 2. Install dependencies

- npm install

 ### 3. Compiles and hot-reloads for development

 - npm run serve


#### Development Notes
- Uses defineModel() and v-model:prop pattern for clean prop binding in components.
- Comment form clears after successful submission.
- Users must be selected before accessing protected routes like /posts.
- Comments are tied to the currently selected post and dynamically fetched.


 ##### Developer

- Mert Kadir Kayan
- 📧 mertkadirkayan@gmail.com
- 🔗 https://www.linkedin.com/in/mert-kayan-03aba3163/
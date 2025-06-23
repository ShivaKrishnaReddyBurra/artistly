# Artistly - Performing Artist Booking Platform

## Project Overview
Welcome to Artistly, a vibrant platform I built to connect Event Planners and Artist Managers. This application allows event planners to browse artist profiles, shortlist their favorites, and send booking requests. Meanwhile, Artist Managers can onboard artists, manage booking leads, and track responses through a dedicated dashboard.

## Project Pages
- **Homepage**: Features a welcoming hero section, a call-to-action to explore artists, and category cards for Singers, Dancers, Speakers, and DJs, complete with navigation to other pages.
- **Artist Listing Page**: Displays a responsive grid of artist cards with filters for Category, Location, and Price Range, each card showing Artist Name, Category, Price Range, Location, and an "Ask for Quote" button.
- **Artist Onboarding Form**: A multi-section form for artists to input details like Name, Bio, Category (multi-select with checkboxes), Languages Spoken (multi-select), Fee Range (dropdown), optional Profile Image Upload, and Location, with validation and mock submission.
- **Manager Dashboard**: A page with a table listing artist submissions, including Name, Category, City, Fee, and Action buttons, using static data.

## Folder Structure
```
ARTISTLY
├── next
│   └── app
│       ├── artists
│       │   └── page.jsx
│       ├── dashboard
│       │   └── page.jsx
│       ├── onboarding
│       │   └── page.jsx
│       └── page.jsx
├── globals.css
├── layout.jsx
├── page.jsx
├── components
│   ├── artists
│   │   ├── artist-card.jsx
│   │   ├── artist-filters.jsx
│   │   └── artist-listing.jsx
│   ├── dashboard
│   │   ├── manager-dashboard.jsx
│   │   └── home
│   │       └── category-cards.jsx
│   │       ├── featured-artists.jsx
│   │       └── hero.jsx
│   ├── layout
│   │   ├── navbar.jsx
│   │   └── onboard
│   │       └── artist-onboarding-form.jsx
│   └── ui
│       ├── badge.jsx
│       ├── button.jsx
│       ├── card.jsx
│       ├── checkbox.jsx
│       ├── input.jsx
│       ├── label.jsx
│       ├── select.jsx
│       ├── table.jsx
│       ├── textarea.jsx
│       ├── toast.jsx
│       ├── toaster.jsx
│       └── context
│           └── artist-context.jsx
├── hooks
│   └── use-toast.js
├── lib
│   ├── js
│   └── utils.js
├── node_modules
├── public
│   ├── gitignore
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── README.md
│   └── tailwind.config.js
```

## How to Run
To get Artistly.com up and running on your local machine, follow these detailed steps:

1. **Clone the Repository or Download Files**:
   - If using Git, clone the repository with: `git clone <repository-url>`.
   - Alternatively, download the project ZIP file from the source and extract it.

2. **Navigate to the Project Directory**:
   - Open your terminal or command prompt.
   - Change to the project directory by typing: `cd ARTISTLY`.

3. **Install Dependencies**:
   - Ensure you have Node.js and npm installed on your system.
   - Run the following command to install all required packages: `npm install`.
   - This will download and set up the Node modules listed in `package.json`.

4. **Start the Development Server**:
   - Launch the application by running: `npm run dev`.
   - This command starts the Next.js development server, which will automatically compile the project.

5. **Access the Application**:
   - Open your web browser.
   - Visit `http://localhost:3000` to see the app in action.
   - The server will automatically reload if you make changes to the code during development.

6. **Troubleshooting**:
   - If you encounter issues, ensure all dependencies are correctly installed and your Node.js version is compatible (recommended: Node.js 18 or later).
   - Check the terminal for error messages and resolve them accordingly.

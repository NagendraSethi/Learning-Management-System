# LMS Frontend

### Setup instruction

1. Clone the Project
```
    git clone https://github.com/NagendraSethi/Learning-Management-System.git
```

2. Move into the directories
```
    cd Learning-Management-System
    cd frontend
```

3. Install dependencies
```
    npm i
```

4. Run the server
```
    npm run dev
```


### How to setup tailwind in your project [Link](https://tailwindcss.com/docs/guides/vite)

1. Install tailwind and other dependencies
```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create the `tailwind.config.js` file
```
    npx tailwindcss init -p
```

3. Add the files and extesions to tailwind config in the content properties
```
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add tailwind directives inside the `index.css` file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Then run the server, tailwind should be integrated

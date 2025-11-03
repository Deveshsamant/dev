# Devesh Samant Portfolio

Space-themed portfolio website for Devesh Samant - Computer Science student and tech enthusiast.

## 🚀 Deployment to Vercel

This portfolio is optimized for deployment to Vercel. Follow these steps:

### Automatic Deployment (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the React project and deploy it

### Manual Deployment
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### Environment Variables
For the contact form to work, you need to set the following environment variables in your Vercel project settings:
- `GMAIL_USER` - Your Gmail address
- `GMAIL_APP_PASSWORD` - Your Gmail app password (not your regular password)

To generate a Gmail app password:
1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings
3. Navigate to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"

### Vercel Configuration
Vercel will automatically detect this as a Create React App project and deploy it with the default settings. No additional configuration file is needed.

## 🛠️ Development

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm test`
Launches the test runner in the interactive watch mode.

#### `npm run build`
Builds the app for production to the `build` folder.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

#### `npm run dev`
Runs both the React development server and the Express backend server concurrently.

#### `npm run server`
Runs only the Express backend server.

## 📁 Project Structure

```
├── public/
│   ├── images/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   ├── hooks/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── server.js
├── package.json
└── README.md
```

## 🎨 Features

- Responsive design that works on all devices
- Multiple theme options with live switching
- Interactive elements and animations
- Gaming-inspired UI with cosmic aesthetics
- Full React Router implementation
- Progressive Web App (PWA) support
- SEO optimized with meta tags and sitemap
- Optimized for Vercel deployment
- Contact form with email functionality

## 🌐 Technologies Used

- React.js
- React Router
- Express.js
- Nodemailer
- CSS3 with modern features
- Font Awesome Icons
- Devicon Icons
- Google Fonts (Orbitron, Exo 2)

## 📱 PWA Support

This portfolio is a Progressive Web App with:
- Offline support
- Installable on devices
- Fast loading times
- Responsive design

## 🔐 Security

The app follows security best practices:
- Environment variables for sensitive data
- CORS configuration
- Input validation for contact form

## 🚀 Performance Optimizations

- Code splitting
- Lazy loading components
- Optimized images
- Minified CSS and JavaScript
- Gzip compression

## 📞 Contact

For any questions or feedback, please reach out to Devesh Samant.
- Email: aani64257@gmail.com
- LinkedIn: [devesh-samant-b78376258](https://www.linkedin.com/in/devesh-samant-b78376258/)
- GitHub: [Deveshsamant](https://github.com/Deveshsamant)
- Instagram: [devesh.samant](https://www.instagram.com/devesh.samant/)

## 🙏 Acknowledgments

- **Font Awesome** for the amazing icons
- **Google Fonts** for the space-themed typography
- **CSS Grid** and **Flexbox** for the responsive layouts
- **Intersection Observer API** for scroll animations
- **All the developers** who inspired this design

---

*"The future belongs to those who believe in the beauty of their dreams."* - Eleanor Roosevelt

**Exploring the digital cosmos, one line of code at a time.** 🚀✨
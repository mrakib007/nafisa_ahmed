```
/src
  /assets
    /fonts                  # Custom fonts
    /images                 # Static images
      /backgrounds          # Background images
      /icons                # UI icons
      /logo                 # Artist logo
    /videos                 # Video backgrounds or showreels
  /components
    /admin                  # Admin-only components
      AdminDashboard.jsx
      ArtUploadForm.jsx
      LoginForm.jsx
    /animations             # Reusable animation components
      FadeIn.jsx
      SlideIn.jsx
      ParallaxEffect.jsx
    /common                 # Shared components
      Button.jsx
      Footer.jsx
      Header.jsx
      Loader.jsx
      Modal.jsx
      Navigation.jsx
    /forms                  # Form components using Formik
      ContactForm.jsx
      NewsletterForm.jsx
    /layout                 # Layout components
      MainLayout.jsx
      AdminLayout.jsx
      PortfolioLayout.jsx
    /portfolio              # Portfolio-specific components
      ArtworkCard.jsx
      ArtworkDetail.jsx
      ArtworkGrid.jsx
      CategoryFilter.jsx
      StorySection.jsx
  /context                  # React context providers
    AuthContext.jsx
    ThemeContext.jsx
  /hooks                    # Custom React hooks
    useAuth.js
    useScrollAnimation.js
    useTheme.js
  /pages                    # Page components
    /admin
      AdminPage.jsx
      UploadPage.jsx
    /public
      AboutPage.jsx
      ContactPage.jsx
      HomePage.jsx
      NotFoundPage.jsx
      PortfolioPage.jsx
      SingleArtworkPage.jsx
  /routes                   # Routing configuration
    AdminRoutes.jsx
    PublicRoutes.jsx
    ProtectedRoute.jsx
  /services                 # API and service functions
    api.js
    auth.js
    storage.js
  /styles                   # Global styles and theme
    /animations             # Animation keyframes
    /themes                 # Color themes
    global.css
    variables.css
  /utils                    # Utility functions
    formatters.js
    validators.js
  App.jsx                   # Main App component
  index.jsx                 # Entry point
  
/public
  index.html
  favicon.ico
  robots.txt
  
/config                     # Configuration files
  firebase.js               # Firebase config (for storage)
  
/tests                      # Test files
  
package.json
README.md
.env                        # Environment variables
.gitignore
```

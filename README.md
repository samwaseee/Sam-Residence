# SAM's RESIDENCE

>### **[Live Site](https://assignment-9-3c4cb.web.app)**

Welcome to the GitHub repository of SAM's RESIDENCE, a residential real estate themed website.

## Features and Characteristics

1. **Home Page**: Contains a navbar with active routes. The navbar includes the Website name, Home, Properties, Update Profile, and User Profile.
2. **User Profile**: Conditional display based on user login status. If a user is logged in, the user image and a logout button are displayed. If not, a login button is shown.
3. **Update Profile**: A protected route where users can see their information like name, email, photoURL displayed in a form. They can edit name and photoURL and save the changes using Firebase's updateProfile() method.
4. **Footer**: Contains all relevant information with an eye-catching design. The navbar and footer are displayed on every route.
5. **Login Page**: Redirects from the navbar. Uses email and password-based authentication for login. Also provides Google and GitHub/Facebook/Twitter login options.
6. **Register Page**: Uses email and password-based authentication for registration. The password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.
7. **Banner**: Contains a Swiper slider with a minimum of 3 slides.
8. **Estate Section**: Displays a minimum of 4 and a maximum of 9 estates with detailed information for each estate.
9. **Estate Details**: Protected route that displays detailed information about the selected estate.
10. **Stats Section**: Displays website user stats and popular areas for residence.
11. **404 Page**: A dedicated page for not found errors.
12. **Dynamic Title**: Each page has a dynamic title.
13. **Explore Section**: A section after the banner for users to explore more about the website.
14. **Authentication**: Uses Firebase authentication for email, Google, and GitHub-based authentication. It also uses the React Context API for the auth provider.
15. **Routing**: Uses the React Router concept for routing to different pages.
16. **User Information**: Once a user is logged in, user information will show on the navbar even if he/she reloads the website.
17. **Loader**: A loader is displayed when the logged-in user info is in a loading state.
18. **JSON Data**: The website uses JSON data for the Estate Section.
19. **Deployment**: The website is deployed on Firebase.

## NPM Packages Used

- AOS Package
- Animate.css
- Swiper slider

## Authentication

The website uses Firebase authentication for email, Google, and GitHub-based authentication. It also uses the React Context API for the auth provider. The onAuthStateChanged method of Firebase is used to maintain user information on the navbar even after reloading the website.

## Routing

The website uses the React Router concept for routing to different pages.

## Future Enhancements

Stay tuned for future enhancements and features!


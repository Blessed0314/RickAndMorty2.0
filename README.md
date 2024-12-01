# Rick and Morty App

This project is a web application developed with **React** that consumes the Rick and Morty API to display information about the series' characters.

---

## 🛠️ Features

- **Character List**: Displays information such as image, name, species, and location.
- **Pagination**: Smooth navigation between different character pages.
- **Navigation Bar**: Includes the application name.
- **Unit Testing**: Implemented with **Jest** and **React Testing Library**.
- **Code Quality Analysis**: Using **SonarCloud** to maintain quality standards.

---

## 🚀 Technologies Used

The following technologies were employed in the project:

1. **React**  
   A JavaScript library for building user interfaces.  
   Documentation: [React Docs](https://reactjs.org/)

2. **Axios**  
   A promise-based HTTP client for making requests to the Rick and Morty API.  
   Documentation: [Axios Docs](https://axios-http.com/)

3. **Jest**  
   A JavaScript testing framework for unit testing.  
   Documentation: [Jest Docs](https://jestjs.io/)

4. **React Testing Library**  
   A testing tool focused on how users interact with the UI.  
   Documentation: [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)

5. **SonarCloud**  
   A platform for code quality and security analysis.  
   Documentation: [SonarCloud Docs](https://sonarcloud.io/)

6. **Vite**  
   A fast build tool for frontend development and production.  
   Documentation: [Vite Docs](https://vitejs.dev/)

7. **AWS S3**  
   A cloud storage service used to deploy the application.  
   Documentation: [AWS S3 Docs](https://aws.amazon.com/s3/)

8. **Google Notification Service**  
   A service used to manage notifications in the application.  
   Documentation: [Google Notification Service Docs](https://firebase.google.com/docs/cloud-messaging)

9. **Google API**  
   Integrated API to manage notifications and fetch relevant data for the application.  
   Documentation: [Google API Docs](https://developers.google.com/apis-explorer)

---

## 🌐 Deployment

The application is deployed on **AWS S3 Bucket** and is publicly accessible via a configured domain.  
Additionally, it integrates **Google Notification Service** to send notifications to users.

### Deployment Strategy: Blue-Green Deployment
The deployment uses the **Blue-Green Deployment** strategy, ensuring a controlled and secure process for releasing new application versions. This approach includes two main environments:

1. **Development Environment (Blue):**  
   - Used for testing and validating new features.  
   - Allows exhaustive testing, including unit and integration tests.  
   - User Stories (US) are validated and verified in this environment by the QA team, ensuring they meet the defined acceptance criteria.

2. **Production Environment (Green):**  
   - Once new features are stable and meet the acceptance criteria and QA validations, the application is transitioned to the production environment.  
   - This minimizes downtime and ensures a seamless transition for end-users.

### Validation Process
- The development environment serves as a testing space to ensure the stability and functionality of new implementations.  
- After QA approval and confirmation that the US criteria are met, deployment to production (Green) proceeds.  

This methodology guarantees a stable end-user experience and reduces the risk of production issues.

---

## 📝 Installation

Follow these steps to configure and run the project locally:

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/your-username/rick-and-morty-app.git

2. **Navigate to the project directory:**:
    ```sh
    cd rick-and-morty-app
3. **Install dependencies:**:
    ```sh
    npm install
---
## Usage

1. **Start the application in development mode:**:  
   ```sh
   npm run dev

2. Open your browser and go to [http://localhost:3000](http://localhost:3000)

---


## 📜 Available Scripts


- **Start the application in development mode:**:  
   ```sh
   npm run dev
- **Build the application for production:**:
    ```sh
    npm run build
- **Preview the built application:**:
    ```sh
    Previsualiza la aplicación construida.
- **Run ESLint to analyze the code:**:
    ```sh
    npm run lint
- **Run unit tests with Jest:**:
    ```sh
    npm run test

---

## 🧪 Testing

- **To run unit tests, use the following command:**:  
   ```sh
   npm run test

---
## ⚙️ CI/CD Configuration

This project uses GitHub Actions and Azure Pipelines for continuous integration and delivery.

- **GitHub Actions configuration files are located in:**:
    ```sh
    .github/workflows

- **Azure Pipelines configuration can be found in:**:
    ```sh
    azure-pipelines.yml


## 🤝 Contributions

Contributions are welcome!

Follow these steps to contribute:

1. **Fork the repository.**:  

2. **Make changes in a new branch.**:

3. **Open a pull request explaining your proposed changes.**:

Before contributing, please open an issue to discuss your ideas.


---


## 👥 Contributors

Thanks to everyone who has contributed to this project.  

| Name             | Rol                     | Contact                     |
|--------------------|-------------------------|------------------------------|
| [LEÓN DENIS DOMÍNGUEZ](#)      | Developer | [GitHub](https://github.com/leondominguez) |
| [JEAN HEYLLER PALOMINO](#)      | Developer        | [GitHub](https://github.com/jean-heyller) |
| [CHRISTIAN DANIEL VILLEGAS](#)      | DevOps                 | [GitHub](https://github.com/Blessed0314) |
| [JUAN MIGUEL ROJAS](#)      | Testing                 | [GitHub](https://github.com/JuanMiguelRojas96) |
| [MARGARITA  GRISALES TONUZCO](#)      | Developer                 | [GitHub](https://github.com/MargaritaGrisales) |
| [DANIEL ARIAS CASTRILLON](#)      | Developer                 | [GitHub](https://github.com/Danii-26) |
| [ZAIRA DANIELA NAVIA](#)      | Developer                 | [GitHub](https://github.com/adz33) |
| [LESLI ESMITH MARTINEZ](#)      | Developer                 | [GitHub](https://github.com/LesliMartinez) |

If you'd like to appear on this list, contribute to the project and leave your mark!  
# SecurePass Frontend

## Project Description

The SecurePass frontend is built using React.js and provides a user-friendly interface for managing passwords securely. It interacts with the SecurePass backend API to store, retrieve, and manage encrypted passwords using AES-256 encryption.

## Live Demo

Check out the live demo of the project [here](https://securepass-password-manager.netlify.app/).

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework for building responsive and customizable components.
- **Bootstrap**: A CSS framework for designing responsive web applications.

## Related Repositories

- **SecurePass Backend**: The backend API for SecurePass, built using Node.js and Express. You can find the repository [here](https://github.com/SagarBhoi404/Securepass-Password-Manager-Backend).


## Installation

### Prerequisites:

- Node.js and npm installed on your machine.
- Access to the SecurePass backend API.

### Steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/SagarBhoi404/Securepass-Password-Manager-Frontend.git
    cd Securepass-Password-Manager-Frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```
3. **Set Up Backend API URL**:
    - Open the `constant.js` file in the `src` directory.
    - Set the `API_BASE_URL` variable to your backend API URL:
    ```javascript
    export const API_BASE_URL = 'http://localhost:5000';
    ```

4. **Start the application**:
    ```sh
    npm run dev
    ```

5. **Open the application**:
    - Open your browser and go to `http://localhost:5173` to see SecurePass in action.

## Usage

1. **Launch the Application**: Run `npm run dev` to launch the SecurePass frontend.
2. **Register and Log In**: Create a new account or log in to your existing account.
3. **Manage Passwords**: Add, edit, search, and delete your passwords. All data is encrypted using your personal AES key.

## Screenshots

![Screenshot](https://res.cloudinary.com/deejomzni/image/upload/v1724905389/Securepass-Password-Manager/Screenshot_25_g25lxo.png)
![Screenshot](https://res.cloudinary.com/deejomzni/image/upload/v1724905389/Securepass-Password-Manager/Screenshot_26_jdtm8w.png)


![Screenshot](https://res.cloudinary.com/deejomzni/image/upload/v1724905389/Securepass-Password-Manager/Screenshot_27_af6irm.png)

![Screenshot](https://res.cloudinary.com/deejomzni/image/upload/v1724905388/Securepass-Password-Manager/Screenshot_28_rp4del.png)

![Screenshot](https://res.cloudinary.com/deejomzni/image/upload/v1724905388/Securepass-Password-Manager/Screenshot_29_s5wddt.png)

![Screenshot](https://res.cloudinary.com/deejomzni/image/upload/v1724905389/Securepass-Password-Manager/Screenshot_30_vfnt2a.png)

![Screenshot](https://res.cloudinary.com/deejomzni/image/upload/v1724905389/Securepass-Password-Manager/Screenshot_31_ddsaip.png)



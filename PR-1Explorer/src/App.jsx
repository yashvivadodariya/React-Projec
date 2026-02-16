import UserProfileCard from './Component/UserProfileCard';
import './App.css';

function App() {
  return (
    <div>
      <h1>Users</h1>

      <div className="users-container">
        <UserProfileCard
          profilePic="https://thepicturesdp.in/wp-content/uploads/2025/07/profile-pic-for-instagram-for-girl-14.jpg"
          name="Shreya Pal"
          jobRole="Receptionist"
          address="surat, Gujarat."
          moblieNo="1234567890"
          email="siyu@gmail"
        />

        <UserProfileCard
          profilePic="https://thepicturesdp.in/wp-content/uploads/2025/07/profile-pic-for-instagram-for-girl-14.jpg"
          name="Hetal Pal"
          jobRole="Editor"
          address="kamrej, Gujarat."
          moblieNo="1234567890"
          email="hetal@gmail"
        />
        <UserProfileCard
          profilePic="https://thepicturesdp.in/wp-content/uploads/2025/07/profile-pic-for-instagram-for-girl-14.jpg"
          name="Hetal Pal"
          jobRole="Editor"
          address="kamrej, Gujarat."
          moblieNo="1234567890"
          email="hetal@gmail"
        />

        <UserProfileCard
          profilePic="https://thepicturesdp.in/wp-content/uploads/2025/07/profile-pic-for-instagram-for-girl-14.jpg"
          name="Yashvi Pal"
          jobRole="Designer"
          address="vesu, Guajarat."
          moblieNo="1234567890"
          email="yashu@gmail"
        />
      </div>
    </div>
  );
}

export default App;

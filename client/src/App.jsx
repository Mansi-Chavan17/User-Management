// import { useContext, useState } from "react";
// import './App.css';
// import { AppContext } from "./context/AppContext";
// import axios from "axios";

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     title: '',
//     imageUrl: '',
//     linkedin: '',
//     twitter: ''
//   });

//   const { user: residents, backend_url, fetchData } = useContext(AppContext);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.firstName || !form.lastName || !form.title) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const newResident = {
//       ...form,
//       id: Date.now()
//     };

//     try {
//       await axios.post(`${backend_url}/profiles/add-user`, newResident);
//       fetchData(); // refresh list after adding
//     } catch (err) {
//       console.error("Failed to add resident:", err);
//     }

//     setForm({
//       firstName: '',
//       lastName: '',
//       title: '',
//       imageUrl: '',
//       linkedin: '',
//       twitter: ''
//     });

//     setShowModal(false);
//   };

//   const handleModalClose = (e) => {
//     if (e.target === e.currentTarget) {
//       setShowModal(false);
//     }
//   };

//   return (
//     <div className="app">
//       <header className="header">
//         <h1>Residents Book</h1>
//       </header>

//       <button className="add-resident-btn" onClick={() => setShowModal(true)}>
//         Add New Resident
//       </button>

//       {residents.length === 0 ? (
//         <div className="empty-state">
//           <div className="empty-state-icon">👥</div>
//           <h3>No residents added yet</h3>
//           <p>Click "Add New Resident" to get started with your community directory</p>
//         </div>
//       ) : (
//         <div className="resident-list">
//           {residents.map((resident, index) => (
//             <div key={resident.id || index} className="resident-card">
//               <img
//                 src={
//                   resident.imageUrl ||
//                   'https://via.placeholder.com/80/3182ce/white?text=' +
//                     (resident.firstName?.[0] || 'U') +
//                     (resident.lastName?.[0] || '')
//                 }
//                 alt={`${resident.firstName} ${resident.lastName}`}
//                 className="resident-avatar"
//               />
//               <h3 className="resident-name">{resident.firstName} {resident.lastName}</h3>
//               <p className="resident-title">{resident.title}</p>

//               <div className="resident-links">
//                 {resident.linkedin && (
//                   <a
//                     href={resident.linkedin.startsWith('http') ? resident.linkedin : `https://${resident.linkedin}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="social-link"
//                   >
//                     LinkedIn
//                   </a>
//                 )}
//                 {resident.twitter && (
//                   <a
//                     href={resident.twitter.startsWith('http') ? resident.twitter : `https://${resident.twitter}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="social-link"
//                   >
//                     Twitter
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {showModal && (
//         <div className="modal-overlay" onClick={handleModalClose}>
//           <div className="modal-content">
//             <div className="modal-header">
//               <h2 className="modal-title">Add New Resident</h2>
//               <p className="modal-subtitle">Fill in the details below to add a new community member</p>
//             </div>

//             <form onSubmit={handleSubmit} className="resident-form">
//               <div className="form-group">
//                 <label htmlFor="firstName" className="form-label required">First Name</label>
//                 <input
//                   id="firstName"
//                   name="firstName"
//                   type="text"
//                   value={form.firstName}
//                   onChange={handleChange}
//                   placeholder="Enter first name"
//                   className="form-input"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="lastName" className="form-label required">Last Name</label>
//                 <input
//                   id="lastName"
//                   name="lastName"
//                   type="text"
//                   value={form.lastName}
//                   onChange={handleChange}
//                   placeholder="Enter last name"
//                   className="form-input"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="title" className="form-label required">Title / Role</label>
//                 <input
//                   id="title"
//                   name="title"
//                   type="text"
//                   value={form.title}
//                   onChange={handleChange}
//                   placeholder="e.g. Software Engineer, Designer"
//                   className="form-input"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="imageUrl" className="form-label">Profile Image URL</label>
//                 <input
//                   id="imageUrl"
//                   name="imageUrl"
//                   type="url"
//                   value={form.imageUrl}
//                   onChange={handleChange}
//                   placeholder="https://example.com/image.jpg"
//                   className="form-input"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="linkedin" className="form-label">LinkedIn Profile</label>
//                 <input
//                   id="linkedin"
//                   name="linkedin"
//                   type="url"
//                   value={form.linkedin}
//                   onChange={handleChange}
//                   placeholder="https://linkedin.com/in/username"
//                   className="form-input"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="twitter" className="form-label">Twitter Profile</label>
//                 <input
//                   id="twitter"
//                   name="twitter"
//                   type="url"
//                   value={form.twitter}
//                   onChange={handleChange}
//                   placeholder="https://twitter.com/username"
//                   className="form-input"
//                 />
//               </div>

//               <div className="form-buttons">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                 >
//                   Add Resident
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import { useContext, useState } from "react";
import './App.css';
import { AppContext } from "./context/AppContext";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    Role: '',      // Changed from 'title' to 'Role' to match server model
    image: '',     // Changed from 'imageUrl' to 'image' to match server model
    linkedIn: '',  // Changed from 'linkedin' to 'linkedIn' to match server model
    twitter: ''
  });

  const { user: residents, backend_url, fetchData } = useContext(AppContext);

  // Defensive: ensure residents is an array
  const safeResidents = Array.isArray(residents) ? residents : [];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.Role) {
      alert("Please fill in all required fields.");
      return;
    }

    const newResident = {
      ...form
      // Remove id as it should be generated by the server
    };

    try {
      await axios.post(`${backend_url}/profiles/add-user`, newResident);
      fetchData(); // refresh list after adding
    } catch (err) {
      console.error("Failed to add resident:", err);
    }

    setForm({
      firstName: '',
      lastName: '',
      Role: '',
      image: '',
      linkedIn: '',
      twitter: ''
    });

    setShowModal(false);
  };

  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Residents Book</h1>
      </header>

      <button className="add-resident-btn" onClick={() => setShowModal(true)}>
        Add New Resident
      </button>

      {safeResidents.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">👥</div>
          <h3>No residents added yet</h3>
          <p>Click "Add New Resident" to get started with your community directory</p>
        </div>
      ) : (
        <div className="resident-list">
          {safeResidents.map((resident, index) => (
            <div key={resident._id || index} className="resident-card">
              <img
                src={
                  resident.image ||
                  'https://via.placeholder.com/80/3182ce/white?text=' +
                    (resident.firstName?.[0] || 'U') +
                    (resident.lastName?.[0] || '')
                }
                alt={`${resident.firstName} ${resident.lastName}`}
                className="resident-avatar"
              />
              <h3 className="resident-name">{resident.firstName} {resident.lastName}</h3>
              <p className="resident-title">{resident.Role}</p>

              <div className="resident-links">
                {resident.linkedIn && (
                  <a
                    href={resident.linkedIn.startsWith('http') ? resident.linkedIn : `https://${resident.linkedIn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    LinkedIn
                  </a>
                )}
                {resident.twitter && (
                  <a
                    href={resident.twitter.startsWith('http') ? resident.twitter : `https://${resident.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Add New Resident</h2>
              <p className="modal-subtitle">Fill in the details below to add a new community member</p>
            </div>

            <form onSubmit={handleSubmit} className="resident-form">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label required">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label required">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="Role" className="form-label required">Title / Role</label>
                <input
                  id="Role"
                  name="Role"
                  type="text"
                  value={form.Role}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer, Designer"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="image" className="form-label">Profile Image URL</label>
                <input
                  id="image"
                  name="image"
                  type="url"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="linkedIn" className="form-label">LinkedIn Profile</label>
                <input
                  id="linkedIn"
                  name="linkedIn"
                  type="url"
                  value={form.linkedIn}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="twitter" className="form-label">Twitter Profile</label>
                <input
                  id="twitter"
                  name="twitter"
                  type="url"
                  value={form.twitter}
                  onChange={handleChange}
                  placeholder="https://twitter.com/username"
                  className="form-input"
                />
              </div>

              <div className="form-buttons">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Resident
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

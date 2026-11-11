import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../static/Reg.css';

export default function Reg() {
  const [form, setForm] = useState({ name: '', username: '', email: '', phn: '', dob: '', gender: '', address: '', password: '', confirmpassword: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.password !== form.confirmpassword) { setError(true); setMessage('Your passwords do not match. Please try again.'); return; }
    if (!/^\d{10}$/.test(form.phn)) { setError(true); setMessage('Enter a valid 10-digit mobile number.'); return; }
    const users = JSON.parse(localStorage.getItem('veera_demo_users') || '[]');
    if (users.some((user) => user.email.toLowerCase() === form.email.toLowerCase())) { setError(true); setMessage('An account with this email already exists.'); return; }
    users.push({ name: form.name, username: form.username, email: form.email, phn: form.phn, dob: form.dob, gender: form.gender, address: form.address, password: form.password });
    localStorage.setItem('veera_demo_users', JSON.stringify(users));
    setError(false); setMessage('Account created for this demo! You can now log in.');
    setForm({ name: '', username: '', email: '', phn: '', dob: '', gender: '', address: '', password: '', confirmpassword: '' });
  };
  return <div className="auth-page"><div className="auth-aside"><p className="eyebrow">WELCOME TO VEERA</p><h1>Your next<br/>favourite thing<br/><em>starts here.</em></h1><p>Make room for pieces that feel as good as they look.</p><div className="aside-mark">V.</div></div><div className="reg-container"><form className="reg-form" onSubmit={handleSubmit}>
    <p className="eyebrow">LET'S GET YOU STARTED</p><h2 className="reg-title">Create your account</h2><p className="form-subtitle">A few details and you’re all set.</p>
    <div className="form-grid"><label className="reg-label">Full name<input className="reg-input" type="text" name="name" placeholder="e.g. Devender Mogurla" value={form.name} onChange={update} autoComplete="name" required /></label>
    <label className="reg-label">Username<input className="reg-input" type="text" name="username" placeholder="Choose a username" value={form.username} onChange={update} autoComplete="username" required /></label>
    <label className="reg-label">Email address<input className="reg-input" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={update} autoComplete="email" required /></label>
    <label className="reg-label">Mobile number<input className="reg-input" type="tel" name="phn" placeholder="10-digit mobile number" value={form.phn} onChange={update} pattern="[0-9]{10}" maxLength="10" inputMode="numeric" required /></label>
    <label className="reg-label">Date of birth<input className="reg-input" type="date" name="dob" value={form.dob} onChange={update} required /></label>
    <label className="reg-label">Gender<select className="reg-input" name="gender" value={form.gender} onChange={update} required><option value="" disabled>Select gender</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option><option value="prefer-not-to-say">Prefer not to say</option></select></label>
    <label className="reg-label full-width">Address<textarea className="reg-input reg-textarea" name="address" placeholder="Street, city, state" value={form.address} onChange={update} required /></label>
    <label className="reg-label">Password<input className="reg-input" type="password" name="password" placeholder="At least 8 characters" value={form.password} onChange={update} minLength="8" autoComplete="new-password" required /></label>
    <label className="reg-label">Confirm password<input className="reg-input" type="password" name="confirmpassword" placeholder="Enter it again" value={form.confirmpassword} onChange={update} minLength="8" autoComplete="new-password" required /></label></div>
    {message && <p className={`form-message ${error ? 'error' : 'success'}`} role="status">{message}</p>}
    <button className="reg-btn" type="submit">Create account <span>↗</span></button><p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p><p className="demo-note">Demo only: account details are saved in this browser, not a secure production database.</p>
  </form></div></div>;
}

// src/components/Auth/LoginForm.tsx
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeUser = 'testuser';
    dispatch(login(fakeUser));
    navigate('/');
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
      ID : <input type="text" placeholder="Username" required />
      </div>
      <div>
      PW : <input type="password" placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

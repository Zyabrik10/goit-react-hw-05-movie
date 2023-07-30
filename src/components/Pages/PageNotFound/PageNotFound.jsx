import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function PageNotFound() {
  const navigate = useNavigate();
  useEffect(() => navigate('/'), [navigate]);
  return <></>;
}

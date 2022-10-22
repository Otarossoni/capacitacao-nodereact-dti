import { Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { LoginContainer } from './login.styles';

const Login = () => {
  const { palette } = useTheme();
  return (
    <LoginContainer>
      <Typography variant="h4" color={palette.primary.main}>
        Aplicativo Finança
      </Typography>

      <Typography variant="subtitle1" color={palette.primary.light}>
        Faça o Login e use
      </Typography>
    </LoginContainer>
  );
};

export default Login;

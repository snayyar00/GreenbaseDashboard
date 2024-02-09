import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Input from 'src/components/forms/input/Input';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const color = {
    grey: theme.palette.themeColor.grey,
    blue: theme.palette.themeColor.blue,
    lightGrey: theme.palette.themeColor.lightGrey,
  };

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = () => {
    router.push('/dashboard');
  };

  const handleChange = (e, setValue) => {
    const value = e.target.value;
    setValue(value);
  };
  const renderForm = (
    <>
      <Stack spacing={3}>
        <Input
          placeholder="Email address"
          onChange={(e) => {
            handleChange(e, setEmail);
          }}
          label="Email"
          type="text"
          value={email}
        />
        <Input
          placeholder="Create Password"
          onChange={(e) => {
            handleChange(e, setPassword);
          }}
          label="Password"
          type="password"
          value={password}
        />
      </Stack>

     
      <Stack>
        <Button
          sx={{ bgcolor: color.blue, my: 3, color: '#ffff', borderRadius: '5px' }}
          onClick={handleClick}
        >
          {' '}
          Create Account
        </Button>
      </Stack>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Create an Account
          </Typography>

          <Typography variant="body2" sx={{ textAlign: 'center', mb: 4 }}>
            Have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              sign in
            </Link>
          </Typography>

          
          {renderForm}
          <Typography variant="body2" sx={{ textAlign: 'center', color: color.grey }}>
            By creating account, you agree to our
          </Typography>
          <Typography sx={{ textAlign: 'center', color: color.blue }}>
            <Link variant="body2" underline="hover">
              Terms of Service
            </Link>
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <Typography variant="body2" sx={{ textAlign: 'center', my: 2, color: color.grey }}>
            Or create an account using:
          </Typography>
          <Stack sx={{}}>
            <Button
              sx={{
                color: color.blue,
                borderColor: color.lightGrey,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '5px',
              }}
            >
              <img src='/assets/images/logos/google.png' alt="" />
              <Typography variant="body2" sx={{ textAlign: 'center', ml: 2, color: color.blue }}>
              Continue with Google
          </Typography>
            </Button>
            <Button
              sx={{
                color: color.blue,
                borderColor: color.lightGrey,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '5px',
                mt: 1,
              }}
            >
              <img src="/assets/images/logos/fb_icon.png" alt="" />
              <Typography variant="body2" sx={{ textAlign: 'center', ml: 2, color: color.blue }}>
              Continue with Facebook
          </Typography>
             
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}

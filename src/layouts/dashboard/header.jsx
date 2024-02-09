import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { OutlinedInput,InputAdornment } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import Logo from 'src/components/logo';



// import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import { HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import NotificationsPopover from './common/notifications-popover';


// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}
       <Logo sx={{ my:'auto' , mr: 12 }} />

       <OutlinedInput
          // value={filterName}
          // onChange={onFilterName}
          sx={{height:'40px',outline:"none"}}
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        {/* <LanguagePopover /> */}
        <Box component='img' src='/assets/icons/navbar/ic_inbox.svg' sx={{ width: 1, height: 1 }} />
        <NotificationsPopover />
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        // ...bgBlur({
        //   color: theme.palette.background.default,
        // }),
        bgcolor: theme.palette.background.paper,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% )`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

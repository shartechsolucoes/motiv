import { Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography
      variant="h6"
      component="footer"
      sx={{ pt: 3.75, textAlign: { xs: 'center', md: 'right' } }}
    >
      Desenvolvido por
      <Link
        href="https://www.shartech.com.br/"
        target="_blank"
        rel="noopener"
        aria-label="Conheça"
        sx={{ color: 'neutral.dark', '&:hover': { color: 'secondary.main' } }}
      >
        Shartech
      </Link>
    </Typography>
  );
};

export default Footer;

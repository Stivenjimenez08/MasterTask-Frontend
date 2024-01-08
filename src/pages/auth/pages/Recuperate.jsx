import { Button, FormControl, Grid, Input, InputAdornment, InputLabel, Link} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import { Layout } from "../Layout";
import "../../../style.css";

export const Recuperate = () => {

  return (
    
    <Layout title="Recupera tu cuenta">
      <form action="">
        <Grid container>
          <FormControl fullWidth  variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Email
            </InputLabel>
            <Input
              endAdornment={
                <InputAdornment position="end"> <EmailIcon/> </InputAdornment>
              }
            />
          </FormControl>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button  fullWidth id="button">
                Enviar enlace de recuperacion
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} underline="none" to="/auth/login" id="link">
            Volver a iniciar sesion
          </Link>
        </Grid>
      </form>
    </Layout>
  );
};

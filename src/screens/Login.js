import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from 'react-apollo'
import { Link, useHistory } from 'react-router-dom'
import gql from 'graphql-tag'
import { Form, Icon, notification } from 'antd';
import image from "../images/image.jpeg";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login({ form: { getFieldDecorator, validateFields, setFields } }) {
    const classes = useStyles()

    const history = useHistory()

    const [mutate] = useMutation(gql`
    mutation signin($email: String! $password: String!) {
            signin(email: $email password: $password) {
                token
                user {
                    id
                    firstname
                    lastname
                    email
                    role
                }
            }
        }
    `)

    function handleSubmit(e) {
        e.preventDefault()

        validateFields(async (err, values) => {
            if (!err) {
                const { data } = await mutate({
                    variables: {
                        email: values.email,
                        password: values.password
                    }
                })
                if (!data.signin) {
                    setFields({
                        email: {
                            value: values.email,
                            errors: [new Error('')]
                        },
                        password: {
                            value: values.password,
                            errors: [new Error('E-mail ou senha inválida')]
                        },
                    })
                    notification.error({
                        message: `Error`,
                        description: `Dados inválidos, tente novamente com outros dados`,
                        duration: 4,
                        icon: <Icon type="smile" style={{ color: '#108ee9' }} />
                    })
                    return
                }

                if (data.signin.token) {
                    localStorage.setItem('token', data.signin.token)
                    localStorage.setItem('user', JSON.stringify(data.signin.user))
                    notification.open({
                        message: `Padaria Avenida`,
                        description: `Olá ${data.signin.user.firstname}, você está logado no sistema!`,
                        duration: 10,
                        icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
                        style: {
                            width: 500,
                            marginLeft: 100 - 200,
                            marginTop: 50,
                        },
                    })
                    history.push('/dashboard')
                    return
                }
            }

        })
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
          </Typography>
                    <Form className={classes.form} onSubmit={handleSubmit} noValidate>
                        {getFieldDecorator('email')(
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />,
                        )}
                        {getFieldDecorator('password')(
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />,
                        )}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            htmlType="submit"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register">Don't have an account? Sign Up</Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </Form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Form.create({ name: 'login' })(Login)
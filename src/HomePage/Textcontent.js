import React from 'react';
import { useSpring, animated } from 'react-spring';
import Typography from '@mui/material/Typography';

function Textcontent() {
    // Define animation properties using useSpring
    const animatedProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
            <animated.div style={animatedProps}  >
                <Typography variant="h4" component="h2" align="center" sx={{ mr: 2, pt: 12, pl: 3 }} >
                    Welcome to Our Project Management Tool!<br />
                    Simplify, Collaborate, and Succeed
                </Typography>
                <Typography variant="h5" component="h5" align="center" sx={{ mr: 2, pt: 2, pl: 3 }} >
                    Why Choose Us? We offer a user-friendly interface, ensuring that our tool is intuitive and easy to navigate, even for beginners. Regardless of the size of your team, our tool grows with you, offering scalability to meet your needs, whether you're managing a small team or a large enterprise. Your data's security is our priority; we implement robust data encryption and secure access controls to keep your information safe. Additionally, our dedicated customer support team is always available to assist you whenever you need help or have any questions.

                </Typography>
            </animated.div>
        </div>
    );
}

export default Textcontent;

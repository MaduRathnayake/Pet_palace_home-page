import React from 'react';

function App() {
    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <h1 style={styles.title}>Welcome to The Pet Palace</h1>
                <p style={styles.subtitle}>
                    Your trusted destination for exceptional pet care and services.
                </p>
                <div style={styles.buttonContainer}>
                    <a
                        href="http://localhost:3002/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        <button style={styles.button}>Pet Owner</button>
                    </a>
                    <a
                        href="http://localhost:3001/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        <button style={styles.button}>Doctor</button>
                    </a>
                </div>
            </div>

            {/* Features Section */}
            <div style={styles.featuresSection}>
                <h2 style={styles.featuresTitle}>Why Choose Us?</h2>
                <div style={styles.featuresContainer}>
                    <div style={styles.feature}>
                        <img
                            src="https://www.zigly.com/media/mageplaza/blog/post/7/_/7_pets_and_the_important_pet_care_tips_that_experts_swear_by.jpg"
                            alt="Expert Care"
                            style={styles.featureIcon}
                        />
                        <h3 style={styles.featureTitle}>Expert Care</h3>
                        <p>Our experienced doctors provide top-notch care for your pets.</p>
                    </div>
                    <div style={styles.feature}>
                        <img
                            src="https://static.royacdn.com/Site-a40045d8-6c20-4e47-9b84-83323c034bdf/inside_page/sidebar_contactus.jpg"
                            alt="Easy Appointments"
                            style={styles.featureIcon}
                        />
                        <h3 style={styles.featureTitle}>Easy Appointments</h3>
                        <p>Schedule and manage appointments with ease.</p>
                    </div>
                    <div style={styles.feature}>
                        <img
                            src="https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1694664165155-Pet-care.jpg"
                            alt="Trusted Service"
                            style={styles.featureIcon}
                        />
                        <h3 style={styles.featureTitle}>Trusted Service</h3>
                        <p>Join thousands of happy pet owners who trust our services.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div style={styles.testimonialsSection}>
                <h2 style={styles.testimonialsTitle}>What Our Clients Say</h2>
                <div style={styles.testimonialsContainer}>
                    <div style={styles.testimonial}>
                        <p style={styles.testimonialText}>
                            "The Pet Palace saved my dog's life. Their care is unmatched!"
                        </p>
                        <h4 style={styles.testimonialAuthor}>- Sarah, Pet Owner</h4>
                    </div>
                    <div style={styles.testimonial}>
                        <p style={styles.testimonialText}>
                            "I trust the doctors here with all my pets. They always provide top-notch service."
                        </p>
                        <h4 style={styles.testimonialAuthor}>- John, Pet Owner</h4>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
<div style={styles.contactSection}>
    <h2 style={styles.contactTitle}>Contact Us</h2>
    <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
            <strong style={styles.contactLabel}>Name:</strong>
            <p style={styles.contactDetail}>The Pet Palace</p>
        </div>
        <div style={styles.contactItem}>
            <strong style={styles.contactLabel}>Location:</strong>
            <p style={styles.contactDetail}>123 Pet Street, Petville, Country</p>
        </div>
        <div style={styles.contactItem}>
            <strong style={styles.contactLabel}>Telephone:</strong>
            <p style={styles.contactDetail}>(+123) 456-7890</p>
        </div>
        <div style={styles.contactItem}>
            <strong style={styles.contactLabel}>Email:</strong>
            <p style={styles.contactDetail}>contact@petpalace.com</p>
        </div>
    </div>
</div>
            {/* Footer Section */}
            <footer style={styles.footer}>
                <p>© 2024 The Pet Palace. All rights reserved.</p>
            </footer>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        color: '#333',
        margin: 0,
        padding: 0,
    },
    heroSection: {
        backgroundImage: 'url("https://st.depositphotos.com/1152281/56945/i/450/depositphotos_569450948-stock-photo-veterinary-architecture-project-dark-wooden.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    subtitle: {
        fontSize: '20px',
        marginBottom: '30px',
    },
    buttonContainer: {
        marginTop: '20px',
    },
    button: {
        padding: '12px 24px',
        fontSize: '18px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '0 10px',
        transition: 'all 0.3s',
    },
    link: {
        textDecoration: 'none',
    },
    featuresSection: {
        backgroundColor: '#f8f9fa',
        padding: '50px 20px',
        textAlign: 'center',
    },
    featuresTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    featuresContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
    },
    feature: {
        textAlign: 'center',
        maxWidth: '250px',
        padding: '10px',
    },
    featureIcon: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '10px',
    },
    featureTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    testimonialsSection: {
        backgroundColor: '#e9ecef',
        padding: '50px 20px',
    },
    testimonialsTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    testimonialsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
    },
    testimonial: {
        textAlign: 'center',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    testimonialText: {
        fontStyle: 'italic',
        marginBottom: '10px',
    },
    testimonialAuthor: {
        fontWeight: 'bold',
        color: '#007bff',
    },
    contactSection: {
        backgroundColor: '#f1f1f1',
        padding: '50px 20px',
    },
    contactTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    contactForm: {
        maxWidth: '600px',
        margin: '0 auto',
    },
    contactInput: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    contactTextarea: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        height: '150px',
    },
    contactButton: {
        padding: '12px 24px',
        fontSize: '18px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
        marginTop: '20px',
    },
};

export default App;

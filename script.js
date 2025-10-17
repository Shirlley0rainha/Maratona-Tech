// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const startBtn = document.getElementById('startBtn');
const accessDashboard = document.getElementById('accessDashboard');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeModals = document.querySelectorAll('.close-modal');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');

// Open login modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Open register modal
registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

// Start button opens register modal
startBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

// Access dashboard button opens login modal
accessDashboard.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Close modals
closeModals.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

// Switch between modals
goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Form submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const susNumber = document.getElementById('loginSus').value;
    const password = document.getElementById('loginPassword').value;
    
    // Basic validation
    if (!validateSUS(susNumber)) {
        alert('Número do SUS inválido. Deve conter 15 dígitos.');
        return;
    }
    
    // In a real application, you would handle authentication here
    alert('Login realizado com sucesso!');
    loginModal.style.display = 'none';
    
    // Reset form
    document.getElementById('loginForm').reset();
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const susNumber = document.getElementById('registerSus').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Basic validation
    if (!validateSUS(susNumber)) {
        alert('Número do SUS inválido. Deve conter 15 dígitos.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }
    
    if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }
    
    // In a real application, you would handle registration here
    alert('Cadastro realizado com sucesso!');
    registerModal.style.display = 'none';
    
    // Reset form
    document.getElementById('registerForm').reset();
});

// SUS number validation function
function validateSUS(susNumber) {
    // Remove any non-digit characters
    const cleanNumber = susNumber.replace(/\D/g, '');
    
    // Check if it has exactly 15 digits
    if (cleanNumber.length !== 15) {
        return false;
    }
    
    // In a real application, you would implement the official SUS validation algorithm here
    // For this example, we'll just check if it's 15 digits
    return true;
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Simulate AI assistant functionality
function simulateAIAssistant() {
    const questions = [
        "Como você está se sentindo hoje?",
        "Algum sintoma específico está te incomodando?",
        "Você tomou seus medicamentos hoje?",
        "Precisa de ajuda para agendar uma consulta?"
    ];
    
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    
    // In a real application, this would be a more sophisticated AI interaction
    alert(`Assistente de IA: ${randomQuestion}`);
}

// Initialize some demo functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add click event to AI feature card to simulate interaction
    const aiFeatureCard = document.querySelector('.feature-card:nth-child(6)');
    aiFeatureCard.addEventListener('click', simulateAIAssistant);
    
    // Add animation to feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards for animation
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
});
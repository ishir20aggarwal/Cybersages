document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const submitButton = form.querySelector('.submit-button');
    let messageContainer = null;

    // Create message container
    function createMessageContainer() {
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.className = 'form-message';
            messageContainer.style.marginTop = '20px';
            messageContainer.style.padding = '15px';
            messageContainer.style.borderRadius = '8px';
            messageContainer.style.textAlign = 'center';
            messageContainer.style.fontSize = '1rem';
            messageContainer.style.transition = 'opacity 0.3s ease';
            form.appendChild(messageContainer);
        }
        return messageContainer;
    }

    // Show message
    function showMessage(text, isSuccess) {
        const container = createMessageContainer();
        container.textContent = text;
        container.style.backgroundColor = isSuccess ? '#38A169' : '#E53E3E';
        container.style.color = '#FFFFFF';
        container.style.opacity = '1';

        // Hide message after 5 seconds
        setTimeout(() => {
            container.style.opacity = '0';
            setTimeout(() => {
                container.remove();
                messageContainer = null;
            }, 300);
        }, 5000);
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Disable submit button during submission
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showMessage('Thank you! Your message has been sent successfully.', true);
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showMessage('Oops! Something went wrong. Please try again.', false);
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
});
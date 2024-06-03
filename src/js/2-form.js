const formData = {
  email: '',
  message: '',
};

const createNewForm = () => {
  const container = document.getElementById('container');
  const form = document.createElement('form');
  form.className = 'feedback-form';
  form.autocomplete = 'off';

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email';
  emailLabel.style.fontFamily = 'Montserrat, sans-serif';
  emailLabel.style.marginBottom = '10px';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.autofocus = true;
  emailInput.style.width = '360px';
  emailInput.style.height = '40px';
  emailInput.style.padding = '5px';
  emailInput.style.marginBottom = '10px';
  emailInput.style.border = '2px solid #808080';
  emailInput.style.borderRadius = '5px';
  emailInput.style.fontFamily = 'Montserrat, sans-serif';
  emailInput.style.fontWeight = '400';
  emailInput.style.fontSize = '16px';
  emailInput.style.lineHeight = '24px';
  emailInput.style.letterSpacing = '4%';
  emailInput.style.display = 'block';

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message';
  messageLabel.style.fontFamily = 'Montserrat, sans-serif';
  messageLabel.style.marginBottom = '10px';
  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'message';
  messageTextarea.rows = '8';
  messageTextarea.placeholder = 'Type area';
  messageTextarea.style.width = '360px';
  messageTextarea.style.height = '80px';
  messageTextarea.style.padding = '5px';
  messageTextarea.style.marginBottom = '15px';
  messageTextarea.style.border = '2px solid #808080';
  messageTextarea.style.borderRadius = '5px';
  messageTextarea.style.fontFamily = 'Montserrat, sans-serif';
  messageTextarea.style.fontWeight = '400';
  messageTextarea.style.fontSize = '16px';
  messageTextarea.style.lineHeight = '24px';
  messageTextarea.style.letterSpacing = '4%';
  messageTextarea.style.display = 'block';

  messageTextarea.addEventListener('focus', () => {
    messageTextarea.placeholder = 'Type area';
  });

  messageTextarea.addEventListener('input', () => {
    messageTextarea.placeholder = '';
  });
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitButton.style.fontFamily = 'Montserrat, sans-serif';
  submitButton.style.backgroundColor = '#4E75FF';
  submitButton.style.color = '#fff';
  submitButton.style.border = 'none';
  submitButton.style.borderRadius = '10px';
  submitButton.style.padding = '10px 20px';
  submitButton.style.cursor = 'pointer';
  submitButton.style.fontSize = '16px';

  submitButton.addEventListener('mouseenter', () => {
    submitButton.style.backgroundColor = '#6C8CFF';
  });

  submitButton.addEventListener('mouseleave', () => {
    submitButton.style.backgroundColor = '#4E75FF';
  });

  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageTextarea);
  form.appendChild(submitButton);

  container.appendChild(form);
};

createNewForm();

const form = document.querySelector('.feedback-form');

const toLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const loadDataFromLocalStorage = key => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const updateFormData = event => {
  formData[event.target.name] = event.target.value;
  toLocalStorage('feedback-form-state', formData);
};

form.addEventListener('input', updateFormData);

document.addEventListener('DOMContentLoaded', () => {
  const savedData = loadDataFromLocalStorage('feedback-form-state');
  if (savedData) {
    form.email.value = savedData.email || '';
    form.message.value = savedData.message || '';
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Please fill in all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';
  form.reset();
});

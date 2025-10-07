// uiComponents.js - All UI component data

export const categories = [
  { id: 'all', name: 'All', icon: '☰' },
  { id: 'buttons', name: 'Buttons', icon: '▶' },
  { id: 'checkboxes', name: 'Checkboxes', icon: '☑' },
  { id: 'inputs', name: 'Inputs', icon: '⌨' },
  { id: 'radio', name: 'Radio buttons', icon: '◉' },
  { id: 'forms', name: 'Forms', icon: '▦' },
  { id: 'toggle', name: 'Toggle switches', icon: '⚡' },
  { id: 'cards', name: 'Cards', icon: '♦' },
  { id: 'loaders', name: 'Loaders', icon: '⋯' },
  { id: 'patterns', name: 'Patterns', icon: '⚙' },
  { id: 'tooltips', name: 'Tooltips', icon: '●' }
];

export const componentTypes = [
  { id: 'button', name: 'Button', icon: '▣' },
  { id: 'toggle', name: 'Toggle switch', icon: '◐' },
  { id: 'checkbox', name: 'Checkbox', icon: '☑' },
  { id: 'loader', name: 'Loader', icon: '⋯' },
  { id: 'input', name: 'Input', icon: '⋯' },
  { id: 'form', name: 'Form', icon: '☰' },
  { id: 'radio', name: 'Radio buttons', icon: '◉' },
  { id: 'tooltips', name: 'Tooltips', icon: '●' },
  { id: 'card', name: 'Card', icon: '▭' }
];

export const components = {
  buttons: [
    {
      id: 'btn-1',
      name: 'Download Button',
      html: `<button class="ui-btn"><span>Download</span></button>`,
      css: `.ui-btn {
  box-sizing: border-box;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-family: Menlo, Roboto Mono, monospace;
  background: rgb(41, 41, 41);
  border: none;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.137);
}

.ui-btn:hover {
  background: rgb(51, 51, 51);
}

.ui-btn:hover span {
  color: #FAC921;
}`
    },
    {
      id: 'btn-2',
      name: 'Gradient Button',
      html: `<button class="gradient-btn">Button</button>`,
      css: `.gradient-btn {
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.gradient-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}`
    },
    {
      id: 'btn-3',
      name: 'Subscribe Button',
      html: `<button class="subscribe-btn">Subscribe →</button>`,
      css: `.subscribe-btn {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  background: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.subscribe-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #000;
  transition: left 0.3s ease;
  z-index: -1;
}

.subscribe-btn:hover::before {
  left: 0;
}

.subscribe-btn:hover {
  color: #fff;
}`
    },
    {
      id: 'btn-4',
      name: 'Neon Button',
      html: `<button class="neon-btn">Glow Button</button>`,
      css: `.neon-btn {
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  color: #00ff88;
  background: transparent;
  border: 2px solid #00ff88;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px #00ff88;
}

.neon-btn:hover {
  background: #00ff88;
  color: #000;
  box-shadow: 0 0 20px #00ff88, 0 0 40px #00ff88;
  text-shadow: none;
}`
    }
  ],
  
  checkboxes: [
    {
      id: 'check-1',
      name: 'Custom Checkbox',
      html: `<label class="custom-checkbox">
  <input type="checkbox" />
  <span class="checkmark"></span>
  <span class="label-text">Accept terms</span>
</label>`,
      css: `.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 35px;
  font-size: 16px;
  color: #fff;
  user-select: none;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #1f1f1f;
  border: 2px solid #666;
  border-radius: 4px;
  transition: all 0.3s;
}

.custom-checkbox:hover .checkmark {
  border-color: #9333ea;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #9333ea;
  border-color: #9333ea;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.label-text {
  margin-left: 10px;
}`
    },
    {
      id: 'check-2',
      name: 'Animated Checkbox',
      html: `<label class="animated-checkbox">
  <input type="checkbox" />
  <span class="checkbox-box"></span>
  <span>Subscribe to newsletter</span>
</label>`,
      css: `.animated-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
}

.animated-checkbox input {
  display: none;
}

.checkbox-box {
  width: 24px;
  height: 24px;
  background: #1f1f1f;
  border: 2px solid #666;
  border-radius: 6px;
  position: relative;
  transition: all 0.3s ease;
}

.animated-checkbox:hover .checkbox-box {
  transform: scale(1.1);
  border-color: #a855f7;
}

.animated-checkbox input:checked ~ .checkbox-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
  animation: checkbounce 0.4s ease;
}

.checkbox-box::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.animated-checkbox input:checked ~ .checkbox-box::after {
  transform: translate(-50%, -50%) scale(1);
}

@keyframes checkbounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}`
    }
  ],

  inputs: [
    {
      id: 'input-1',
      name: 'Modern Input',
      html: `<div class="modern-input-wrapper">
  <input type="text" class="modern-input" placeholder=" " />
  <label class="modern-label">Email address</label>
</div>`,
      css: `.modern-input-wrapper {
  position: relative;
  width: 300px;
}

.modern-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  color: #fff;
  background: #1f1f1f;
  border: 2px solid #333;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
}

.modern-input:focus {
  border-color: #9333ea;
  background: #2a2a2a;
}

.modern-label {
  position: absolute;
  left: 16px;
  top: 12px;
  color: #666;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
}

.modern-input:focus ~ .modern-label,
.modern-input:not(:placeholder-shown) ~ .modern-label {
  top: -10px;
  left: 12px;
  font-size: 12px;
  color: #9333ea;
  background: #000;
  padding: 0 4px;
}`
    },
    {
      id: 'input-2',
      name: 'Search Input',
      html: `<div class="search-input-wrapper">
  <input type="text" class="search-input" placeholder="Search..." />
  <span class="search-icon">🔍</span>
</div>`,
      css: `.search-input-wrapper {
  position: relative;
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 45px;
  font-size: 16px;
  color: #fff;
  background: #1f1f1f;
  border: 2px solid #333;
  border-radius: 24px;
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  opacity: 0.6;
}`
    }
  ],

  forms: [
    {
      id: 'form-1',
      name: 'Contact Form',
      html: `<form class="contact-form">
  <h3 class="form-title">Get in touch</h3>
  <input type="text" placeholder="Name" class="form-input" />
  <input type="email" placeholder="Email" class="form-input" />
  <textarea placeholder="Message" class="form-textarea"></textarea>
  <button type="submit" class="form-submit">Send Message</button>
</form>`,
      css: `.contact-form {
  max-width: 400px;
  padding: 32px;
  background: #1f1f1f;
  border-radius: 16px;
  border: 1px solid #333;
}

.form-title {
  margin: 0 0 24px 0;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #fff;
  background: #0a0a0a;
  border: 1px solid #333;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #9333ea;
  background: #1a1a1a;
}

.form-submit {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #9333ea;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.form-submit:hover {
  background: #7c3aed;
}`
    }
  ],

  tooltips: [
    {
      id: 'tooltip-1',
      name: 'Hover Tooltip',
      html: `<div class="tooltip-container">
  <button class="tooltip-btn">Hover me</button>
  <span class="tooltip-text">This is a tooltip!</span>
</div>`,
      css: `.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-btn {
  padding: 10px 20px;
  background: #9333ea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.tooltip-text {
  visibility: hidden;
  opacity: 0;
  width: 140px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -70px;
  transition: opacity 0.3s, visibility 0.3s;
}

.tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}`
    }
  ],

  loaders: [
    {
      id: 'loader-1',
      name: 'Spinner Loader',
      html: `<div class="spinner-loader"></div>`,
      css: `.spinner-loader {
  width: 50px;
  height: 50px;
  border: 5px solid #333;
  border-top: 5px solid #9333ea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`
    },
    {
      id: 'loader-2',
      name: 'Dots Loader',
      html: `<div class="dots-loader"><span></span><span></span><span></span></div>`,
      css: `.dots-loader {
  display: flex;
  gap: 8px;
}

.dots-loader span {
  width: 12px;
  height: 12px;
  background: #9333ea;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.dots-loader span:nth-child(1) {
  animation-delay: -0.32s;
}

.dots-loader span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% { 
    transform: scale(0);
  } 
  40% { 
    transform: scale(1);
  }
}`
    },
    {
      id: 'loader-3',
      name: 'Pulse Loader',
      html: `<div class="pulse-loader"></div>`,
      css: `.pulse-loader {
  width: 50px;
  height: 50px;
  background: #9333ea;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.5;
  }
}`
    }
  ],

  cards: [
    {
      id: 'card-1',
      name: 'Glass Card',
      html: `<div class="glass-card"><h3>Glass Card</h3><p>Beautiful glassmorphism effect</p></div>`,
      css: `.glass-card {
  padding: 32px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  color: white;
}

.glass-card h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
}

.glass-card p {
  margin: 0;
  opacity: 0.8;
}`
    },
    {
      id: 'card-2',
      name: 'Hover Card',
      html: `<div class="hover-card"><h3>Hover Me</h3><p>Interactive card with elevation</p></div>`,
      css: `.hover-card {
  padding: 32px;
  background: #1f1f1f;
  border-radius: 12px;
  border: 1px solid #333;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(147, 51, 234, 0.4);
  border-color: #9333ea;
}

.hover-card h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
  color: #9333ea;
}

.hover-card p {
  margin: 0;
  opacity: 0.8;
}`
    }
  ],

  toggle: [
    {
      id: 'toggle-1',
      name: 'Simple Toggle',
      html: `<label class="toggle-switch">
  <input type="checkbox" />
  <span class="toggle-slider"></span>
</label>`,
      css: `.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  transition: 0.4s;
  border-radius: 34px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.toggle-switch input:checked + .toggle-slider {
  background-color: #9333ea;
}

.toggle-switch input:checked + .toggle-slider:before {
  transform: translateX(26px);
}`
    }
  ],

  radio: [
    {
      id: 'radio-1',
      name: 'Custom Radio',
      html: `<div class="radio-group">
  <label class="radio-label">
    <input type="radio" name="option" />
    <span class="radio-custom"></span>
    <span>Option 1</span>
  </label>
  <label class="radio-label">
    <input type="radio" name="option" />
    <span class="radio-custom"></span>
    <span>Option 2</span>
  </label>
</div>`,
      css: `.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
}

.radio-label input {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #666;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
}

.radio-label:hover .radio-custom {
  border-color: #9333ea;
}

.radio-label input:checked ~ .radio-custom {
  border-color: #9333ea;
}

.radio-custom::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #9333ea;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease;
}

.radio-label input:checked ~ .radio-custom::after {
  transform: translate(-50%, -50%) scale(1);
}`
    }
  ],

  patterns: []
};

export default components;
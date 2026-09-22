const WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029Vb67kphEVccTpme0lt2m';
const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/puja-dubey-54a454295?utm_source=share_via&utm_content=profile&utm_medium=member_android';

const effectsStyles = document.createElement('link');
effectsStyles.rel = 'stylesheet';
effectsStyles.href = 'effects.css';
document.head.append(effectsStyles);
const themeStyles = document.createElement('link');
themeStyles.rel = 'stylesheet';
themeStyles.href = 'theme.css';
document.head.append(themeStyles);
const popupStyles = document.createElement('style');
popupStyles.textContent = 'body{cursor:auto!important}.custom-cursor{display:none!important}@keyframes isoPopupIn{from{opacity:0;transform:perspective(900px) rotateX(8deg) rotateY(-5deg) translateY(18px)}to{opacity:1;transform:perspective(900px) rotateX(0) rotateY(0) translateY(0)}}.service-popup[open]{animation:isoPopupIn .35s cubic-bezier(.2,.8,.2,1) both}.whatsapp-float{display:none}';
document.head.append(popupStyles);

const pageLoader = document.createElement('div');
pageLoader.className = 'page-loader';
pageLoader.innerHTML = '<div class="loader-orbit"><span>SWS</span></div><p>Preparing your smart workspace</p>';
document.body.prepend(pageLoader);
const hidePageLoader = () => {
  pageLoader.classList.add('is-hidden');
  pageLoader.style.opacity = '0';
  pageLoader.style.visibility = 'hidden';
  pageLoader.style.pointerEvents = 'none';
};
window.addEventListener('load', () => {
  window.setTimeout(hidePageLoader, 450);
});
window.setTimeout(hidePageLoader, 1600);

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = contactForm.querySelector('.form-status');
    status.textContent = 'Thank you. Your enquiry is ready to send once your email service is connected.';
    contactForm.reset();
  });
}

const quickEnquiryForm = document.querySelector('#quick-enquiry-form');
if (quickEnquiryForm) {
  quickEnquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.open(WHATSAPP_CHANNEL, '_blank', 'noopener');
  });
}

const socialLinks = document.createElement('div');
socialLinks.className = 'social-links';
socialLinks.innerHTML = `<span>Follow the work</span><a href="https://youtube.com/@smart.way_corp858?si=NsWW92gcGUkBdDwy" target="_blank" rel="noopener">YouTube ↗</a><a href="https://www.instagram.com/smart.way_corp858?stkn=MXA3dHBiYmRxdjJoYQ==" target="_blank" rel="noopener">Instagram ↗</a><a href="${LINKEDIN_PROFILE}" target="_blank" rel="noopener">Message on LinkedIn ↗</a>`;
document.querySelector('.site-footer')?.append(socialLinks);

document.body.classList.add('page-motion');

const assistant = document.createElement('a');
assistant.className = 'floating-assistant';
assistant.href = WHATSAPP_CHANNEL;
assistant.target = '_blank';
assistant.rel = 'noopener';
assistant.setAttribute('aria-label', 'Follow our WhatsApp channel');
assistant.innerHTML = '<span class="assistant-orb">⌁</span><span class="assistant-label"><b>Need a smart update?</b><small>Follow our WhatsApp channel</small></span><span class="assistant-arrow">↗</span>';
document.body.append(assistant);

const contactEmail = document.querySelector('.contact-details a[href^="mailto:"]');
if (contactEmail) contactEmail.classList.add('email-focus');

if (document.body.querySelector('.contact-hero')) {
  const popover = document.createElement('div');
  popover.className = 'whatsapp-popover';
  popover.innerHTML = '<button class="whatsapp-popover-close" aria-label="Close WhatsApp prompt">×</button><strong>Stay connected with SWS.</strong><p>Get GST, tax and business updates directly on our WhatsApp channel.</p><a class="button button-dark" href="' + WHATSAPP_CHANNEL + '" target="_blank" rel="noopener">Follow our channel ↗</a>';
  document.body.append(popover);
  window.setTimeout(() => popover.classList.add('is-open'), 1800);
  popover.querySelector('.whatsapp-popover-close').addEventListener('click', () => popover.classList.remove('is-open'));
}

const directContact = document.querySelector('.direct-contact');
if (directContact && !directContact.querySelector('.linkedin-link')) {
  const linkedinLink = document.createElement('a');
  linkedinLink.className = 'text-link linkedin-link';
  linkedinLink.href = LINKEDIN_PROFILE;
  linkedinLink.target = '_blank';
  linkedinLink.rel = 'noopener';
  linkedinLink.innerHTML = 'Message us on LinkedIn <span>↗</span>';
  directContact.append(linkedinLink);
}

const popup = document.createElement('dialog');
popup.className = 'service-popup';
popup.innerHTML = '<button class="popup-close" aria-label="Close service details">×</button><span class="popup-kicker">SWS SERVICE GUIDE</span><h2></h2><p></p><a class="button button-dark" href="contact.html">Connect with us <span>↗</span></a>';
document.body.append(popup);

const serviceDescriptions = {
  'GST & Tax': 'We handle registrations, GSTR-1, GSTR-3B, annual returns, ITR, TDS, TCS, tax planning and GST notice support with clear timelines.',
  'MCA & Company': 'From Private Limited, OPC and LLP incorporation to ROC annual filing, DIR-3 KYC and company changes, we keep your structure compliant.',
  'Registrations': 'Get MSME, trade licence, FSSAI, IEC, Professional Tax and trademark filing support in one guided workflow.',
  'GST & Taxation': 'GST registration, recurring returns, annual returns, ITR filing, tax audit, TDS, TCS and notice or revocation support.',
  'MCA & Company Compliance': 'Company incorporation, partnership and proprietorship setup, ROC filings, director KYC and key company changes.',
  'Registrations & Licences': 'Udyam, trade licence, trademark search and filing, objection replies, FSSAI, IEC and Professional Tax support.'
};

const openServicePopup = (title) => {
  popup.querySelector('h2').textContent = title;
  popup.querySelector('p').textContent = serviceDescriptions[title] || 'Smartwaysolution gives you practical guidance, clear next steps and timely compliance support.';
  popup.showModal();
};

document.querySelectorAll('.service-tile, .service-list article').forEach((service) => {
  const heading = service.querySelector('h2, h3');
  if (!heading) return;
  service.setAttribute('tabindex', '0');
  service.setAttribute('role', 'button');
  service.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    openServicePopup(heading.textContent.trim());
  });
  service.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') openServicePopup(heading.textContent.trim());
  });
});

popup.querySelector('.popup-close').addEventListener('click', () => popup.close());
popup.addEventListener('click', (event) => {
  if (event.target === popup) popup.close();
});

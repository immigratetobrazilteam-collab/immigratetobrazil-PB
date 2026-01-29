/** PB JS - João Pessoa - Cool-coastal with cyan and teal tones */
const STATE_CONFIG = {
  stateCode: 'pb',
  capital: 'João Pessoa',
  formspreeUrl: 'https://formspree.io/f/xpbqbddb',
  colors: { primary: '#00bcd4', secondary: '#20b2aa', accent: '#87ceeb' },
  animations: {"enabled": true, "header": {"type": "sertaoFade", "duration": "0.7s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "culturalReveal", "duration": "1s", "easing": "ease-in-out", "stagger": "0.15s"}, "hero": {"type": "coastalParallax", "speed": 0.5, "direction": "horizontal"}, "cards": {"type": "folkloreFloat", "traditional": true, "vibrant": true}, "images": {"type": "sunReveal", "warmth": true, "duration": "1.1s"}},
  interactions: {"hover": "cultural-lift", "scroll": "tradition-flow", "transitions": "folkloric-ease", "click": "festival-burst"},
  premiumEffects: ["sertao-gradient", "cultural-patterns", "sun-rays", "dust-particles"]
};

const SECTIONS = ["pb-index-section--map", "pb-index-section-frequently-asked-questions-about-living-in-", "pb-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});

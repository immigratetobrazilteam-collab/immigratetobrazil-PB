
// Master JS for State: PB - Persona: Northeast Coast
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 780;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const pb_index_section_immigrate_to_paraba = document.getElementById('pb-index-section-immigrate-to-paraba');
  if (pb_index_section_immigrate_to_paraba) {
    gsap.fromTo('#pb-index-section-immigrate-to-paraba', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_form_immigrate_to_paraba = document.getElementById('pb-index-form-immigrate-to-paraba');
  if (pb_index_form_immigrate_to_paraba) {
    gsap.from('#pb-index-form-immigrate-to-paraba input, #pb-index-form-immigrate-to-paraba textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_state_vibe = document.getElementById('pb-index-section-state-vibe');
  if (pb_index_section_state_vibe) {
    gsap.fromTo('#pb-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_quick_facts_snapshot = document.getElementById('pb-index-section-quick-facts-snapshot');
  if (pb_index_section_quick_facts_snapshot) {
    gsap.fromTo('#pb-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_paraba_map = document.getElementById('pb-index-section-paraba-map');
  if (pb_index_section_paraba_map) {
    gsap.fromTo('#pb-index-section-paraba-map', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_cost_of_living_paraba = document.getElementById('pb-index-section-cost-of-living-paraba');
  if (pb_index_section_cost_of_living_paraba) {
    gsap.fromTo('#pb-index-section-cost-of-living-paraba', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_government_context = document.getElementById('pb-index-section-government-context');
  if (pb_index_section_government_context) {
    gsap.fromTo('#pb-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_hero_immigration_notes = document.getElementById('pb-index-hero-immigration-notes');
  if (pb_index_hero_immigration_notes) {
    gsap.fromTo('#pb-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_common_applicant_profiles = document.getElementById('pb-index-list-common-applicant-profiles');
  if (pb_index_list_common_applicant_profiles) {
    gsap.from('#pb-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_economic_drivers = document.getElementById('pb-index-list-economic-drivers');
  if (pb_index_list_economic_drivers) {
    gsap.from('#pb-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_demographics = document.getElementById('pb-index-section-demographics');
  if (pb_index_section_demographics) {
    gsap.fromTo('#pb-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_regional_challenges = document.getElementById('pb-index-section-regional-challenges');
  if (pb_index_section_regional_challenges) {
    gsap.fromTo('#pb-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_regional_opportunities = document.getElementById('pb-index-section-regional-opportunities');
  if (pb_index_section_regional_opportunities) {
    gsap.fromTo('#pb-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_culture_daily_life = document.getElementById('pb-index-section-culture-daily-life');
  if (pb_index_section_culture_daily_life) {
    gsap.fromTo('#pb-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_local_language_expressions = document.getElementById('pb-index-list-local-language-expressions');
  if (pb_index_list_local_language_expressions) {
    gsap.from('#pb-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_food_cuisine = document.getElementById('pb-index-list-food-cuisine');
  if (pb_index_list_food_cuisine) {
    gsap.from('#pb-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_festivals_traditions = document.getElementById('pb-index-list-festivals-traditions');
  if (pb_index_list_festivals_traditions) {
    gsap.from('#pb-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_music_artistic_expression = document.getElementById('pb-index-list-music-artistic-expression');
  if (pb_index_list_music_artistic_expression) {
    gsap.from('#pb-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_sports_recreation = document.getElementById('pb-index-list-sports-recreation');
  if (pb_index_list_sports_recreation) {
    gsap.from('#pb-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_landmarks_historical_sites = document.getElementById('pb-index-list-landmarks-historical-sites');
  if (pb_index_list_landmarks_historical_sites) {
    gsap.from('#pb-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_natural_features = document.getElementById('pb-index-list-natural-features');
  if (pb_index_list_natural_features) {
    gsap.from('#pb-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_parks_protected_areas = document.getElementById('pb-index-list-parks-protected-areas');
  if (pb_index_list_parks_protected_areas) {
    gsap.from('#pb-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_museums_cultural_institutions = document.getElementById('pb-index-list-museums-cultural-institutions');
  if (pb_index_list_museums_cultural_institutions) {
    gsap.from('#pb-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_image_gallery = document.getElementById('pb-index-section-image-gallery');
  if (pb_index_section_image_gallery) {
    gsap.fromTo('#pb-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_useful_government_links = document.getElementById('pb-index-section-useful-government-links');
  if (pb_index_section_useful_government_links) {
    gsap.fromTo('#pb-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_hero_federal_police_immigration_links = document.getElementById('pb-index-hero-federal-police-immigration-links');
  if (pb_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#pb-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_external_references = document.getElementById('pb-index-section-external-references');
  if (pb_index_section_external_references) {
    gsap.fromTo('#pb-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_immigration_services_overview = document.getElementById('pb-index-list-immigration-services-overview');
  if (pb_index_list_immigration_services_overview) {
    gsap.from('#pb-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_why_immigrate_here = document.getElementById('pb-index-section-why-immigrate-here');
  if (pb_index_section_why_immigrate_here) {
    gsap.fromTo('#pb-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section_legal_guidance_disclaimers = document.getElementById('pb-index-section-legal-guidance-disclaimers');
  if (pb_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#pb-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_travel_services = document.getElementById('pb-index-list-travel-services');
  if (pb_index_list_travel_services) {
    gsap.from('#pb-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_list_how_the_process_works = document.getElementById('pb-index-list-how-the-process-works');
  if (pb_index_list_how_the_process_works) {
    gsap.from('#pb-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_index_section__frequently_asked_questions_about_living_in_paraba_ = document.getElementById('pb-index-section--frequently-asked-questions-about-living-in-paraba-');
  if (pb_index_section__frequently_asked_questions_about_living_in_paraba_) {
    gsap.fromTo('#pb-index-section--frequently-asked-questions-about-living-in-paraba-', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_contactcta_section_get_started_in_paraba = document.getElementById('pb-contactcta-section-get-started-in-paraba');
  if (pb_contactcta_section_get_started_in_paraba) {
    gsap.fromTo('#pb-contactcta-section-get-started-in-paraba', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('pb-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (pb_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#pb-renouncingcitizenship-form-renounce-brazilian-citizenship input, #pb-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_list_quick_facts = document.getElementById('pb-renouncingcitizenship-list-quick-facts');
  if (pb_renouncingcitizenship_list_quick_facts) {
    gsap.from('#pb-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('pb-renouncingcitizenship-list-common-challenges-applicants-face');
  if (pb_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pb-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('pb-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (pb_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pb-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_renunciation_overview = document.getElementById('pb-renouncingcitizenship-section-renunciation-overview');
  if (pb_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#pb-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_form_who_is_this_for = document.getElementById('pb-renouncingcitizenship-form-who-is-this-for');
  if (pb_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#pb-renouncingcitizenship-form-who-is-this-for input, #pb-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_list_required_documents = document.getElementById('pb-renouncingcitizenship-list-required-documents');
  if (pb_renouncingcitizenship_list_required_documents) {
    gsap.from('#pb-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_list_process = document.getElementById('pb-renouncingcitizenship-list-process');
  if (pb_renouncingcitizenship_list_process) {
    gsap.from('#pb-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_timelines_deadlines = document.getElementById('pb-renouncingcitizenship-section-timelines-deadlines');
  if (pb_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pb-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_fees_costs = document.getElementById('pb-renouncingcitizenship-section-fees-costs');
  if (pb_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#pb-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('pb-renouncingcitizenship-list-risks-common-mistakes');
  if (pb_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#pb-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('pb-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (pb_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_paraba_specific_context = document.getElementById('pb-renouncingcitizenship-section-paraba-specific-context');
  if (pb_renouncingcitizenship_section_paraba_specific_context) {
    gsap.fromTo('#pb-renouncingcitizenship-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_what_our_clients_say = document.getElementById('pb-renouncingcitizenship-section-what-our-clients-say');
  if (pb_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pb-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('pb-renouncingcitizenship-section-frequently-asked-questions');
  if (pb_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pb-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_international_support = document.getElementById('pb-renouncingcitizenship-section-international-support');
  if (pb_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#pb-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_list_our_credentials = document.getElementById('pb-renouncingcitizenship-list-our-credentials');
  if (pb_renouncingcitizenship_list_our_credentials) {
    gsap.from('#pb-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_list_related_services = document.getElementById('pb-renouncingcitizenship-list-related-services');
  if (pb_renouncingcitizenship_list_related_services) {
    gsap.from('#pb-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('pb-renouncingcitizenship-section-youre-in-good-hands');
  if (pb_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pb-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_renouncingcitizenship_section_21 = document.getElementById('pb-renouncingcitizenship-section-21');
  if (pb_renouncingcitizenship_section_21) {
    gsap.fromTo('#pb-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('pb-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (pb_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#pb-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #pb-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_list_quick_facts = document.getElementById('pb-provisional-list-quick-facts');
  if (pb_provisional_list_quick_facts) {
    gsap.from('#pb-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_list_common_challenges_applicants_face = document.getElementById('pb-provisional-list-common-challenges-applicants-face');
  if (pb_provisional_list_common_challenges_applicants_face) {
    gsap.from('#pb-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_list_how_we_solve_these_challenges = document.getElementById('pb-provisional-list-how-we-solve-these-challenges');
  if (pb_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#pb-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_naturalisation_overview = document.getElementById('pb-provisional-section-naturalisation-overview');
  if (pb_provisional_section_naturalisation_overview) {
    gsap.fromTo('#pb-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_form_who_is_this_naturalisation_for = document.getElementById('pb-provisional-form-who-is-this-naturalisation-for');
  if (pb_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#pb-provisional-form-who-is-this-naturalisation-for input, #pb-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_list_required_documents = document.getElementById('pb-provisional-list-required-documents');
  if (pb_provisional_list_required_documents) {
    gsap.from('#pb-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_list_application_process = document.getElementById('pb-provisional-list-application-process');
  if (pb_provisional_list_application_process) {
    gsap.from('#pb-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_timelines_deadlines = document.getElementById('pb-provisional-section-timelines-deadlines');
  if (pb_provisional_section_timelines_deadlines) {
    gsap.fromTo('#pb-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_fees_costs = document.getElementById('pb-provisional-section-fees-costs');
  if (pb_provisional_section_fees_costs) {
    gsap.fromTo('#pb-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_list_risks_common_mistakes = document.getElementById('pb-provisional-list-risks-common-mistakes');
  if (pb_provisional_list_risks_common_mistakes) {
    gsap.from('#pb-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_diy_vs_professional_assistance = document.getElementById('pb-provisional-section-diy-vs-professional-assistance');
  if (pb_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_paraba_specific_context = document.getElementById('pb-provisional-section-paraba-specific-context');
  if (pb_provisional_section_paraba_specific_context) {
    gsap.fromTo('#pb-provisional-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_what_our_clients_say = document.getElementById('pb-provisional-section-what-our-clients-say');
  if (pb_provisional_section_what_our_clients_say) {
    gsap.fromTo('#pb-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_frequently_asked_questions = document.getElementById('pb-provisional-section-frequently-asked-questions');
  if (pb_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#pb-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_international_support = document.getElementById('pb-provisional-section-international-support');
  if (pb_provisional_section_international_support) {
    gsap.fromTo('#pb-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_list_our_credentials = document.getElementById('pb-provisional-list-our-credentials');
  if (pb_provisional_list_our_credentials) {
    gsap.from('#pb-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_list_related_services = document.getElementById('pb-provisional-list-related-services');
  if (pb_provisional_list_related_services) {
    gsap.from('#pb-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_youre_in_good_hands = document.getElementById('pb-provisional-section-youre-in-good-hands');
  if (pb_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#pb-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_provisional_section_21 = document.getElementById('pb-provisional-section-21');
  if (pb_provisional_section_21) {
    gsap.fromTo('#pb-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('pb-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (pb_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#pb-special-form-special-naturalisation-in-brazil-for-particular-cases input, #pb-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_list_quick_facts = document.getElementById('pb-special-list-quick-facts');
  if (pb_special_list_quick_facts) {
    gsap.from('#pb-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_list_common_challenges_applicants_face = document.getElementById('pb-special-list-common-challenges-applicants-face');
  if (pb_special_list_common_challenges_applicants_face) {
    gsap.from('#pb-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_list_how_we_solve_these_challenges = document.getElementById('pb-special-list-how-we-solve-these-challenges');
  if (pb_special_list_how_we_solve_these_challenges) {
    gsap.from('#pb-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_naturalisation_overview = document.getElementById('pb-special-section-naturalisation-overview');
  if (pb_special_section_naturalisation_overview) {
    gsap.fromTo('#pb-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_form_who_is_this_naturalisation_for = document.getElementById('pb-special-form-who-is-this-naturalisation-for');
  if (pb_special_form_who_is_this_naturalisation_for) {
    gsap.from('#pb-special-form-who-is-this-naturalisation-for input, #pb-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_list_required_documents = document.getElementById('pb-special-list-required-documents');
  if (pb_special_list_required_documents) {
    gsap.from('#pb-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_list_application_process = document.getElementById('pb-special-list-application-process');
  if (pb_special_list_application_process) {
    gsap.from('#pb-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_timelines_deadlines = document.getElementById('pb-special-section-timelines-deadlines');
  if (pb_special_section_timelines_deadlines) {
    gsap.fromTo('#pb-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_fees_costs = document.getElementById('pb-special-section-fees-costs');
  if (pb_special_section_fees_costs) {
    gsap.fromTo('#pb-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_list_risks_common_mistakes = document.getElementById('pb-special-list-risks-common-mistakes');
  if (pb_special_list_risks_common_mistakes) {
    gsap.from('#pb-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_diy_vs_professional_assistance = document.getElementById('pb-special-section-diy-vs-professional-assistance');
  if (pb_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_paraba_specific_context = document.getElementById('pb-special-section-paraba-specific-context');
  if (pb_special_section_paraba_specific_context) {
    gsap.fromTo('#pb-special-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_what_our_clients_say = document.getElementById('pb-special-section-what-our-clients-say');
  if (pb_special_section_what_our_clients_say) {
    gsap.fromTo('#pb-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_frequently_asked_questions = document.getElementById('pb-special-section-frequently-asked-questions');
  if (pb_special_section_frequently_asked_questions) {
    gsap.fromTo('#pb-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_international_support = document.getElementById('pb-special-section-international-support');
  if (pb_special_section_international_support) {
    gsap.fromTo('#pb-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_list_our_credentials = document.getElementById('pb-special-list-our-credentials');
  if (pb_special_list_our_credentials) {
    gsap.from('#pb-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_list_related_services = document.getElementById('pb-special-list-related-services');
  if (pb_special_list_related_services) {
    gsap.from('#pb-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_youre_in_good_hands = document.getElementById('pb-special-section-youre-in-good-hands');
  if (pb_special_section_youre_in_good_hands) {
    gsap.fromTo('#pb-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_special_section_21 = document.getElementById('pb-special-section-21');
  if (pb_special_section_21) {
    gsap.fromTo('#pb-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('pb-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (pb_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#pb-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #pb-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_list_quick_facts = document.getElementById('pb-ordinary-list-quick-facts');
  if (pb_ordinary_list_quick_facts) {
    gsap.from('#pb-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_list_common_challenges_applicants_face = document.getElementById('pb-ordinary-list-common-challenges-applicants-face');
  if (pb_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#pb-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_list_how_we_solve_these_challenges = document.getElementById('pb-ordinary-list-how-we-solve-these-challenges');
  if (pb_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pb-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_naturalisation_overview = document.getElementById('pb-ordinary-section-naturalisation-overview');
  if (pb_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#pb-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_form_who_is_this_naturalisation_for = document.getElementById('pb-ordinary-form-who-is-this-naturalisation-for');
  if (pb_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pb-ordinary-form-who-is-this-naturalisation-for input, #pb-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_list_required_documents = document.getElementById('pb-ordinary-list-required-documents');
  if (pb_ordinary_list_required_documents) {
    gsap.from('#pb-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_list_application_process = document.getElementById('pb-ordinary-list-application-process');
  if (pb_ordinary_list_application_process) {
    gsap.from('#pb-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_timelines_deadlines = document.getElementById('pb-ordinary-section-timelines-deadlines');
  if (pb_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#pb-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_fees_costs = document.getElementById('pb-ordinary-section-fees-costs');
  if (pb_ordinary_section_fees_costs) {
    gsap.fromTo('#pb-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_list_risks_common_mistakes = document.getElementById('pb-ordinary-list-risks-common-mistakes');
  if (pb_ordinary_list_risks_common_mistakes) {
    gsap.from('#pb-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_diy_vs_professional_assistance = document.getElementById('pb-ordinary-section-diy-vs-professional-assistance');
  if (pb_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_paraba_specific_context = document.getElementById('pb-ordinary-section-paraba-specific-context');
  if (pb_ordinary_section_paraba_specific_context) {
    gsap.fromTo('#pb-ordinary-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_what_our_clients_say = document.getElementById('pb-ordinary-section-what-our-clients-say');
  if (pb_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#pb-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_frequently_asked_questions = document.getElementById('pb-ordinary-section-frequently-asked-questions');
  if (pb_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pb-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_international_support = document.getElementById('pb-ordinary-section-international-support');
  if (pb_ordinary_section_international_support) {
    gsap.fromTo('#pb-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_list_our_credentials = document.getElementById('pb-ordinary-list-our-credentials');
  if (pb_ordinary_list_our_credentials) {
    gsap.from('#pb-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_list_related_services = document.getElementById('pb-ordinary-list-related-services');
  if (pb_ordinary_list_related_services) {
    gsap.from('#pb-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_youre_in_good_hands = document.getElementById('pb-ordinary-section-youre-in-good-hands');
  if (pb_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pb-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_ordinary_section_21 = document.getElementById('pb-ordinary-section-21');
  if (pb_ordinary_section_21) {
    gsap.fromTo('#pb-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('pb-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (pb_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#pb-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #pb-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_list_quick_facts = document.getElementById('pb-extraordinary-list-quick-facts');
  if (pb_extraordinary_list_quick_facts) {
    gsap.from('#pb-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_list_common_challenges_applicants_face = document.getElementById('pb-extraordinary-list-common-challenges-applicants-face');
  if (pb_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#pb-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_list_how_we_solve_these_challenges = document.getElementById('pb-extraordinary-list-how-we-solve-these-challenges');
  if (pb_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pb-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_naturalisation_overview = document.getElementById('pb-extraordinary-section-naturalisation-overview');
  if (pb_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#pb-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('pb-extraordinary-form-who-is-this-naturalisation-for');
  if (pb_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pb-extraordinary-form-who-is-this-naturalisation-for input, #pb-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_list_required_documents = document.getElementById('pb-extraordinary-list-required-documents');
  if (pb_extraordinary_list_required_documents) {
    gsap.from('#pb-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_list_application_process = document.getElementById('pb-extraordinary-list-application-process');
  if (pb_extraordinary_list_application_process) {
    gsap.from('#pb-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_timelines_deadlines = document.getElementById('pb-extraordinary-section-timelines-deadlines');
  if (pb_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#pb-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_fees_costs = document.getElementById('pb-extraordinary-section-fees-costs');
  if (pb_extraordinary_section_fees_costs) {
    gsap.fromTo('#pb-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_list_risks_common_mistakes = document.getElementById('pb-extraordinary-list-risks-common-mistakes');
  if (pb_extraordinary_list_risks_common_mistakes) {
    gsap.from('#pb-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_diy_vs_professional_assistance = document.getElementById('pb-extraordinary-section-diy-vs-professional-assistance');
  if (pb_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_paraba_specific_context = document.getElementById('pb-extraordinary-section-paraba-specific-context');
  if (pb_extraordinary_section_paraba_specific_context) {
    gsap.fromTo('#pb-extraordinary-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_what_our_clients_say = document.getElementById('pb-extraordinary-section-what-our-clients-say');
  if (pb_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#pb-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_frequently_asked_questions = document.getElementById('pb-extraordinary-section-frequently-asked-questions');
  if (pb_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pb-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_international_support = document.getElementById('pb-extraordinary-section-international-support');
  if (pb_extraordinary_section_international_support) {
    gsap.fromTo('#pb-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_list_our_credentials = document.getElementById('pb-extraordinary-list-our-credentials');
  if (pb_extraordinary_list_our_credentials) {
    gsap.from('#pb-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_list_related_services = document.getElementById('pb-extraordinary-list-related-services');
  if (pb_extraordinary_list_related_services) {
    gsap.from('#pb-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_youre_in_good_hands = document.getElementById('pb-extraordinary-section-youre-in-good-hands');
  if (pb_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pb-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extraordinary_section_21 = document.getElementById('pb-extraordinary-section-21');
  if (pb_extraordinary_section_21) {
    gsap.fromTo('#pb-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('pb-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (pb_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#pb-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #pb-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_list_quick_facts = document.getElementById('pb-reacquisitioncitizenship-list-quick-facts');
  if (pb_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#pb-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('pb-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (pb_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pb-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('pb-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (pb_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pb-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('pb-reacquisitioncitizenship-section-reacquisition-overview');
  if (pb_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('pb-reacquisitioncitizenship-form-who-is-this-for');
  if (pb_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#pb-reacquisitioncitizenship-form-who-is-this-for input, #pb-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_list_required_documents = document.getElementById('pb-reacquisitioncitizenship-list-required-documents');
  if (pb_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#pb-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_list_process = document.getElementById('pb-reacquisitioncitizenship-list-process');
  if (pb_reacquisitioncitizenship_list_process) {
    gsap.from('#pb-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('pb-reacquisitioncitizenship-section-timelines-deadlines');
  if (pb_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_fees_costs = document.getElementById('pb-reacquisitioncitizenship-section-fees-costs');
  if (pb_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('pb-reacquisitioncitizenship-list-risks-common-mistakes');
  if (pb_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#pb-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('pb-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (pb_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_paraba_specific_context = document.getElementById('pb-reacquisitioncitizenship-section-paraba-specific-context');
  if (pb_reacquisitioncitizenship_section_paraba_specific_context) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('pb-reacquisitioncitizenship-section-what-our-clients-say');
  if (pb_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('pb-reacquisitioncitizenship-section-frequently-asked-questions');
  if (pb_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_international_support = document.getElementById('pb-reacquisitioncitizenship-section-international-support');
  if (pb_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_list_our_credentials = document.getElementById('pb-reacquisitioncitizenship-list-our-credentials');
  if (pb_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#pb-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_list_related_services = document.getElementById('pb-reacquisitioncitizenship-list-related-services');
  if (pb_reacquisitioncitizenship_list_related_services) {
    gsap.from('#pb-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('pb-reacquisitioncitizenship-section-youre-in-good-hands');
  if (pb_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_reacquisitioncitizenship_section_21 = document.getElementById('pb-reacquisitioncitizenship-section-21');
  if (pb_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#pb-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('pb-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (pb_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#pb-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #pb-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_list_quick_facts = document.getElementById('pb-scientificresearch-list-quick-facts');
  if (pb_scientificresearch_list_quick_facts) {
    gsap.from('#pb-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_list_common_challenges_applicants_face = document.getElementById('pb-scientificresearch-list-common-challenges-applicants-face');
  if (pb_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#pb-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('pb-scientificresearch-list-how-we-solve-these-challenges');
  if (pb_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#pb-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_residency_overview = document.getElementById('pb-scientificresearch-section-residency-overview');
  if (pb_scientificresearch_section_residency_overview) {
    gsap.fromTo('#pb-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_form_who_is_this_residency_for = document.getElementById('pb-scientificresearch-form-who-is-this-residency-for');
  if (pb_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#pb-scientificresearch-form-who-is-this-residency-for input, #pb-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_list_required_documents = document.getElementById('pb-scientificresearch-list-required-documents');
  if (pb_scientificresearch_list_required_documents) {
    gsap.from('#pb-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_list_application_process = document.getElementById('pb-scientificresearch-list-application-process');
  if (pb_scientificresearch_list_application_process) {
    gsap.from('#pb-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_timelines_deadlines = document.getElementById('pb-scientificresearch-section-timelines-deadlines');
  if (pb_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#pb-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_fees_costs = document.getElementById('pb-scientificresearch-section-fees-costs');
  if (pb_scientificresearch_section_fees_costs) {
    gsap.fromTo('#pb-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_list_risks_common_mistakes = document.getElementById('pb-scientificresearch-list-risks-common-mistakes');
  if (pb_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#pb-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('pb-scientificresearch-section-diy-vs-professional-assistance');
  if (pb_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_paraba_specific_context = document.getElementById('pb-scientificresearch-section-paraba-specific-context');
  if (pb_scientificresearch_section_paraba_specific_context) {
    gsap.fromTo('#pb-scientificresearch-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_what_our_clients_say = document.getElementById('pb-scientificresearch-section-what-our-clients-say');
  if (pb_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#pb-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_frequently_asked_questions = document.getElementById('pb-scientificresearch-section-frequently-asked-questions');
  if (pb_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#pb-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_international_support = document.getElementById('pb-scientificresearch-section-international-support');
  if (pb_scientificresearch_section_international_support) {
    gsap.fromTo('#pb-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_list_our_credentials = document.getElementById('pb-scientificresearch-list-our-credentials');
  if (pb_scientificresearch_list_our_credentials) {
    gsap.from('#pb-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_list_related_services = document.getElementById('pb-scientificresearch-list-related-services');
  if (pb_scientificresearch_list_related_services) {
    gsap.from('#pb-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_youre_in_good_hands = document.getElementById('pb-scientificresearch-section-youre-in-good-hands');
  if (pb_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#pb-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_scientificresearch_section_21 = document.getElementById('pb-scientificresearch-section-21');
  if (pb_scientificresearch_section_21) {
    gsap.fromTo('#pb-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_form_study_in_brazil_with_study_residency = document.getElementById('pb-study-form-study-in-brazil-with-study-residency');
  if (pb_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#pb-study-form-study-in-brazil-with-study-residency input, #pb-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_list_quick_facts = document.getElementById('pb-study-list-quick-facts');
  if (pb_study_list_quick_facts) {
    gsap.from('#pb-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_list_common_challenges_applicants_face = document.getElementById('pb-study-list-common-challenges-applicants-face');
  if (pb_study_list_common_challenges_applicants_face) {
    gsap.from('#pb-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_list_how_we_solve_these_challenges = document.getElementById('pb-study-list-how-we-solve-these-challenges');
  if (pb_study_list_how_we_solve_these_challenges) {
    gsap.from('#pb-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_residency_overview = document.getElementById('pb-study-section-residency-overview');
  if (pb_study_section_residency_overview) {
    gsap.fromTo('#pb-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_form_who_is_this_residency_for = document.getElementById('pb-study-form-who-is-this-residency-for');
  if (pb_study_form_who_is_this_residency_for) {
    gsap.from('#pb-study-form-who-is-this-residency-for input, #pb-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_list_required_documents = document.getElementById('pb-study-list-required-documents');
  if (pb_study_list_required_documents) {
    gsap.from('#pb-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_list_application_process = document.getElementById('pb-study-list-application-process');
  if (pb_study_list_application_process) {
    gsap.from('#pb-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_timelines_deadlines = document.getElementById('pb-study-section-timelines-deadlines');
  if (pb_study_section_timelines_deadlines) {
    gsap.fromTo('#pb-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_fees_costs = document.getElementById('pb-study-section-fees-costs');
  if (pb_study_section_fees_costs) {
    gsap.fromTo('#pb-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_list_risks_common_mistakes = document.getElementById('pb-study-list-risks-common-mistakes');
  if (pb_study_list_risks_common_mistakes) {
    gsap.from('#pb-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_diy_vs_professional_assistance = document.getElementById('pb-study-section-diy-vs-professional-assistance');
  if (pb_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_paraba_specific_context = document.getElementById('pb-study-section-paraba-specific-context');
  if (pb_study_section_paraba_specific_context) {
    gsap.fromTo('#pb-study-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_what_our_clients_say = document.getElementById('pb-study-section-what-our-clients-say');
  if (pb_study_section_what_our_clients_say) {
    gsap.fromTo('#pb-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_frequently_asked_questions = document.getElementById('pb-study-section-frequently-asked-questions');
  if (pb_study_section_frequently_asked_questions) {
    gsap.fromTo('#pb-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_international_support = document.getElementById('pb-study-section-international-support');
  if (pb_study_section_international_support) {
    gsap.fromTo('#pb-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_list_our_credentials = document.getElementById('pb-study-list-our-credentials');
  if (pb_study_list_our_credentials) {
    gsap.from('#pb-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_list_related_services = document.getElementById('pb-study-list-related-services');
  if (pb_study_list_related_services) {
    gsap.from('#pb-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_youre_in_good_hands = document.getElementById('pb-study-section-youre-in-good-hands');
  if (pb_study_section_youre_in_good_hands) {
    gsap.fromTo('#pb-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_study_section_21 = document.getElementById('pb-study-section-21');
  if (pb_study_section_21) {
    gsap.fromTo('#pb-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('pb-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (pb_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#pb-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #pb-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_list_quick_facts = document.getElementById('pb-educationalexchange-list-quick-facts');
  if (pb_educationalexchange_list_quick_facts) {
    gsap.from('#pb-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_list_common_challenges_applicants_face = document.getElementById('pb-educationalexchange-list-common-challenges-applicants-face');
  if (pb_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#pb-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('pb-educationalexchange-list-how-we-solve-these-challenges');
  if (pb_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pb-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_residency_overview = document.getElementById('pb-educationalexchange-section-residency-overview');
  if (pb_educationalexchange_section_residency_overview) {
    gsap.fromTo('#pb-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_form_who_is_this_residency_for = document.getElementById('pb-educationalexchange-form-who-is-this-residency-for');
  if (pb_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#pb-educationalexchange-form-who-is-this-residency-for input, #pb-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_list_required_documents = document.getElementById('pb-educationalexchange-list-required-documents');
  if (pb_educationalexchange_list_required_documents) {
    gsap.from('#pb-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_list_application_process = document.getElementById('pb-educationalexchange-list-application-process');
  if (pb_educationalexchange_list_application_process) {
    gsap.from('#pb-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_timelines_deadlines = document.getElementById('pb-educationalexchange-section-timelines-deadlines');
  if (pb_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#pb-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_fees_costs = document.getElementById('pb-educationalexchange-section-fees-costs');
  if (pb_educationalexchange_section_fees_costs) {
    gsap.fromTo('#pb-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_list_risks_common_mistakes = document.getElementById('pb-educationalexchange-list-risks-common-mistakes');
  if (pb_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#pb-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('pb-educationalexchange-section-diy-vs-professional-assistance');
  if (pb_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_paraba_specific_context = document.getElementById('pb-educationalexchange-section-paraba-specific-context');
  if (pb_educationalexchange_section_paraba_specific_context) {
    gsap.fromTo('#pb-educationalexchange-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_what_our_clients_say = document.getElementById('pb-educationalexchange-section-what-our-clients-say');
  if (pb_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#pb-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_frequently_asked_questions = document.getElementById('pb-educationalexchange-section-frequently-asked-questions');
  if (pb_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pb-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_international_support = document.getElementById('pb-educationalexchange-section-international-support');
  if (pb_educationalexchange_section_international_support) {
    gsap.fromTo('#pb-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_list_our_credentials = document.getElementById('pb-educationalexchange-list-our-credentials');
  if (pb_educationalexchange_list_our_credentials) {
    gsap.from('#pb-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_list_related_services = document.getElementById('pb-educationalexchange-list-related-services');
  if (pb_educationalexchange_list_related_services) {
    gsap.from('#pb-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_youre_in_good_hands = document.getElementById('pb-educationalexchange-section-youre-in-good-hands');
  if (pb_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pb-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_educationalexchange_section_21 = document.getElementById('pb-educationalexchange-section-21');
  if (pb_educationalexchange_section_21) {
    gsap.fromTo('#pb-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('pb-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (pb_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#pb-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #pb-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_list_quick_facts = document.getElementById('pb-humanitarian-list-quick-facts');
  if (pb_humanitarian_list_quick_facts) {
    gsap.from('#pb-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_list_common_challenges_applicants_face = document.getElementById('pb-humanitarian-list-common-challenges-applicants-face');
  if (pb_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#pb-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_list_how_we_solve_these_challenges = document.getElementById('pb-humanitarian-list-how-we-solve-these-challenges');
  if (pb_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#pb-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_residency_overview = document.getElementById('pb-humanitarian-section-residency-overview');
  if (pb_humanitarian_section_residency_overview) {
    gsap.fromTo('#pb-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_form_who_is_this_residency_for = document.getElementById('pb-humanitarian-form-who-is-this-residency-for');
  if (pb_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#pb-humanitarian-form-who-is-this-residency-for input, #pb-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_list_required_documents = document.getElementById('pb-humanitarian-list-required-documents');
  if (pb_humanitarian_list_required_documents) {
    gsap.from('#pb-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_list_application_process = document.getElementById('pb-humanitarian-list-application-process');
  if (pb_humanitarian_list_application_process) {
    gsap.from('#pb-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_timelines_deadlines = document.getElementById('pb-humanitarian-section-timelines-deadlines');
  if (pb_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#pb-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_fees_costs = document.getElementById('pb-humanitarian-section-fees-costs');
  if (pb_humanitarian_section_fees_costs) {
    gsap.fromTo('#pb-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_list_risks_common_mistakes = document.getElementById('pb-humanitarian-list-risks-common-mistakes');
  if (pb_humanitarian_list_risks_common_mistakes) {
    gsap.from('#pb-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_diy_vs_professional_assistance = document.getElementById('pb-humanitarian-section-diy-vs-professional-assistance');
  if (pb_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_paraba_specific_context = document.getElementById('pb-humanitarian-section-paraba-specific-context');
  if (pb_humanitarian_section_paraba_specific_context) {
    gsap.fromTo('#pb-humanitarian-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_what_our_clients_say = document.getElementById('pb-humanitarian-section-what-our-clients-say');
  if (pb_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#pb-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_frequently_asked_questions = document.getElementById('pb-humanitarian-section-frequently-asked-questions');
  if (pb_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#pb-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_international_support = document.getElementById('pb-humanitarian-section-international-support');
  if (pb_humanitarian_section_international_support) {
    gsap.fromTo('#pb-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_list_our_credentials = document.getElementById('pb-humanitarian-list-our-credentials');
  if (pb_humanitarian_list_our_credentials) {
    gsap.from('#pb-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_list_related_services = document.getElementById('pb-humanitarian-list-related-services');
  if (pb_humanitarian_list_related_services) {
    gsap.from('#pb-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_youre_in_good_hands = document.getElementById('pb-humanitarian-section-youre-in-good-hands');
  if (pb_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#pb-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_humanitarian_section_21 = document.getElementById('pb-humanitarian-section-21');
  if (pb_humanitarian_section_21) {
    gsap.fromTo('#pb-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('pb-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (pb_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#pb-digitalnomad-form-digital-nomad-residency-in-brazil input, #pb-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_list_quick_facts = document.getElementById('pb-digitalnomad-list-quick-facts');
  if (pb_digitalnomad_list_quick_facts) {
    gsap.from('#pb-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_list_common_challenges_applicants_face = document.getElementById('pb-digitalnomad-list-common-challenges-applicants-face');
  if (pb_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#pb-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('pb-digitalnomad-list-how-we-solve-these-challenges');
  if (pb_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#pb-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_residency_overview = document.getElementById('pb-digitalnomad-section-residency-overview');
  if (pb_digitalnomad_section_residency_overview) {
    gsap.fromTo('#pb-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_form_who_is_this_residency_for = document.getElementById('pb-digitalnomad-form-who-is-this-residency-for');
  if (pb_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#pb-digitalnomad-form-who-is-this-residency-for input, #pb-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_list_required_documents = document.getElementById('pb-digitalnomad-list-required-documents');
  if (pb_digitalnomad_list_required_documents) {
    gsap.from('#pb-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_list_application_process = document.getElementById('pb-digitalnomad-list-application-process');
  if (pb_digitalnomad_list_application_process) {
    gsap.from('#pb-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_timelines_deadlines = document.getElementById('pb-digitalnomad-section-timelines-deadlines');
  if (pb_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#pb-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_fees_costs = document.getElementById('pb-digitalnomad-section-fees-costs');
  if (pb_digitalnomad_section_fees_costs) {
    gsap.fromTo('#pb-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_list_risks_common_mistakes = document.getElementById('pb-digitalnomad-list-risks-common-mistakes');
  if (pb_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#pb-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('pb-digitalnomad-section-diy-vs-professional-assistance');
  if (pb_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_paraba_specific_context = document.getElementById('pb-digitalnomad-section-paraba-specific-context');
  if (pb_digitalnomad_section_paraba_specific_context) {
    gsap.fromTo('#pb-digitalnomad-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_what_our_clients_say = document.getElementById('pb-digitalnomad-section-what-our-clients-say');
  if (pb_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#pb-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_frequently_asked_questions = document.getElementById('pb-digitalnomad-section-frequently-asked-questions');
  if (pb_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#pb-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_international_support = document.getElementById('pb-digitalnomad-section-international-support');
  if (pb_digitalnomad_section_international_support) {
    gsap.fromTo('#pb-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_list_our_credentials = document.getElementById('pb-digitalnomad-list-our-credentials');
  if (pb_digitalnomad_list_our_credentials) {
    gsap.from('#pb-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_list_related_services = document.getElementById('pb-digitalnomad-list-related-services');
  if (pb_digitalnomad_list_related_services) {
    gsap.from('#pb-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_youre_in_good_hands = document.getElementById('pb-digitalnomad-section-youre-in-good-hands');
  if (pb_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#pb-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_digitalnomad_section_21 = document.getElementById('pb-digitalnomad-section-21');
  if (pb_digitalnomad_section_21) {
    gsap.fromTo('#pb-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('pb-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (pb_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#pb-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #pb-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_list_quick_facts = document.getElementById('pb-familyreunion-list-quick-facts');
  if (pb_familyreunion_list_quick_facts) {
    gsap.from('#pb-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_list_common_challenges_applicants_face = document.getElementById('pb-familyreunion-list-common-challenges-applicants-face');
  if (pb_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#pb-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_list_how_we_solve_these_challenges = document.getElementById('pb-familyreunion-list-how-we-solve-these-challenges');
  if (pb_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#pb-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_residency_overview = document.getElementById('pb-familyreunion-section-residency-overview');
  if (pb_familyreunion_section_residency_overview) {
    gsap.fromTo('#pb-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_form_who_is_this_residency_for = document.getElementById('pb-familyreunion-form-who-is-this-residency-for');
  if (pb_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#pb-familyreunion-form-who-is-this-residency-for input, #pb-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_list_required_documents = document.getElementById('pb-familyreunion-list-required-documents');
  if (pb_familyreunion_list_required_documents) {
    gsap.from('#pb-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_list_application_process = document.getElementById('pb-familyreunion-list-application-process');
  if (pb_familyreunion_list_application_process) {
    gsap.from('#pb-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_timelines_deadlines = document.getElementById('pb-familyreunion-section-timelines-deadlines');
  if (pb_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#pb-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_fees_costs = document.getElementById('pb-familyreunion-section-fees-costs');
  if (pb_familyreunion_section_fees_costs) {
    gsap.fromTo('#pb-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_list_risks_common_mistakes = document.getElementById('pb-familyreunion-list-risks-common-mistakes');
  if (pb_familyreunion_list_risks_common_mistakes) {
    gsap.from('#pb-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_diy_vs_professional_assistance = document.getElementById('pb-familyreunion-section-diy-vs-professional-assistance');
  if (pb_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_paraba_specific_context = document.getElementById('pb-familyreunion-section-paraba-specific-context');
  if (pb_familyreunion_section_paraba_specific_context) {
    gsap.fromTo('#pb-familyreunion-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_what_our_clients_say = document.getElementById('pb-familyreunion-section-what-our-clients-say');
  if (pb_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#pb-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_frequently_asked_questions = document.getElementById('pb-familyreunion-section-frequently-asked-questions');
  if (pb_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#pb-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_international_support = document.getElementById('pb-familyreunion-section-international-support');
  if (pb_familyreunion_section_international_support) {
    gsap.fromTo('#pb-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_list_our_credentials = document.getElementById('pb-familyreunion-list-our-credentials');
  if (pb_familyreunion_list_our_credentials) {
    gsap.from('#pb-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_list_related_services = document.getElementById('pb-familyreunion-list-related-services');
  if (pb_familyreunion_list_related_services) {
    gsap.from('#pb-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_youre_in_good_hands = document.getElementById('pb-familyreunion-section-youre-in-good-hands');
  if (pb_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#pb-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_familyreunion_section_21 = document.getElementById('pb-familyreunion-section-21');
  if (pb_familyreunion_section_21) {
    gsap.fromTo('#pb-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('pb-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (pb_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#pb-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #pb-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_list_quick_facts = document.getElementById('pb-mercosul-list-quick-facts');
  if (pb_mercosul_list_quick_facts) {
    gsap.from('#pb-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_list_common_challenges_applicants_face = document.getElementById('pb-mercosul-list-common-challenges-applicants-face');
  if (pb_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#pb-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_list_how_we_solve_these_challenges = document.getElementById('pb-mercosul-list-how-we-solve-these-challenges');
  if (pb_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#pb-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_residency_overview = document.getElementById('pb-mercosul-section-residency-overview');
  if (pb_mercosul_section_residency_overview) {
    gsap.fromTo('#pb-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_form_who_is_this_residency_for = document.getElementById('pb-mercosul-form-who-is-this-residency-for');
  if (pb_mercosul_form_who_is_this_residency_for) {
    gsap.from('#pb-mercosul-form-who-is-this-residency-for input, #pb-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_list_required_documents = document.getElementById('pb-mercosul-list-required-documents');
  if (pb_mercosul_list_required_documents) {
    gsap.from('#pb-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_list_application_process = document.getElementById('pb-mercosul-list-application-process');
  if (pb_mercosul_list_application_process) {
    gsap.from('#pb-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_timelines_deadlines = document.getElementById('pb-mercosul-section-timelines-deadlines');
  if (pb_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#pb-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_fees_costs = document.getElementById('pb-mercosul-section-fees-costs');
  if (pb_mercosul_section_fees_costs) {
    gsap.fromTo('#pb-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_list_risks_common_mistakes = document.getElementById('pb-mercosul-list-risks-common-mistakes');
  if (pb_mercosul_list_risks_common_mistakes) {
    gsap.from('#pb-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_diy_vs_professional_assistance = document.getElementById('pb-mercosul-section-diy-vs-professional-assistance');
  if (pb_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_paraba_specific_context = document.getElementById('pb-mercosul-section-paraba-specific-context');
  if (pb_mercosul_section_paraba_specific_context) {
    gsap.fromTo('#pb-mercosul-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_what_our_clients_say = document.getElementById('pb-mercosul-section-what-our-clients-say');
  if (pb_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#pb-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_frequently_asked_questions = document.getElementById('pb-mercosul-section-frequently-asked-questions');
  if (pb_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#pb-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_international_support = document.getElementById('pb-mercosul-section-international-support');
  if (pb_mercosul_section_international_support) {
    gsap.fromTo('#pb-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_list_our_credentials = document.getElementById('pb-mercosul-list-our-credentials');
  if (pb_mercosul_list_our_credentials) {
    gsap.from('#pb-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_list_related_services = document.getElementById('pb-mercosul-list-related-services');
  if (pb_mercosul_list_related_services) {
    gsap.from('#pb-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_youre_in_good_hands = document.getElementById('pb-mercosul-section-youre-in-good-hands');
  if (pb_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#pb-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_mercosul_section_21 = document.getElementById('pb-mercosul-section-21');
  if (pb_mercosul_section_21) {
    gsap.fromTo('#pb-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('pb-retiree-form-retire-in-brazil-with-retiree-residency');
  if (pb_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#pb-retiree-form-retire-in-brazil-with-retiree-residency input, #pb-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_list_quick_facts = document.getElementById('pb-retiree-list-quick-facts');
  if (pb_retiree_list_quick_facts) {
    gsap.from('#pb-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_list_common_challenges_applicants_face = document.getElementById('pb-retiree-list-common-challenges-applicants-face');
  if (pb_retiree_list_common_challenges_applicants_face) {
    gsap.from('#pb-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_list_how_we_solve_these_challenges = document.getElementById('pb-retiree-list-how-we-solve-these-challenges');
  if (pb_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#pb-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_residency_overview = document.getElementById('pb-retiree-section-residency-overview');
  if (pb_retiree_section_residency_overview) {
    gsap.fromTo('#pb-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_form_who_is_this_residency_for = document.getElementById('pb-retiree-form-who-is-this-residency-for');
  if (pb_retiree_form_who_is_this_residency_for) {
    gsap.from('#pb-retiree-form-who-is-this-residency-for input, #pb-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_list_required_documents = document.getElementById('pb-retiree-list-required-documents');
  if (pb_retiree_list_required_documents) {
    gsap.from('#pb-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_list_application_process = document.getElementById('pb-retiree-list-application-process');
  if (pb_retiree_list_application_process) {
    gsap.from('#pb-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_timelines_deadlines = document.getElementById('pb-retiree-section-timelines-deadlines');
  if (pb_retiree_section_timelines_deadlines) {
    gsap.fromTo('#pb-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_fees_costs = document.getElementById('pb-retiree-section-fees-costs');
  if (pb_retiree_section_fees_costs) {
    gsap.fromTo('#pb-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_list_risks_common_mistakes = document.getElementById('pb-retiree-list-risks-common-mistakes');
  if (pb_retiree_list_risks_common_mistakes) {
    gsap.from('#pb-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_diy_vs_professional_assistance = document.getElementById('pb-retiree-section-diy-vs-professional-assistance');
  if (pb_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_paraba_specific_context = document.getElementById('pb-retiree-section-paraba-specific-context');
  if (pb_retiree_section_paraba_specific_context) {
    gsap.fromTo('#pb-retiree-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_what_our_clients_say = document.getElementById('pb-retiree-section-what-our-clients-say');
  if (pb_retiree_section_what_our_clients_say) {
    gsap.fromTo('#pb-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_frequently_asked_questions = document.getElementById('pb-retiree-section-frequently-asked-questions');
  if (pb_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#pb-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_international_support = document.getElementById('pb-retiree-section-international-support');
  if (pb_retiree_section_international_support) {
    gsap.fromTo('#pb-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_list_our_credentials = document.getElementById('pb-retiree-list-our-credentials');
  if (pb_retiree_list_our_credentials) {
    gsap.from('#pb-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_list_related_services = document.getElementById('pb-retiree-list-related-services');
  if (pb_retiree_list_related_services) {
    gsap.from('#pb-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_youre_in_good_hands = document.getElementById('pb-retiree-section-youre-in-good-hands');
  if (pb_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#pb-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_retiree_section_21 = document.getElementById('pb-retiree-section-21');
  if (pb_retiree_section_21) {
    gsap.fromTo('#pb-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('pb-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (pb_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#pb-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #pb-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_list_quick_facts = document.getElementById('pb-volunteer-list-quick-facts');
  if (pb_volunteer_list_quick_facts) {
    gsap.from('#pb-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_list_common_challenges_applicants_face = document.getElementById('pb-volunteer-list-common-challenges-applicants-face');
  if (pb_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#pb-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_list_how_we_solve_these_challenges = document.getElementById('pb-volunteer-list-how-we-solve-these-challenges');
  if (pb_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#pb-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_residency_overview = document.getElementById('pb-volunteer-section-residency-overview');
  if (pb_volunteer_section_residency_overview) {
    gsap.fromTo('#pb-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_form_who_is_this_residency_for = document.getElementById('pb-volunteer-form-who-is-this-residency-for');
  if (pb_volunteer_form_who_is_this_residency_for) {
    gsap.from('#pb-volunteer-form-who-is-this-residency-for input, #pb-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_list_required_documents = document.getElementById('pb-volunteer-list-required-documents');
  if (pb_volunteer_list_required_documents) {
    gsap.from('#pb-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_list_application_process = document.getElementById('pb-volunteer-list-application-process');
  if (pb_volunteer_list_application_process) {
    gsap.from('#pb-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_timelines_deadlines = document.getElementById('pb-volunteer-section-timelines-deadlines');
  if (pb_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#pb-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_fees_costs = document.getElementById('pb-volunteer-section-fees-costs');
  if (pb_volunteer_section_fees_costs) {
    gsap.fromTo('#pb-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_list_risks_common_mistakes = document.getElementById('pb-volunteer-list-risks-common-mistakes');
  if (pb_volunteer_list_risks_common_mistakes) {
    gsap.from('#pb-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_diy_vs_professional_assistance = document.getElementById('pb-volunteer-section-diy-vs-professional-assistance');
  if (pb_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_paraba_specific_context = document.getElementById('pb-volunteer-section-paraba-specific-context');
  if (pb_volunteer_section_paraba_specific_context) {
    gsap.fromTo('#pb-volunteer-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_what_our_clients_say = document.getElementById('pb-volunteer-section-what-our-clients-say');
  if (pb_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#pb-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_frequently_asked_questions = document.getElementById('pb-volunteer-section-frequently-asked-questions');
  if (pb_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#pb-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_international_support = document.getElementById('pb-volunteer-section-international-support');
  if (pb_volunteer_section_international_support) {
    gsap.fromTo('#pb-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_list_our_credentials = document.getElementById('pb-volunteer-list-our-credentials');
  if (pb_volunteer_list_our_credentials) {
    gsap.from('#pb-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_list_related_services = document.getElementById('pb-volunteer-list-related-services');
  if (pb_volunteer_list_related_services) {
    gsap.from('#pb-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_youre_in_good_hands = document.getElementById('pb-volunteer-section-youre-in-good-hands');
  if (pb_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#pb-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_volunteer_section_21 = document.getElementById('pb-volunteer-section-21');
  if (pb_volunteer_section_21) {
    gsap.fromTo('#pb-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('pb-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (pb_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#pb-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #pb-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_list_quick_facts = document.getElementById('pb-skilledworker-list-quick-facts');
  if (pb_skilledworker_list_quick_facts) {
    gsap.from('#pb-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_list_common_challenges_applicants_face = document.getElementById('pb-skilledworker-list-common-challenges-applicants-face');
  if (pb_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#pb-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_list_how_we_solve_these_challenges = document.getElementById('pb-skilledworker-list-how-we-solve-these-challenges');
  if (pb_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#pb-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_residency_overview = document.getElementById('pb-skilledworker-section-residency-overview');
  if (pb_skilledworker_section_residency_overview) {
    gsap.fromTo('#pb-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_form_who_is_this_residency_for = document.getElementById('pb-skilledworker-form-who-is-this-residency-for');
  if (pb_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#pb-skilledworker-form-who-is-this-residency-for input, #pb-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_list_required_documents = document.getElementById('pb-skilledworker-list-required-documents');
  if (pb_skilledworker_list_required_documents) {
    gsap.from('#pb-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_list_application_process = document.getElementById('pb-skilledworker-list-application-process');
  if (pb_skilledworker_list_application_process) {
    gsap.from('#pb-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_timelines_deadlines = document.getElementById('pb-skilledworker-section-timelines-deadlines');
  if (pb_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#pb-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_fees_costs = document.getElementById('pb-skilledworker-section-fees-costs');
  if (pb_skilledworker_section_fees_costs) {
    gsap.fromTo('#pb-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_list_risks_common_mistakes = document.getElementById('pb-skilledworker-list-risks-common-mistakes');
  if (pb_skilledworker_list_risks_common_mistakes) {
    gsap.from('#pb-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_diy_vs_professional_assistance = document.getElementById('pb-skilledworker-section-diy-vs-professional-assistance');
  if (pb_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_paraba_specific_context = document.getElementById('pb-skilledworker-section-paraba-specific-context');
  if (pb_skilledworker_section_paraba_specific_context) {
    gsap.fromTo('#pb-skilledworker-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_what_our_clients_say = document.getElementById('pb-skilledworker-section-what-our-clients-say');
  if (pb_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#pb-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_frequently_asked_questions = document.getElementById('pb-skilledworker-section-frequently-asked-questions');
  if (pb_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#pb-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_international_support = document.getElementById('pb-skilledworker-section-international-support');
  if (pb_skilledworker_section_international_support) {
    gsap.fromTo('#pb-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_list_our_credentials = document.getElementById('pb-skilledworker-list-our-credentials');
  if (pb_skilledworker_list_our_credentials) {
    gsap.from('#pb-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_list_related_services = document.getElementById('pb-skilledworker-list-related-services');
  if (pb_skilledworker_list_related_services) {
    gsap.from('#pb-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_youre_in_good_hands = document.getElementById('pb-skilledworker-section-youre-in-good-hands');
  if (pb_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#pb-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_skilledworker_section_21 = document.getElementById('pb-skilledworker-section-21');
  if (pb_skilledworker_section_21) {
    gsap.fromTo('#pb-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('pb-religious-form-religious-residency-in-brazil-for-missions');
  if (pb_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#pb-religious-form-religious-residency-in-brazil-for-missions input, #pb-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_list_quick_facts = document.getElementById('pb-religious-list-quick-facts');
  if (pb_religious_list_quick_facts) {
    gsap.from('#pb-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_list_common_challenges_applicants_face = document.getElementById('pb-religious-list-common-challenges-applicants-face');
  if (pb_religious_list_common_challenges_applicants_face) {
    gsap.from('#pb-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_list_how_we_solve_these_challenges = document.getElementById('pb-religious-list-how-we-solve-these-challenges');
  if (pb_religious_list_how_we_solve_these_challenges) {
    gsap.from('#pb-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_residency_overview = document.getElementById('pb-religious-section-residency-overview');
  if (pb_religious_section_residency_overview) {
    gsap.fromTo('#pb-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_form_who_is_this_residency_for = document.getElementById('pb-religious-form-who-is-this-residency-for');
  if (pb_religious_form_who_is_this_residency_for) {
    gsap.from('#pb-religious-form-who-is-this-residency-for input, #pb-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_list_required_documents = document.getElementById('pb-religious-list-required-documents');
  if (pb_religious_list_required_documents) {
    gsap.from('#pb-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_list_application_process = document.getElementById('pb-religious-list-application-process');
  if (pb_religious_list_application_process) {
    gsap.from('#pb-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_timelines_deadlines = document.getElementById('pb-religious-section-timelines-deadlines');
  if (pb_religious_section_timelines_deadlines) {
    gsap.fromTo('#pb-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_fees_costs = document.getElementById('pb-religious-section-fees-costs');
  if (pb_religious_section_fees_costs) {
    gsap.fromTo('#pb-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_list_risks_common_mistakes = document.getElementById('pb-religious-list-risks-common-mistakes');
  if (pb_religious_list_risks_common_mistakes) {
    gsap.from('#pb-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_diy_vs_professional_assistance = document.getElementById('pb-religious-section-diy-vs-professional-assistance');
  if (pb_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_paraba_specific_context = document.getElementById('pb-religious-section-paraba-specific-context');
  if (pb_religious_section_paraba_specific_context) {
    gsap.fromTo('#pb-religious-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_what_our_clients_say = document.getElementById('pb-religious-section-what-our-clients-say');
  if (pb_religious_section_what_our_clients_say) {
    gsap.fromTo('#pb-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_frequently_asked_questions = document.getElementById('pb-religious-section-frequently-asked-questions');
  if (pb_religious_section_frequently_asked_questions) {
    gsap.fromTo('#pb-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_international_support = document.getElementById('pb-religious-section-international-support');
  if (pb_religious_section_international_support) {
    gsap.fromTo('#pb-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_list_our_credentials = document.getElementById('pb-religious-list-our-credentials');
  if (pb_religious_list_our_credentials) {
    gsap.from('#pb-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_list_related_services = document.getElementById('pb-religious-list-related-services');
  if (pb_religious_list_related_services) {
    gsap.from('#pb-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_youre_in_good_hands = document.getElementById('pb-religious-section-youre-in-good-hands');
  if (pb_religious_section_youre_in_good_hands) {
    gsap.fromTo('#pb-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_religious_section_21 = document.getElementById('pb-religious-section-21');
  if (pb_religious_section_21) {
    gsap.fromTo('#pb-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('pb-investor-form-gain-residency-in-brazil-through-investment');
  if (pb_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#pb-investor-form-gain-residency-in-brazil-through-investment input, #pb-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_list_quick_facts = document.getElementById('pb-investor-list-quick-facts');
  if (pb_investor_list_quick_facts) {
    gsap.from('#pb-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_list_common_challenges_applicants_face = document.getElementById('pb-investor-list-common-challenges-applicants-face');
  if (pb_investor_list_common_challenges_applicants_face) {
    gsap.from('#pb-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_list_how_we_solve_these_challenges = document.getElementById('pb-investor-list-how-we-solve-these-challenges');
  if (pb_investor_list_how_we_solve_these_challenges) {
    gsap.from('#pb-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_residency_overview = document.getElementById('pb-investor-section-residency-overview');
  if (pb_investor_section_residency_overview) {
    gsap.fromTo('#pb-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_form_who_is_this_residency_for = document.getElementById('pb-investor-form-who-is-this-residency-for');
  if (pb_investor_form_who_is_this_residency_for) {
    gsap.from('#pb-investor-form-who-is-this-residency-for input, #pb-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_list_required_documents = document.getElementById('pb-investor-list-required-documents');
  if (pb_investor_list_required_documents) {
    gsap.from('#pb-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_list_application_process = document.getElementById('pb-investor-list-application-process');
  if (pb_investor_list_application_process) {
    gsap.from('#pb-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_timelines_deadlines = document.getElementById('pb-investor-section-timelines-deadlines');
  if (pb_investor_section_timelines_deadlines) {
    gsap.fromTo('#pb-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_fees_costs = document.getElementById('pb-investor-section-fees-costs');
  if (pb_investor_section_fees_costs) {
    gsap.fromTo('#pb-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_list_risks_common_mistakes = document.getElementById('pb-investor-list-risks-common-mistakes');
  if (pb_investor_list_risks_common_mistakes) {
    gsap.from('#pb-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_diy_vs_professional_assistance = document.getElementById('pb-investor-section-diy-vs-professional-assistance');
  if (pb_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_paraba_specific_context = document.getElementById('pb-investor-section-paraba-specific-context');
  if (pb_investor_section_paraba_specific_context) {
    gsap.fromTo('#pb-investor-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_what_our_clients_say = document.getElementById('pb-investor-section-what-our-clients-say');
  if (pb_investor_section_what_our_clients_say) {
    gsap.fromTo('#pb-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_frequently_asked_questions = document.getElementById('pb-investor-section-frequently-asked-questions');
  if (pb_investor_section_frequently_asked_questions) {
    gsap.fromTo('#pb-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_international_support = document.getElementById('pb-investor-section-international-support');
  if (pb_investor_section_international_support) {
    gsap.fromTo('#pb-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_list_our_credentials = document.getElementById('pb-investor-list-our-credentials');
  if (pb_investor_list_our_credentials) {
    gsap.from('#pb-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_list_related_services = document.getElementById('pb-investor-list-related-services');
  if (pb_investor_list_related_services) {
    gsap.from('#pb-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_youre_in_good_hands = document.getElementById('pb-investor-section-youre-in-good-hands');
  if (pb_investor_section_youre_in_good_hands) {
    gsap.fromTo('#pb-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_investor_section_21 = document.getElementById('pb-investor-section-21');
  if (pb_investor_section_21) {
    gsap.fromTo('#pb-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('pb-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (pb_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#pb-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #pb-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_list_quick_facts = document.getElementById('pb-healthtreatment-list-quick-facts');
  if (pb_healthtreatment_list_quick_facts) {
    gsap.from('#pb-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_list_common_challenges_applicants_face = document.getElementById('pb-healthtreatment-list-common-challenges-applicants-face');
  if (pb_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#pb-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('pb-healthtreatment-list-how-we-solve-these-challenges');
  if (pb_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#pb-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_residency_overview = document.getElementById('pb-healthtreatment-section-residency-overview');
  if (pb_healthtreatment_section_residency_overview) {
    gsap.fromTo('#pb-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_form_who_is_this_residency_for = document.getElementById('pb-healthtreatment-form-who-is-this-residency-for');
  if (pb_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#pb-healthtreatment-form-who-is-this-residency-for input, #pb-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_list_required_documents = document.getElementById('pb-healthtreatment-list-required-documents');
  if (pb_healthtreatment_list_required_documents) {
    gsap.from('#pb-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_list_application_process = document.getElementById('pb-healthtreatment-list-application-process');
  if (pb_healthtreatment_list_application_process) {
    gsap.from('#pb-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_timelines_deadlines = document.getElementById('pb-healthtreatment-section-timelines-deadlines');
  if (pb_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#pb-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_fees_costs = document.getElementById('pb-healthtreatment-section-fees-costs');
  if (pb_healthtreatment_section_fees_costs) {
    gsap.fromTo('#pb-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_list_risks_common_mistakes = document.getElementById('pb-healthtreatment-list-risks-common-mistakes');
  if (pb_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#pb-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('pb-healthtreatment-section-diy-vs-professional-assistance');
  if (pb_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_paraba_specific_context = document.getElementById('pb-healthtreatment-section-paraba-specific-context');
  if (pb_healthtreatment_section_paraba_specific_context) {
    gsap.fromTo('#pb-healthtreatment-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_what_our_clients_say = document.getElementById('pb-healthtreatment-section-what-our-clients-say');
  if (pb_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#pb-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_frequently_asked_questions = document.getElementById('pb-healthtreatment-section-frequently-asked-questions');
  if (pb_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#pb-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_international_support = document.getElementById('pb-healthtreatment-section-international-support');
  if (pb_healthtreatment_section_international_support) {
    gsap.fromTo('#pb-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_list_our_credentials = document.getElementById('pb-healthtreatment-list-our-credentials');
  if (pb_healthtreatment_list_our_credentials) {
    gsap.from('#pb-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_list_related_services = document.getElementById('pb-healthtreatment-list-related-services');
  if (pb_healthtreatment_list_related_services) {
    gsap.from('#pb-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_youre_in_good_hands = document.getElementById('pb-healthtreatment-section-youre-in-good-hands');
  if (pb_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#pb-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_healthtreatment_section_21 = document.getElementById('pb-healthtreatment-section-21');
  if (pb_healthtreatment_section_21) {
    gsap.fromTo('#pb-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('pb-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (pb_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#pb-cplp-form-residency-for-cplp-citizens-in-brazil input, #pb-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_list_quick_facts = document.getElementById('pb-cplp-list-quick-facts');
  if (pb_cplp_list_quick_facts) {
    gsap.from('#pb-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_list_common_challenges_applicants_face = document.getElementById('pb-cplp-list-common-challenges-applicants-face');
  if (pb_cplp_list_common_challenges_applicants_face) {
    gsap.from('#pb-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_list_how_we_solve_these_challenges = document.getElementById('pb-cplp-list-how-we-solve-these-challenges');
  if (pb_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#pb-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_residency_overview = document.getElementById('pb-cplp-section-residency-overview');
  if (pb_cplp_section_residency_overview) {
    gsap.fromTo('#pb-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_form_who_is_this_residency_for = document.getElementById('pb-cplp-form-who-is-this-residency-for');
  if (pb_cplp_form_who_is_this_residency_for) {
    gsap.from('#pb-cplp-form-who-is-this-residency-for input, #pb-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_list_required_documents = document.getElementById('pb-cplp-list-required-documents');
  if (pb_cplp_list_required_documents) {
    gsap.from('#pb-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_list_application_process = document.getElementById('pb-cplp-list-application-process');
  if (pb_cplp_list_application_process) {
    gsap.from('#pb-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_timelines_deadlines = document.getElementById('pb-cplp-section-timelines-deadlines');
  if (pb_cplp_section_timelines_deadlines) {
    gsap.fromTo('#pb-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_fees_costs = document.getElementById('pb-cplp-section-fees-costs');
  if (pb_cplp_section_fees_costs) {
    gsap.fromTo('#pb-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_list_risks_common_mistakes = document.getElementById('pb-cplp-list-risks-common-mistakes');
  if (pb_cplp_list_risks_common_mistakes) {
    gsap.from('#pb-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_diy_vs_professional_assistance = document.getElementById('pb-cplp-section-diy-vs-professional-assistance');
  if (pb_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_paraba_specific_context = document.getElementById('pb-cplp-section-paraba-specific-context');
  if (pb_cplp_section_paraba_specific_context) {
    gsap.fromTo('#pb-cplp-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_what_our_clients_say = document.getElementById('pb-cplp-section-what-our-clients-say');
  if (pb_cplp_section_what_our_clients_say) {
    gsap.fromTo('#pb-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_frequently_asked_questions = document.getElementById('pb-cplp-section-frequently-asked-questions');
  if (pb_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#pb-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_international_support = document.getElementById('pb-cplp-section-international-support');
  if (pb_cplp_section_international_support) {
    gsap.fromTo('#pb-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_list_our_credentials = document.getElementById('pb-cplp-list-our-credentials');
  if (pb_cplp_list_our_credentials) {
    gsap.from('#pb-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_list_related_services = document.getElementById('pb-cplp-list-related-services');
  if (pb_cplp_list_related_services) {
    gsap.from('#pb-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_youre_in_good_hands = document.getElementById('pb-cplp-section-youre-in-good-hands');
  if (pb_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#pb-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_cplp_section_21 = document.getElementById('pb-cplp-section-21');
  if (pb_cplp_section_21) {
    gsap.fromTo('#pb-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('pb-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (pb_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#pb-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #pb-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_list_quick_facts = document.getElementById('pb-youthexchange-list-quick-facts');
  if (pb_youthexchange_list_quick_facts) {
    gsap.from('#pb-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_list_common_challenges_applicants_face = document.getElementById('pb-youthexchange-list-common-challenges-applicants-face');
  if (pb_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#pb-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_list_how_we_solve_these_challenges = document.getElementById('pb-youthexchange-list-how-we-solve-these-challenges');
  if (pb_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pb-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_residency_overview = document.getElementById('pb-youthexchange-section-residency-overview');
  if (pb_youthexchange_section_residency_overview) {
    gsap.fromTo('#pb-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_form_who_is_this_residency_for = document.getElementById('pb-youthexchange-form-who-is-this-residency-for');
  if (pb_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#pb-youthexchange-form-who-is-this-residency-for input, #pb-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_list_required_documents = document.getElementById('pb-youthexchange-list-required-documents');
  if (pb_youthexchange_list_required_documents) {
    gsap.from('#pb-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_list_application_process = document.getElementById('pb-youthexchange-list-application-process');
  if (pb_youthexchange_list_application_process) {
    gsap.from('#pb-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_timelines_deadlines = document.getElementById('pb-youthexchange-section-timelines-deadlines');
  if (pb_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#pb-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_fees_costs = document.getElementById('pb-youthexchange-section-fees-costs');
  if (pb_youthexchange_section_fees_costs) {
    gsap.fromTo('#pb-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_list_risks_common_mistakes = document.getElementById('pb-youthexchange-list-risks-common-mistakes');
  if (pb_youthexchange_list_risks_common_mistakes) {
    gsap.from('#pb-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_diy_vs_professional_assistance = document.getElementById('pb-youthexchange-section-diy-vs-professional-assistance');
  if (pb_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_paraba_specific_context = document.getElementById('pb-youthexchange-section-paraba-specific-context');
  if (pb_youthexchange_section_paraba_specific_context) {
    gsap.fromTo('#pb-youthexchange-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_what_our_clients_say = document.getElementById('pb-youthexchange-section-what-our-clients-say');
  if (pb_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#pb-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_frequently_asked_questions = document.getElementById('pb-youthexchange-section-frequently-asked-questions');
  if (pb_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pb-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_international_support = document.getElementById('pb-youthexchange-section-international-support');
  if (pb_youthexchange_section_international_support) {
    gsap.fromTo('#pb-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_list_our_credentials = document.getElementById('pb-youthexchange-list-our-credentials');
  if (pb_youthexchange_list_our_credentials) {
    gsap.from('#pb-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_list_related_services = document.getElementById('pb-youthexchange-list-related-services');
  if (pb_youthexchange_list_related_services) {
    gsap.from('#pb-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_youre_in_good_hands = document.getElementById('pb-youthexchange-section-youre-in-good-hands');
  if (pb_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pb-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_youthexchange_section_21 = document.getElementById('pb-youthexchange-section-21');
  if (pb_youthexchange_section_21) {
    gsap.fromTo('#pb-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('pb-work-form-work-and-reside-in-brazil-with-work-residency');
  if (pb_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#pb-work-form-work-and-reside-in-brazil-with-work-residency input, #pb-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_list_quick_facts = document.getElementById('pb-work-list-quick-facts');
  if (pb_work_list_quick_facts) {
    gsap.from('#pb-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_list_common_challenges_applicants_face = document.getElementById('pb-work-list-common-challenges-applicants-face');
  if (pb_work_list_common_challenges_applicants_face) {
    gsap.from('#pb-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_list_how_we_solve_these_challenges = document.getElementById('pb-work-list-how-we-solve-these-challenges');
  if (pb_work_list_how_we_solve_these_challenges) {
    gsap.from('#pb-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_residency_overview = document.getElementById('pb-work-section-residency-overview');
  if (pb_work_section_residency_overview) {
    gsap.fromTo('#pb-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_form_who_is_this_residency_for = document.getElementById('pb-work-form-who-is-this-residency-for');
  if (pb_work_form_who_is_this_residency_for) {
    gsap.from('#pb-work-form-who-is-this-residency-for input, #pb-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_list_required_documents = document.getElementById('pb-work-list-required-documents');
  if (pb_work_list_required_documents) {
    gsap.from('#pb-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_list_application_process = document.getElementById('pb-work-list-application-process');
  if (pb_work_list_application_process) {
    gsap.from('#pb-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_timelines_deadlines = document.getElementById('pb-work-section-timelines-deadlines');
  if (pb_work_section_timelines_deadlines) {
    gsap.fromTo('#pb-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_fees_costs = document.getElementById('pb-work-section-fees-costs');
  if (pb_work_section_fees_costs) {
    gsap.fromTo('#pb-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_list_risks_common_mistakes = document.getElementById('pb-work-list-risks-common-mistakes');
  if (pb_work_list_risks_common_mistakes) {
    gsap.from('#pb-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_diy_vs_professional_assistance = document.getElementById('pb-work-section-diy-vs-professional-assistance');
  if (pb_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_paraba_specific_context = document.getElementById('pb-work-section-paraba-specific-context');
  if (pb_work_section_paraba_specific_context) {
    gsap.fromTo('#pb-work-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_what_our_clients_say = document.getElementById('pb-work-section-what-our-clients-say');
  if (pb_work_section_what_our_clients_say) {
    gsap.fromTo('#pb-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_frequently_asked_questions = document.getElementById('pb-work-section-frequently-asked-questions');
  if (pb_work_section_frequently_asked_questions) {
    gsap.fromTo('#pb-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_international_support = document.getElementById('pb-work-section-international-support');
  if (pb_work_section_international_support) {
    gsap.fromTo('#pb-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_list_our_credentials = document.getElementById('pb-work-list-our-credentials');
  if (pb_work_list_our_credentials) {
    gsap.from('#pb-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_list_related_services = document.getElementById('pb-work-list-related-services');
  if (pb_work_list_related_services) {
    gsap.from('#pb-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_youre_in_good_hands = document.getElementById('pb-work-section-youre-in-good-hands');
  if (pb_work_section_youre_in_good_hands) {
    gsap.fromTo('#pb-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_work_section_21 = document.getElementById('pb-work-section-21');
  if (pb_work_section_21) {
    gsap.fromTo('#pb-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('pb-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (pb_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#pb-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #pb-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_list_quick_facts = document.getElementById('pb-startup-list-quick-facts');
  if (pb_startup_list_quick_facts) {
    gsap.from('#pb-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_list_common_challenges_applicants_face = document.getElementById('pb-startup-list-common-challenges-applicants-face');
  if (pb_startup_list_common_challenges_applicants_face) {
    gsap.from('#pb-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_list_how_we_solve_these_challenges = document.getElementById('pb-startup-list-how-we-solve-these-challenges');
  if (pb_startup_list_how_we_solve_these_challenges) {
    gsap.from('#pb-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_visa_overview = document.getElementById('pb-startup-section-visa-overview');
  if (pb_startup_section_visa_overview) {
    gsap.fromTo('#pb-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_form_who_is_this_visa_for = document.getElementById('pb-startup-form-who-is-this-visa-for');
  if (pb_startup_form_who_is_this_visa_for) {
    gsap.from('#pb-startup-form-who-is-this-visa-for input, #pb-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_list_required_documents = document.getElementById('pb-startup-list-required-documents');
  if (pb_startup_list_required_documents) {
    gsap.from('#pb-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_list_application_process = document.getElementById('pb-startup-list-application-process');
  if (pb_startup_list_application_process) {
    gsap.from('#pb-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_timelines_deadlines = document.getElementById('pb-startup-section-timelines-deadlines');
  if (pb_startup_section_timelines_deadlines) {
    gsap.fromTo('#pb-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_fees_costs = document.getElementById('pb-startup-section-fees-costs');
  if (pb_startup_section_fees_costs) {
    gsap.fromTo('#pb-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_list_risks_common_mistakes = document.getElementById('pb-startup-list-risks-common-mistakes');
  if (pb_startup_list_risks_common_mistakes) {
    gsap.from('#pb-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_diy_vs_professional_assistance = document.getElementById('pb-startup-section-diy-vs-professional-assistance');
  if (pb_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_paraba_specific_context = document.getElementById('pb-startup-section-paraba-specific-context');
  if (pb_startup_section_paraba_specific_context) {
    gsap.fromTo('#pb-startup-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_what_our_clients_say = document.getElementById('pb-startup-section-what-our-clients-say');
  if (pb_startup_section_what_our_clients_say) {
    gsap.fromTo('#pb-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_frequently_asked_questions = document.getElementById('pb-startup-section-frequently-asked-questions');
  if (pb_startup_section_frequently_asked_questions) {
    gsap.fromTo('#pb-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_international_support = document.getElementById('pb-startup-section-international-support');
  if (pb_startup_section_international_support) {
    gsap.fromTo('#pb-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_list_our_credentials = document.getElementById('pb-startup-list-our-credentials');
  if (pb_startup_list_our_credentials) {
    gsap.from('#pb-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_list_related_services = document.getElementById('pb-startup-list-related-services');
  if (pb_startup_list_related_services) {
    gsap.from('#pb-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_youre_in_good_hands = document.getElementById('pb-startup-section-youre-in-good-hands');
  if (pb_startup_section_youre_in_good_hands) {
    gsap.fromTo('#pb-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_startup_section_21 = document.getElementById('pb-startup-section-21');
  if (pb_startup_section_21) {
    gsap.fromTo('#pb-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('pb-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (pb_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#pb-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #pb-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_list_quick_facts = document.getElementById('pb-family-list-quick-facts');
  if (pb_family_list_quick_facts) {
    gsap.from('#pb-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_list_common_challenges_applicants_face = document.getElementById('pb-family-list-common-challenges-applicants-face');
  if (pb_family_list_common_challenges_applicants_face) {
    gsap.from('#pb-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_list_how_we_solve_these_challenges = document.getElementById('pb-family-list-how-we-solve-these-challenges');
  if (pb_family_list_how_we_solve_these_challenges) {
    gsap.from('#pb-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_visa_overview = document.getElementById('pb-family-section-visa-overview');
  if (pb_family_section_visa_overview) {
    gsap.fromTo('#pb-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_form_who_is_this_visa_for = document.getElementById('pb-family-form-who-is-this-visa-for');
  if (pb_family_form_who_is_this_visa_for) {
    gsap.from('#pb-family-form-who-is-this-visa-for input, #pb-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_list_required_documents = document.getElementById('pb-family-list-required-documents');
  if (pb_family_list_required_documents) {
    gsap.from('#pb-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_list_application_process = document.getElementById('pb-family-list-application-process');
  if (pb_family_list_application_process) {
    gsap.from('#pb-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_timelines_deadlines = document.getElementById('pb-family-section-timelines-deadlines');
  if (pb_family_section_timelines_deadlines) {
    gsap.fromTo('#pb-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_fees_costs = document.getElementById('pb-family-section-fees-costs');
  if (pb_family_section_fees_costs) {
    gsap.fromTo('#pb-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_list_risks_common_mistakes = document.getElementById('pb-family-list-risks-common-mistakes');
  if (pb_family_list_risks_common_mistakes) {
    gsap.from('#pb-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_diy_vs_professional_assistance = document.getElementById('pb-family-section-diy-vs-professional-assistance');
  if (pb_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_paraba_specific_context = document.getElementById('pb-family-section-paraba-specific-context');
  if (pb_family_section_paraba_specific_context) {
    gsap.fromTo('#pb-family-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_what_our_clients_say = document.getElementById('pb-family-section-what-our-clients-say');
  if (pb_family_section_what_our_clients_say) {
    gsap.fromTo('#pb-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_frequently_asked_questions = document.getElementById('pb-family-section-frequently-asked-questions');
  if (pb_family_section_frequently_asked_questions) {
    gsap.fromTo('#pb-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_international_support = document.getElementById('pb-family-section-international-support');
  if (pb_family_section_international_support) {
    gsap.fromTo('#pb-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_list_our_credentials = document.getElementById('pb-family-list-our-credentials');
  if (pb_family_list_our_credentials) {
    gsap.from('#pb-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_list_related_services = document.getElementById('pb-family-list-related-services');
  if (pb_family_list_related_services) {
    gsap.from('#pb-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_youre_in_good_hands = document.getElementById('pb-family-section-youre-in-good-hands');
  if (pb_family_section_youre_in_good_hands) {
    gsap.fromTo('#pb-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_family_section_21 = document.getElementById('pb-family-section-21');
  if (pb_family_section_21) {
    gsap.fromTo('#pb-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('pb-sports-form-compete-in-brazil-with-the-sports-visa');
  if (pb_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#pb-sports-form-compete-in-brazil-with-the-sports-visa input, #pb-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_list_quick_facts = document.getElementById('pb-sports-list-quick-facts');
  if (pb_sports_list_quick_facts) {
    gsap.from('#pb-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_list_common_challenges_applicants_face = document.getElementById('pb-sports-list-common-challenges-applicants-face');
  if (pb_sports_list_common_challenges_applicants_face) {
    gsap.from('#pb-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_list_how_we_solve_these_challenges = document.getElementById('pb-sports-list-how-we-solve-these-challenges');
  if (pb_sports_list_how_we_solve_these_challenges) {
    gsap.from('#pb-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_visa_overview = document.getElementById('pb-sports-section-visa-overview');
  if (pb_sports_section_visa_overview) {
    gsap.fromTo('#pb-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_form_who_is_this_visa_for = document.getElementById('pb-sports-form-who-is-this-visa-for');
  if (pb_sports_form_who_is_this_visa_for) {
    gsap.from('#pb-sports-form-who-is-this-visa-for input, #pb-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_list_required_documents = document.getElementById('pb-sports-list-required-documents');
  if (pb_sports_list_required_documents) {
    gsap.from('#pb-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_list_application_process = document.getElementById('pb-sports-list-application-process');
  if (pb_sports_list_application_process) {
    gsap.from('#pb-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_timelines_deadlines = document.getElementById('pb-sports-section-timelines-deadlines');
  if (pb_sports_section_timelines_deadlines) {
    gsap.fromTo('#pb-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_fees_costs = document.getElementById('pb-sports-section-fees-costs');
  if (pb_sports_section_fees_costs) {
    gsap.fromTo('#pb-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_list_risks_common_mistakes = document.getElementById('pb-sports-list-risks-common-mistakes');
  if (pb_sports_list_risks_common_mistakes) {
    gsap.from('#pb-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_diy_vs_professional_assistance = document.getElementById('pb-sports-section-diy-vs-professional-assistance');
  if (pb_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_paraba_specific_context = document.getElementById('pb-sports-section-paraba-specific-context');
  if (pb_sports_section_paraba_specific_context) {
    gsap.fromTo('#pb-sports-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_what_our_clients_say = document.getElementById('pb-sports-section-what-our-clients-say');
  if (pb_sports_section_what_our_clients_say) {
    gsap.fromTo('#pb-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_frequently_asked_questions = document.getElementById('pb-sports-section-frequently-asked-questions');
  if (pb_sports_section_frequently_asked_questions) {
    gsap.fromTo('#pb-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_international_support = document.getElementById('pb-sports-section-international-support');
  if (pb_sports_section_international_support) {
    gsap.fromTo('#pb-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_list_our_credentials = document.getElementById('pb-sports-list-our-credentials');
  if (pb_sports_list_our_credentials) {
    gsap.from('#pb-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_list_related_services = document.getElementById('pb-sports-list-related-services');
  if (pb_sports_list_related_services) {
    gsap.from('#pb-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_youre_in_good_hands = document.getElementById('pb-sports-section-youre-in-good-hands');
  if (pb_sports_section_youre_in_good_hands) {
    gsap.fromTo('#pb-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_sports_section_21 = document.getElementById('pb-sports-section-21');
  if (pb_sports_section_21) {
    gsap.fromTo('#pb-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('pb-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (pb_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#pb-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #pb-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_list_quick_facts = document.getElementById('pb-medical-list-quick-facts');
  if (pb_medical_list_quick_facts) {
    gsap.from('#pb-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_list_common_challenges_applicants_face = document.getElementById('pb-medical-list-common-challenges-applicants-face');
  if (pb_medical_list_common_challenges_applicants_face) {
    gsap.from('#pb-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_list_how_we_solve_these_challenges = document.getElementById('pb-medical-list-how-we-solve-these-challenges');
  if (pb_medical_list_how_we_solve_these_challenges) {
    gsap.from('#pb-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_visa_overview = document.getElementById('pb-medical-section-visa-overview');
  if (pb_medical_section_visa_overview) {
    gsap.fromTo('#pb-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_form_who_is_this_visa_for = document.getElementById('pb-medical-form-who-is-this-visa-for');
  if (pb_medical_form_who_is_this_visa_for) {
    gsap.from('#pb-medical-form-who-is-this-visa-for input, #pb-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_list_required_documents = document.getElementById('pb-medical-list-required-documents');
  if (pb_medical_list_required_documents) {
    gsap.from('#pb-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_list_application_process = document.getElementById('pb-medical-list-application-process');
  if (pb_medical_list_application_process) {
    gsap.from('#pb-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_timelines_deadlines = document.getElementById('pb-medical-section-timelines-deadlines');
  if (pb_medical_section_timelines_deadlines) {
    gsap.fromTo('#pb-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_fees_costs = document.getElementById('pb-medical-section-fees-costs');
  if (pb_medical_section_fees_costs) {
    gsap.fromTo('#pb-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_list_risks_common_mistakes = document.getElementById('pb-medical-list-risks-common-mistakes');
  if (pb_medical_list_risks_common_mistakes) {
    gsap.from('#pb-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_diy_vs_professional_assistance = document.getElementById('pb-medical-section-diy-vs-professional-assistance');
  if (pb_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_paraba_specific_context = document.getElementById('pb-medical-section-paraba-specific-context');
  if (pb_medical_section_paraba_specific_context) {
    gsap.fromTo('#pb-medical-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_what_our_clients_say = document.getElementById('pb-medical-section-what-our-clients-say');
  if (pb_medical_section_what_our_clients_say) {
    gsap.fromTo('#pb-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_frequently_asked_questions = document.getElementById('pb-medical-section-frequently-asked-questions');
  if (pb_medical_section_frequently_asked_questions) {
    gsap.fromTo('#pb-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_international_support = document.getElementById('pb-medical-section-international-support');
  if (pb_medical_section_international_support) {
    gsap.fromTo('#pb-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_list_our_credentials = document.getElementById('pb-medical-list-our-credentials');
  if (pb_medical_list_our_credentials) {
    gsap.from('#pb-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_list_related_services = document.getElementById('pb-medical-list-related-services');
  if (pb_medical_list_related_services) {
    gsap.from('#pb-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_youre_in_good_hands = document.getElementById('pb-medical-section-youre-in-good-hands');
  if (pb_medical_section_youre_in_good_hands) {
    gsap.fromTo('#pb-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_medical_section_21 = document.getElementById('pb-medical-section-21');
  if (pb_medical_section_21) {
    gsap.fromTo('#pb-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('pb-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (pb_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#pb-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #pb-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_list_quick_facts = document.getElementById('pb-tourist-list-quick-facts');
  if (pb_tourist_list_quick_facts) {
    gsap.from('#pb-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_list_common_challenges_applicants_face = document.getElementById('pb-tourist-list-common-challenges-applicants-face');
  if (pb_tourist_list_common_challenges_applicants_face) {
    gsap.from('#pb-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_list_how_we_solve_these_challenges = document.getElementById('pb-tourist-list-how-we-solve-these-challenges');
  if (pb_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#pb-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_visa_overview = document.getElementById('pb-tourist-section-visa-overview');
  if (pb_tourist_section_visa_overview) {
    gsap.fromTo('#pb-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_form_who_is_this_visa_for = document.getElementById('pb-tourist-form-who-is-this-visa-for');
  if (pb_tourist_form_who_is_this_visa_for) {
    gsap.from('#pb-tourist-form-who-is-this-visa-for input, #pb-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_list_required_documents = document.getElementById('pb-tourist-list-required-documents');
  if (pb_tourist_list_required_documents) {
    gsap.from('#pb-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_list_application_process = document.getElementById('pb-tourist-list-application-process');
  if (pb_tourist_list_application_process) {
    gsap.from('#pb-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_timelines_deadlines = document.getElementById('pb-tourist-section-timelines-deadlines');
  if (pb_tourist_section_timelines_deadlines) {
    gsap.fromTo('#pb-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_fees_costs = document.getElementById('pb-tourist-section-fees-costs');
  if (pb_tourist_section_fees_costs) {
    gsap.fromTo('#pb-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_list_risks_common_mistakes = document.getElementById('pb-tourist-list-risks-common-mistakes');
  if (pb_tourist_list_risks_common_mistakes) {
    gsap.from('#pb-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_diy_vs_professional_assistance = document.getElementById('pb-tourist-section-diy-vs-professional-assistance');
  if (pb_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_paraba_specific_context = document.getElementById('pb-tourist-section-paraba-specific-context');
  if (pb_tourist_section_paraba_specific_context) {
    gsap.fromTo('#pb-tourist-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_what_our_clients_say = document.getElementById('pb-tourist-section-what-our-clients-say');
  if (pb_tourist_section_what_our_clients_say) {
    gsap.fromTo('#pb-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_frequently_asked_questions = document.getElementById('pb-tourist-section-frequently-asked-questions');
  if (pb_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#pb-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_international_support = document.getElementById('pb-tourist-section-international-support');
  if (pb_tourist_section_international_support) {
    gsap.fromTo('#pb-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_list_our_credentials = document.getElementById('pb-tourist-list-our-credentials');
  if (pb_tourist_list_our_credentials) {
    gsap.from('#pb-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_list_related_services = document.getElementById('pb-tourist-list-related-services');
  if (pb_tourist_list_related_services) {
    gsap.from('#pb-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_youre_in_good_hands = document.getElementById('pb-tourist-section-youre-in-good-hands');
  if (pb_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#pb-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_tourist_section_21 = document.getElementById('pb-tourist-section-21');
  if (pb_tourist_section_21) {
    gsap.fromTo('#pb-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('pb-transit-form-transit-through-brazil-with-the-transit-visa');
  if (pb_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#pb-transit-form-transit-through-brazil-with-the-transit-visa input, #pb-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_list_quick_facts = document.getElementById('pb-transit-list-quick-facts');
  if (pb_transit_list_quick_facts) {
    gsap.from('#pb-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_list_common_challenges_applicants_face = document.getElementById('pb-transit-list-common-challenges-applicants-face');
  if (pb_transit_list_common_challenges_applicants_face) {
    gsap.from('#pb-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_list_how_we_solve_these_challenges = document.getElementById('pb-transit-list-how-we-solve-these-challenges');
  if (pb_transit_list_how_we_solve_these_challenges) {
    gsap.from('#pb-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_visa_overview = document.getElementById('pb-transit-section-visa-overview');
  if (pb_transit_section_visa_overview) {
    gsap.fromTo('#pb-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_form_who_is_this_visa_for = document.getElementById('pb-transit-form-who-is-this-visa-for');
  if (pb_transit_form_who_is_this_visa_for) {
    gsap.from('#pb-transit-form-who-is-this-visa-for input, #pb-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_list_required_documents = document.getElementById('pb-transit-list-required-documents');
  if (pb_transit_list_required_documents) {
    gsap.from('#pb-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_list_application_process = document.getElementById('pb-transit-list-application-process');
  if (pb_transit_list_application_process) {
    gsap.from('#pb-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_timelines_deadlines = document.getElementById('pb-transit-section-timelines-deadlines');
  if (pb_transit_section_timelines_deadlines) {
    gsap.fromTo('#pb-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_fees_costs = document.getElementById('pb-transit-section-fees-costs');
  if (pb_transit_section_fees_costs) {
    gsap.fromTo('#pb-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_list_risks_common_mistakes = document.getElementById('pb-transit-list-risks-common-mistakes');
  if (pb_transit_list_risks_common_mistakes) {
    gsap.from('#pb-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_diy_vs_professional_assistance = document.getElementById('pb-transit-section-diy-vs-professional-assistance');
  if (pb_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_paraba_specific_context = document.getElementById('pb-transit-section-paraba-specific-context');
  if (pb_transit_section_paraba_specific_context) {
    gsap.fromTo('#pb-transit-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_what_our_clients_say = document.getElementById('pb-transit-section-what-our-clients-say');
  if (pb_transit_section_what_our_clients_say) {
    gsap.fromTo('#pb-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_frequently_asked_questions = document.getElementById('pb-transit-section-frequently-asked-questions');
  if (pb_transit_section_frequently_asked_questions) {
    gsap.fromTo('#pb-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_international_support = document.getElementById('pb-transit-section-international-support');
  if (pb_transit_section_international_support) {
    gsap.fromTo('#pb-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_list_our_credentials = document.getElementById('pb-transit-list-our-credentials');
  if (pb_transit_list_our_credentials) {
    gsap.from('#pb-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_list_related_services = document.getElementById('pb-transit-list-related-services');
  if (pb_transit_list_related_services) {
    gsap.from('#pb-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_youre_in_good_hands = document.getElementById('pb-transit-section-youre-in-good-hands');
  if (pb_transit_section_youre_in_good_hands) {
    gsap.fromTo('#pb-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_transit_section_21 = document.getElementById('pb-transit-section-21');
  if (pb_transit_section_21) {
    gsap.fromTo('#pb-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_form_study_in_brazil_with_the_student_visa = document.getElementById('pb-student-form-study-in-brazil-with-the-student-visa');
  if (pb_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#pb-student-form-study-in-brazil-with-the-student-visa input, #pb-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_list_quick_facts = document.getElementById('pb-student-list-quick-facts');
  if (pb_student_list_quick_facts) {
    gsap.from('#pb-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_list_common_challenges_applicants_face = document.getElementById('pb-student-list-common-challenges-applicants-face');
  if (pb_student_list_common_challenges_applicants_face) {
    gsap.from('#pb-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_list_how_we_solve_these_challenges = document.getElementById('pb-student-list-how-we-solve-these-challenges');
  if (pb_student_list_how_we_solve_these_challenges) {
    gsap.from('#pb-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_visa_overview = document.getElementById('pb-student-section-visa-overview');
  if (pb_student_section_visa_overview) {
    gsap.fromTo('#pb-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_form_who_is_this_visa_for = document.getElementById('pb-student-form-who-is-this-visa-for');
  if (pb_student_form_who_is_this_visa_for) {
    gsap.from('#pb-student-form-who-is-this-visa-for input, #pb-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_list_required_documents = document.getElementById('pb-student-list-required-documents');
  if (pb_student_list_required_documents) {
    gsap.from('#pb-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_list_application_process = document.getElementById('pb-student-list-application-process');
  if (pb_student_list_application_process) {
    gsap.from('#pb-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_timelines_deadlines = document.getElementById('pb-student-section-timelines-deadlines');
  if (pb_student_section_timelines_deadlines) {
    gsap.fromTo('#pb-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_fees_costs = document.getElementById('pb-student-section-fees-costs');
  if (pb_student_section_fees_costs) {
    gsap.fromTo('#pb-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_list_risks_common_mistakes = document.getElementById('pb-student-list-risks-common-mistakes');
  if (pb_student_list_risks_common_mistakes) {
    gsap.from('#pb-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_diy_vs_professional_assistance = document.getElementById('pb-student-section-diy-vs-professional-assistance');
  if (pb_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_paraba_specific_context = document.getElementById('pb-student-section-paraba-specific-context');
  if (pb_student_section_paraba_specific_context) {
    gsap.fromTo('#pb-student-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_what_our_clients_say = document.getElementById('pb-student-section-what-our-clients-say');
  if (pb_student_section_what_our_clients_say) {
    gsap.fromTo('#pb-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_frequently_asked_questions = document.getElementById('pb-student-section-frequently-asked-questions');
  if (pb_student_section_frequently_asked_questions) {
    gsap.fromTo('#pb-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_international_support = document.getElementById('pb-student-section-international-support');
  if (pb_student_section_international_support) {
    gsap.fromTo('#pb-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_list_our_credentials = document.getElementById('pb-student-list-our-credentials');
  if (pb_student_list_our_credentials) {
    gsap.from('#pb-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_list_related_services = document.getElementById('pb-student-list-related-services');
  if (pb_student_list_related_services) {
    gsap.from('#pb-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_youre_in_good_hands = document.getElementById('pb-student-section-youre-in-good-hands');
  if (pb_student_section_youre_in_good_hands) {
    gsap.fromTo('#pb-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_student_section_21 = document.getElementById('pb-student-section-21');
  if (pb_student_section_21) {
    gsap.fromTo('#pb-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('pb-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (pb_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#pb-business-form-conduct-business-in-brazil-with-the-business-visa input, #pb-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_list_quick_facts = document.getElementById('pb-business-list-quick-facts');
  if (pb_business_list_quick_facts) {
    gsap.from('#pb-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_list_common_challenges_applicants_face = document.getElementById('pb-business-list-common-challenges-applicants-face');
  if (pb_business_list_common_challenges_applicants_face) {
    gsap.from('#pb-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_list_how_we_solve_these_challenges = document.getElementById('pb-business-list-how-we-solve-these-challenges');
  if (pb_business_list_how_we_solve_these_challenges) {
    gsap.from('#pb-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_visa_overview = document.getElementById('pb-business-section-visa-overview');
  if (pb_business_section_visa_overview) {
    gsap.fromTo('#pb-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_form_who_is_this_visa_for = document.getElementById('pb-business-form-who-is-this-visa-for');
  if (pb_business_form_who_is_this_visa_for) {
    gsap.from('#pb-business-form-who-is-this-visa-for input, #pb-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_list_required_documents = document.getElementById('pb-business-list-required-documents');
  if (pb_business_list_required_documents) {
    gsap.from('#pb-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_list_application_process = document.getElementById('pb-business-list-application-process');
  if (pb_business_list_application_process) {
    gsap.from('#pb-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_timelines_deadlines = document.getElementById('pb-business-section-timelines-deadlines');
  if (pb_business_section_timelines_deadlines) {
    gsap.fromTo('#pb-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_fees_costs = document.getElementById('pb-business-section-fees-costs');
  if (pb_business_section_fees_costs) {
    gsap.fromTo('#pb-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_list_risks_common_mistakes = document.getElementById('pb-business-list-risks-common-mistakes');
  if (pb_business_list_risks_common_mistakes) {
    gsap.from('#pb-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_diy_vs_professional_assistance = document.getElementById('pb-business-section-diy-vs-professional-assistance');
  if (pb_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_paraba_specific_context = document.getElementById('pb-business-section-paraba-specific-context');
  if (pb_business_section_paraba_specific_context) {
    gsap.fromTo('#pb-business-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_what_our_clients_say = document.getElementById('pb-business-section-what-our-clients-say');
  if (pb_business_section_what_our_clients_say) {
    gsap.fromTo('#pb-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_frequently_asked_questions = document.getElementById('pb-business-section-frequently-asked-questions');
  if (pb_business_section_frequently_asked_questions) {
    gsap.fromTo('#pb-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_international_support = document.getElementById('pb-business-section-international-support');
  if (pb_business_section_international_support) {
    gsap.fromTo('#pb-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_list_our_credentials = document.getElementById('pb-business-list-our-credentials');
  if (pb_business_list_our_credentials) {
    gsap.from('#pb-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_list_related_services = document.getElementById('pb-business-list-related-services');
  if (pb_business_list_related_services) {
    gsap.from('#pb-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_youre_in_good_hands = document.getElementById('pb-business-section-youre-in-good-hands');
  if (pb_business_section_youre_in_good_hands) {
    gsap.fromTo('#pb-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_business_section_21 = document.getElementById('pb-business-section-21');
  if (pb_business_section_21) {
    gsap.fromTo('#pb-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('pb-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (pb_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#pb-research-form-conduct-research-in-brazil-with-the-research-visa input, #pb-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_list_quick_facts = document.getElementById('pb-research-list-quick-facts');
  if (pb_research_list_quick_facts) {
    gsap.from('#pb-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_list_common_challenges_applicants_face = document.getElementById('pb-research-list-common-challenges-applicants-face');
  if (pb_research_list_common_challenges_applicants_face) {
    gsap.from('#pb-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_list_how_we_solve_these_challenges = document.getElementById('pb-research-list-how-we-solve-these-challenges');
  if (pb_research_list_how_we_solve_these_challenges) {
    gsap.from('#pb-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_visa_overview = document.getElementById('pb-research-section-visa-overview');
  if (pb_research_section_visa_overview) {
    gsap.fromTo('#pb-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_form_who_is_this_visa_for = document.getElementById('pb-research-form-who-is-this-visa-for');
  if (pb_research_form_who_is_this_visa_for) {
    gsap.from('#pb-research-form-who-is-this-visa-for input, #pb-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_list_required_documents = document.getElementById('pb-research-list-required-documents');
  if (pb_research_list_required_documents) {
    gsap.from('#pb-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_list_application_process = document.getElementById('pb-research-list-application-process');
  if (pb_research_list_application_process) {
    gsap.from('#pb-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_timelines_deadlines = document.getElementById('pb-research-section-timelines-deadlines');
  if (pb_research_section_timelines_deadlines) {
    gsap.fromTo('#pb-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_fees_costs = document.getElementById('pb-research-section-fees-costs');
  if (pb_research_section_fees_costs) {
    gsap.fromTo('#pb-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_list_risks_common_mistakes = document.getElementById('pb-research-list-risks-common-mistakes');
  if (pb_research_list_risks_common_mistakes) {
    gsap.from('#pb-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_diy_vs_professional_assistance = document.getElementById('pb-research-section-diy-vs-professional-assistance');
  if (pb_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_paraba_specific_context = document.getElementById('pb-research-section-paraba-specific-context');
  if (pb_research_section_paraba_specific_context) {
    gsap.fromTo('#pb-research-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_what_our_clients_say = document.getElementById('pb-research-section-what-our-clients-say');
  if (pb_research_section_what_our_clients_say) {
    gsap.fromTo('#pb-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_frequently_asked_questions = document.getElementById('pb-research-section-frequently-asked-questions');
  if (pb_research_section_frequently_asked_questions) {
    gsap.fromTo('#pb-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_international_support = document.getElementById('pb-research-section-international-support');
  if (pb_research_section_international_support) {
    gsap.fromTo('#pb-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_list_our_credentials = document.getElementById('pb-research-list-our-credentials');
  if (pb_research_list_our_credentials) {
    gsap.from('#pb-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_list_related_services = document.getElementById('pb-research-list-related-services');
  if (pb_research_list_related_services) {
    gsap.from('#pb-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_youre_in_good_hands = document.getElementById('pb-research-section-youre-in-good-hands');
  if (pb_research_section_youre_in_good_hands) {
    gsap.fromTo('#pb-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_research_section_21 = document.getElementById('pb-research-section-21');
  if (pb_research_section_21) {
    gsap.fromTo('#pb-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('pb-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (pb_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#pb-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #pb-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_list_quick_facts = document.getElementById('pb-diplomatic-list-quick-facts');
  if (pb_diplomatic_list_quick_facts) {
    gsap.from('#pb-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_list_common_challenges_applicants_face = document.getElementById('pb-diplomatic-list-common-challenges-applicants-face');
  if (pb_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#pb-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_list_how_we_solve_these_challenges = document.getElementById('pb-diplomatic-list-how-we-solve-these-challenges');
  if (pb_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#pb-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_visa_overview = document.getElementById('pb-diplomatic-section-visa-overview');
  if (pb_diplomatic_section_visa_overview) {
    gsap.fromTo('#pb-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_form_who_is_this_visa_for = document.getElementById('pb-diplomatic-form-who-is-this-visa-for');
  if (pb_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#pb-diplomatic-form-who-is-this-visa-for input, #pb-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_list_required_documents = document.getElementById('pb-diplomatic-list-required-documents');
  if (pb_diplomatic_list_required_documents) {
    gsap.from('#pb-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_list_application_process = document.getElementById('pb-diplomatic-list-application-process');
  if (pb_diplomatic_list_application_process) {
    gsap.from('#pb-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_timelines_deadlines = document.getElementById('pb-diplomatic-section-timelines-deadlines');
  if (pb_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#pb-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_fees_costs = document.getElementById('pb-diplomatic-section-fees-costs');
  if (pb_diplomatic_section_fees_costs) {
    gsap.fromTo('#pb-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_list_risks_common_mistakes = document.getElementById('pb-diplomatic-list-risks-common-mistakes');
  if (pb_diplomatic_list_risks_common_mistakes) {
    gsap.from('#pb-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_diy_vs_professional_assistance = document.getElementById('pb-diplomatic-section-diy-vs-professional-assistance');
  if (pb_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_paraba_specific_context = document.getElementById('pb-diplomatic-section-paraba-specific-context');
  if (pb_diplomatic_section_paraba_specific_context) {
    gsap.fromTo('#pb-diplomatic-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_what_our_clients_say = document.getElementById('pb-diplomatic-section-what-our-clients-say');
  if (pb_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#pb-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_frequently_asked_questions = document.getElementById('pb-diplomatic-section-frequently-asked-questions');
  if (pb_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#pb-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_international_support = document.getElementById('pb-diplomatic-section-international-support');
  if (pb_diplomatic_section_international_support) {
    gsap.fromTo('#pb-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_list_our_credentials = document.getElementById('pb-diplomatic-list-our-credentials');
  if (pb_diplomatic_list_our_credentials) {
    gsap.from('#pb-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_list_related_services = document.getElementById('pb-diplomatic-list-related-services');
  if (pb_diplomatic_list_related_services) {
    gsap.from('#pb-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_youre_in_good_hands = document.getElementById('pb-diplomatic-section-youre-in-good-hands');
  if (pb_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#pb-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_diplomatic_section_21 = document.getElementById('pb-diplomatic-section-21');
  if (pb_diplomatic_section_21) {
    gsap.fromTo('#pb-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('pb-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (pb_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#pb-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #pb-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_list_quick_facts = document.getElementById('pb-journalist-list-quick-facts');
  if (pb_journalist_list_quick_facts) {
    gsap.from('#pb-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_list_common_challenges_applicants_face = document.getElementById('pb-journalist-list-common-challenges-applicants-face');
  if (pb_journalist_list_common_challenges_applicants_face) {
    gsap.from('#pb-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_list_how_we_solve_these_challenges = document.getElementById('pb-journalist-list-how-we-solve-these-challenges');
  if (pb_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#pb-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_visa_overview = document.getElementById('pb-journalist-section-visa-overview');
  if (pb_journalist_section_visa_overview) {
    gsap.fromTo('#pb-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_form_who_is_this_visa_for = document.getElementById('pb-journalist-form-who-is-this-visa-for');
  if (pb_journalist_form_who_is_this_visa_for) {
    gsap.from('#pb-journalist-form-who-is-this-visa-for input, #pb-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_list_required_documents = document.getElementById('pb-journalist-list-required-documents');
  if (pb_journalist_list_required_documents) {
    gsap.from('#pb-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_list_application_process = document.getElementById('pb-journalist-list-application-process');
  if (pb_journalist_list_application_process) {
    gsap.from('#pb-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_timelines_deadlines = document.getElementById('pb-journalist-section-timelines-deadlines');
  if (pb_journalist_section_timelines_deadlines) {
    gsap.fromTo('#pb-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_fees_costs = document.getElementById('pb-journalist-section-fees-costs');
  if (pb_journalist_section_fees_costs) {
    gsap.fromTo('#pb-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_list_risks_common_mistakes = document.getElementById('pb-journalist-list-risks-common-mistakes');
  if (pb_journalist_list_risks_common_mistakes) {
    gsap.from('#pb-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_diy_vs_professional_assistance = document.getElementById('pb-journalist-section-diy-vs-professional-assistance');
  if (pb_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_paraba_specific_context = document.getElementById('pb-journalist-section-paraba-specific-context');
  if (pb_journalist_section_paraba_specific_context) {
    gsap.fromTo('#pb-journalist-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_what_our_clients_say = document.getElementById('pb-journalist-section-what-our-clients-say');
  if (pb_journalist_section_what_our_clients_say) {
    gsap.fromTo('#pb-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_frequently_asked_questions = document.getElementById('pb-journalist-section-frequently-asked-questions');
  if (pb_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#pb-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_international_support = document.getElementById('pb-journalist-section-international-support');
  if (pb_journalist_section_international_support) {
    gsap.fromTo('#pb-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_list_our_credentials = document.getElementById('pb-journalist-list-our-credentials');
  if (pb_journalist_list_our_credentials) {
    gsap.from('#pb-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_list_related_services = document.getElementById('pb-journalist-list-related-services');
  if (pb_journalist_list_related_services) {
    gsap.from('#pb-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_youre_in_good_hands = document.getElementById('pb-journalist-section-youre-in-good-hands');
  if (pb_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#pb-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_journalist_section_21 = document.getElementById('pb-journalist-section-21');
  if (pb_journalist_section_21) {
    gsap.fromTo('#pb-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('pb-fines-form-resolve-immigration-fines-in-brazil');
  if (pb_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#pb-fines-form-resolve-immigration-fines-in-brazil input, #pb-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_list_quick_facts = document.getElementById('pb-fines-list-quick-facts');
  if (pb_fines_list_quick_facts) {
    gsap.from('#pb-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_list_common_challenges_applicants_face = document.getElementById('pb-fines-list-common-challenges-applicants-face');
  if (pb_fines_list_common_challenges_applicants_face) {
    gsap.from('#pb-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_list_how_we_solve_these_challenges = document.getElementById('pb-fines-list-how-we-solve-these-challenges');
  if (pb_fines_list_how_we_solve_these_challenges) {
    gsap.from('#pb-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_service_overview = document.getElementById('pb-fines-section-service-overview');
  if (pb_fines_section_service_overview) {
    gsap.fromTo('#pb-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_form_who_is_this_service_for = document.getElementById('pb-fines-form-who-is-this-service-for');
  if (pb_fines_form_who_is_this_service_for) {
    gsap.from('#pb-fines-form-who-is-this-service-for input, #pb-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_list_required_documents = document.getElementById('pb-fines-list-required-documents');
  if (pb_fines_list_required_documents) {
    gsap.from('#pb-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_list_process = document.getElementById('pb-fines-list-process');
  if (pb_fines_list_process) {
    gsap.from('#pb-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_timelines_deadlines = document.getElementById('pb-fines-section-timelines-deadlines');
  if (pb_fines_section_timelines_deadlines) {
    gsap.fromTo('#pb-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_fees_costs = document.getElementById('pb-fines-section-fees-costs');
  if (pb_fines_section_fees_costs) {
    gsap.fromTo('#pb-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_list_risks_common_mistakes = document.getElementById('pb-fines-list-risks-common-mistakes');
  if (pb_fines_list_risks_common_mistakes) {
    gsap.from('#pb-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_diy_vs_professional_assistance = document.getElementById('pb-fines-section-diy-vs-professional-assistance');
  if (pb_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_paraba_specific_context = document.getElementById('pb-fines-section-paraba-specific-context');
  if (pb_fines_section_paraba_specific_context) {
    gsap.fromTo('#pb-fines-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_what_our_clients_say = document.getElementById('pb-fines-section-what-our-clients-say');
  if (pb_fines_section_what_our_clients_say) {
    gsap.fromTo('#pb-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_frequently_asked_questions = document.getElementById('pb-fines-section-frequently-asked-questions');
  if (pb_fines_section_frequently_asked_questions) {
    gsap.fromTo('#pb-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_international_support = document.getElementById('pb-fines-section-international-support');
  if (pb_fines_section_international_support) {
    gsap.fromTo('#pb-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_list_our_credentials = document.getElementById('pb-fines-list-our-credentials');
  if (pb_fines_list_our_credentials) {
    gsap.from('#pb-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_list_related_services = document.getElementById('pb-fines-list-related-services');
  if (pb_fines_list_related_services) {
    gsap.from('#pb-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_youre_in_good_hands = document.getElementById('pb-fines-section-youre-in-good-hands');
  if (pb_fines_section_youre_in_good_hands) {
    gsap.fromTo('#pb-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_fines_section_21 = document.getElementById('pb-fines-section-21');
  if (pb_fines_section_21) {
    gsap.fromTo('#pb-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_form_deportation_assistance_in_brazil = document.getElementById('pb-deportation-form-deportation-assistance-in-brazil');
  if (pb_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#pb-deportation-form-deportation-assistance-in-brazil input, #pb-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_list_quick_facts = document.getElementById('pb-deportation-list-quick-facts');
  if (pb_deportation_list_quick_facts) {
    gsap.from('#pb-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_list_common_challenges_applicants_face = document.getElementById('pb-deportation-list-common-challenges-applicants-face');
  if (pb_deportation_list_common_challenges_applicants_face) {
    gsap.from('#pb-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_list_how_we_solve_these_challenges = document.getElementById('pb-deportation-list-how-we-solve-these-challenges');
  if (pb_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#pb-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_service_overview = document.getElementById('pb-deportation-section-service-overview');
  if (pb_deportation_section_service_overview) {
    gsap.fromTo('#pb-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_form_who_is_this_service_for = document.getElementById('pb-deportation-form-who-is-this-service-for');
  if (pb_deportation_form_who_is_this_service_for) {
    gsap.from('#pb-deportation-form-who-is-this-service-for input, #pb-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_list_required_documents = document.getElementById('pb-deportation-list-required-documents');
  if (pb_deportation_list_required_documents) {
    gsap.from('#pb-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_list_process = document.getElementById('pb-deportation-list-process');
  if (pb_deportation_list_process) {
    gsap.from('#pb-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_timelines_deadlines = document.getElementById('pb-deportation-section-timelines-deadlines');
  if (pb_deportation_section_timelines_deadlines) {
    gsap.fromTo('#pb-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_fees_costs = document.getElementById('pb-deportation-section-fees-costs');
  if (pb_deportation_section_fees_costs) {
    gsap.fromTo('#pb-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_list_risks_common_mistakes = document.getElementById('pb-deportation-list-risks-common-mistakes');
  if (pb_deportation_list_risks_common_mistakes) {
    gsap.from('#pb-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_diy_vs_professional_assistance = document.getElementById('pb-deportation-section-diy-vs-professional-assistance');
  if (pb_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_paraba_specific_context = document.getElementById('pb-deportation-section-paraba-specific-context');
  if (pb_deportation_section_paraba_specific_context) {
    gsap.fromTo('#pb-deportation-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_what_our_clients_say = document.getElementById('pb-deportation-section-what-our-clients-say');
  if (pb_deportation_section_what_our_clients_say) {
    gsap.fromTo('#pb-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_frequently_asked_questions = document.getElementById('pb-deportation-section-frequently-asked-questions');
  if (pb_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#pb-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_international_support = document.getElementById('pb-deportation-section-international-support');
  if (pb_deportation_section_international_support) {
    gsap.fromTo('#pb-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_list_our_credentials = document.getElementById('pb-deportation-list-our-credentials');
  if (pb_deportation_list_our_credentials) {
    gsap.from('#pb-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_list_related_services = document.getElementById('pb-deportation-list-related-services');
  if (pb_deportation_list_related_services) {
    gsap.from('#pb-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_youre_in_good_hands = document.getElementById('pb-deportation-section-youre-in-good-hands');
  if (pb_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#pb-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_deportation_section_21 = document.getElementById('pb-deportation-section-21');
  if (pb_deportation_section_21) {
    gsap.fromTo('#pb-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('pb-translation-form-sworn-document-translation-services-in-brazil');
  if (pb_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#pb-translation-form-sworn-document-translation-services-in-brazil input, #pb-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_list_quick_facts = document.getElementById('pb-translation-list-quick-facts');
  if (pb_translation_list_quick_facts) {
    gsap.from('#pb-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_list_common_challenges_applicants_face = document.getElementById('pb-translation-list-common-challenges-applicants-face');
  if (pb_translation_list_common_challenges_applicants_face) {
    gsap.from('#pb-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_list_how_we_solve_these_challenges = document.getElementById('pb-translation-list-how-we-solve-these-challenges');
  if (pb_translation_list_how_we_solve_these_challenges) {
    gsap.from('#pb-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_service_overview = document.getElementById('pb-translation-section-service-overview');
  if (pb_translation_section_service_overview) {
    gsap.fromTo('#pb-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_form_who_is_this_service_for = document.getElementById('pb-translation-form-who-is-this-service-for');
  if (pb_translation_form_who_is_this_service_for) {
    gsap.from('#pb-translation-form-who-is-this-service-for input, #pb-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_list_required_documents = document.getElementById('pb-translation-list-required-documents');
  if (pb_translation_list_required_documents) {
    gsap.from('#pb-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_list_process = document.getElementById('pb-translation-list-process');
  if (pb_translation_list_process) {
    gsap.from('#pb-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_timelines_deadlines = document.getElementById('pb-translation-section-timelines-deadlines');
  if (pb_translation_section_timelines_deadlines) {
    gsap.fromTo('#pb-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_fees_costs = document.getElementById('pb-translation-section-fees-costs');
  if (pb_translation_section_fees_costs) {
    gsap.fromTo('#pb-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_list_risks_common_mistakes = document.getElementById('pb-translation-list-risks-common-mistakes');
  if (pb_translation_list_risks_common_mistakes) {
    gsap.from('#pb-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_diy_vs_professional_assistance = document.getElementById('pb-translation-section-diy-vs-professional-assistance');
  if (pb_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_paraba_specific_context = document.getElementById('pb-translation-section-paraba-specific-context');
  if (pb_translation_section_paraba_specific_context) {
    gsap.fromTo('#pb-translation-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_what_our_clients_say = document.getElementById('pb-translation-section-what-our-clients-say');
  if (pb_translation_section_what_our_clients_say) {
    gsap.fromTo('#pb-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_frequently_asked_questions = document.getElementById('pb-translation-section-frequently-asked-questions');
  if (pb_translation_section_frequently_asked_questions) {
    gsap.fromTo('#pb-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_international_support = document.getElementById('pb-translation-section-international-support');
  if (pb_translation_section_international_support) {
    gsap.fromTo('#pb-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_list_our_credentials = document.getElementById('pb-translation-list-our-credentials');
  if (pb_translation_list_our_credentials) {
    gsap.from('#pb-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_list_related_services = document.getElementById('pb-translation-list-related-services');
  if (pb_translation_list_related_services) {
    gsap.from('#pb-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_youre_in_good_hands = document.getElementById('pb-translation-section-youre-in-good-hands');
  if (pb_translation_section_youre_in_good_hands) {
    gsap.fromTo('#pb-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_translation_section_21 = document.getElementById('pb-translation-section-21');
  if (pb_translation_section_21) {
    gsap.fromTo('#pb-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('pb-expulsion-form-expulsion-assistance-in-brazil');
  if (pb_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#pb-expulsion-form-expulsion-assistance-in-brazil input, #pb-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_list_quick_facts = document.getElementById('pb-expulsion-list-quick-facts');
  if (pb_expulsion_list_quick_facts) {
    gsap.from('#pb-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_list_common_challenges_applicants_face = document.getElementById('pb-expulsion-list-common-challenges-applicants-face');
  if (pb_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#pb-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_list_how_we_solve_these_challenges = document.getElementById('pb-expulsion-list-how-we-solve-these-challenges');
  if (pb_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#pb-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_service_overview = document.getElementById('pb-expulsion-section-service-overview');
  if (pb_expulsion_section_service_overview) {
    gsap.fromTo('#pb-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_form_who_is_this_service_for = document.getElementById('pb-expulsion-form-who-is-this-service-for');
  if (pb_expulsion_form_who_is_this_service_for) {
    gsap.from('#pb-expulsion-form-who-is-this-service-for input, #pb-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_list_required_documents = document.getElementById('pb-expulsion-list-required-documents');
  if (pb_expulsion_list_required_documents) {
    gsap.from('#pb-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_list_process = document.getElementById('pb-expulsion-list-process');
  if (pb_expulsion_list_process) {
    gsap.from('#pb-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_timelines_deadlines = document.getElementById('pb-expulsion-section-timelines-deadlines');
  if (pb_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#pb-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_fees_costs = document.getElementById('pb-expulsion-section-fees-costs');
  if (pb_expulsion_section_fees_costs) {
    gsap.fromTo('#pb-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_list_risks_common_mistakes = document.getElementById('pb-expulsion-list-risks-common-mistakes');
  if (pb_expulsion_list_risks_common_mistakes) {
    gsap.from('#pb-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_diy_vs_professional_assistance = document.getElementById('pb-expulsion-section-diy-vs-professional-assistance');
  if (pb_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_paraba_specific_context = document.getElementById('pb-expulsion-section-paraba-specific-context');
  if (pb_expulsion_section_paraba_specific_context) {
    gsap.fromTo('#pb-expulsion-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_what_our_clients_say = document.getElementById('pb-expulsion-section-what-our-clients-say');
  if (pb_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#pb-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_frequently_asked_questions = document.getElementById('pb-expulsion-section-frequently-asked-questions');
  if (pb_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#pb-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_international_support = document.getElementById('pb-expulsion-section-international-support');
  if (pb_expulsion_section_international_support) {
    gsap.fromTo('#pb-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_list_our_credentials = document.getElementById('pb-expulsion-list-our-credentials');
  if (pb_expulsion_list_our_credentials) {
    gsap.from('#pb-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_list_related_services = document.getElementById('pb-expulsion-list-related-services');
  if (pb_expulsion_list_related_services) {
    gsap.from('#pb-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_youre_in_good_hands = document.getElementById('pb-expulsion-section-youre-in-good-hands');
  if (pb_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#pb-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_expulsion_section_21 = document.getElementById('pb-expulsion-section-21');
  if (pb_expulsion_section_21) {
    gsap.fromTo('#pb-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('pb-appeals-form-appeal-immigration-denials-in-brazil');
  if (pb_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#pb-appeals-form-appeal-immigration-denials-in-brazil input, #pb-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_list_quick_facts = document.getElementById('pb-appeals-list-quick-facts');
  if (pb_appeals_list_quick_facts) {
    gsap.from('#pb-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_list_common_challenges_applicants_face = document.getElementById('pb-appeals-list-common-challenges-applicants-face');
  if (pb_appeals_list_common_challenges_applicants_face) {
    gsap.from('#pb-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_list_how_we_solve_these_challenges = document.getElementById('pb-appeals-list-how-we-solve-these-challenges');
  if (pb_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#pb-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_service_overview = document.getElementById('pb-appeals-section-service-overview');
  if (pb_appeals_section_service_overview) {
    gsap.fromTo('#pb-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_form_who_is_this_service_for = document.getElementById('pb-appeals-form-who-is-this-service-for');
  if (pb_appeals_form_who_is_this_service_for) {
    gsap.from('#pb-appeals-form-who-is-this-service-for input, #pb-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_list_required_documents = document.getElementById('pb-appeals-list-required-documents');
  if (pb_appeals_list_required_documents) {
    gsap.from('#pb-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_list_appeal_process = document.getElementById('pb-appeals-list-appeal-process');
  if (pb_appeals_list_appeal_process) {
    gsap.from('#pb-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_timelines_deadlines = document.getElementById('pb-appeals-section-timelines-deadlines');
  if (pb_appeals_section_timelines_deadlines) {
    gsap.fromTo('#pb-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_fees_costs = document.getElementById('pb-appeals-section-fees-costs');
  if (pb_appeals_section_fees_costs) {
    gsap.fromTo('#pb-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_list_risks_common_mistakes = document.getElementById('pb-appeals-list-risks-common-mistakes');
  if (pb_appeals_list_risks_common_mistakes) {
    gsap.from('#pb-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_diy_vs_professional_assistance = document.getElementById('pb-appeals-section-diy-vs-professional-assistance');
  if (pb_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_paraba_specific_context = document.getElementById('pb-appeals-section-paraba-specific-context');
  if (pb_appeals_section_paraba_specific_context) {
    gsap.fromTo('#pb-appeals-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_what_our_clients_say = document.getElementById('pb-appeals-section-what-our-clients-say');
  if (pb_appeals_section_what_our_clients_say) {
    gsap.fromTo('#pb-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_frequently_asked_questions = document.getElementById('pb-appeals-section-frequently-asked-questions');
  if (pb_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#pb-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_international_support = document.getElementById('pb-appeals-section-international-support');
  if (pb_appeals_section_international_support) {
    gsap.fromTo('#pb-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_list_our_credentials = document.getElementById('pb-appeals-list-our-credentials');
  if (pb_appeals_list_our_credentials) {
    gsap.from('#pb-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_list_related_services = document.getElementById('pb-appeals-list-related-services');
  if (pb_appeals_list_related_services) {
    gsap.from('#pb-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_youre_in_good_hands = document.getElementById('pb-appeals-section-youre-in-good-hands');
  if (pb_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#pb-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_appeals_section_21 = document.getElementById('pb-appeals-section-21');
  if (pb_appeals_section_21) {
    gsap.fromTo('#pb-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('pb-consular-form-consular-services-in-brazil-for-citizens');
  if (pb_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#pb-consular-form-consular-services-in-brazil-for-citizens input, #pb-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_list_quick_facts = document.getElementById('pb-consular-list-quick-facts');
  if (pb_consular_list_quick_facts) {
    gsap.from('#pb-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_list_common_challenges_applicants_face = document.getElementById('pb-consular-list-common-challenges-applicants-face');
  if (pb_consular_list_common_challenges_applicants_face) {
    gsap.from('#pb-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_list_how_we_solve_these_challenges = document.getElementById('pb-consular-list-how-we-solve-these-challenges');
  if (pb_consular_list_how_we_solve_these_challenges) {
    gsap.from('#pb-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_service_overview = document.getElementById('pb-consular-section-service-overview');
  if (pb_consular_section_service_overview) {
    gsap.fromTo('#pb-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_form_who_is_this_service_for = document.getElementById('pb-consular-form-who-is-this-service-for');
  if (pb_consular_form_who_is_this_service_for) {
    gsap.from('#pb-consular-form-who-is-this-service-for input, #pb-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_list_required_documents = document.getElementById('pb-consular-list-required-documents');
  if (pb_consular_list_required_documents) {
    gsap.from('#pb-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_list_process = document.getElementById('pb-consular-list-process');
  if (pb_consular_list_process) {
    gsap.from('#pb-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_timelines_deadlines = document.getElementById('pb-consular-section-timelines-deadlines');
  if (pb_consular_section_timelines_deadlines) {
    gsap.fromTo('#pb-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_fees_costs = document.getElementById('pb-consular-section-fees-costs');
  if (pb_consular_section_fees_costs) {
    gsap.fromTo('#pb-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_list_risks_common_mistakes = document.getElementById('pb-consular-list-risks-common-mistakes');
  if (pb_consular_list_risks_common_mistakes) {
    gsap.from('#pb-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_diy_vs_professional_assistance = document.getElementById('pb-consular-section-diy-vs-professional-assistance');
  if (pb_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_paraba_specific_context = document.getElementById('pb-consular-section-paraba-specific-context');
  if (pb_consular_section_paraba_specific_context) {
    gsap.fromTo('#pb-consular-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_what_our_clients_say = document.getElementById('pb-consular-section-what-our-clients-say');
  if (pb_consular_section_what_our_clients_say) {
    gsap.fromTo('#pb-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_frequently_asked_questions = document.getElementById('pb-consular-section-frequently-asked-questions');
  if (pb_consular_section_frequently_asked_questions) {
    gsap.fromTo('#pb-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_international_support = document.getElementById('pb-consular-section-international-support');
  if (pb_consular_section_international_support) {
    gsap.fromTo('#pb-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_list_our_credentials = document.getElementById('pb-consular-list-our-credentials');
  if (pb_consular_list_our_credentials) {
    gsap.from('#pb-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_list_related_services = document.getElementById('pb-consular-list-related-services');
  if (pb_consular_list_related_services) {
    gsap.from('#pb-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_youre_in_good_hands = document.getElementById('pb-consular-section-youre-in-good-hands');
  if (pb_consular_section_youre_in_good_hands) {
    gsap.fromTo('#pb-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_consular_section_21 = document.getElementById('pb-consular-section-21');
  if (pb_consular_section_21) {
    gsap.fromTo('#pb-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('pb-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (pb_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#pb-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #pb-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_list_quick_facts = document.getElementById('pb-criminalrecords-list-quick-facts');
  if (pb_criminalrecords_list_quick_facts) {
    gsap.from('#pb-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_list_common_challenges_applicants_face = document.getElementById('pb-criminalrecords-list-common-challenges-applicants-face');
  if (pb_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#pb-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('pb-criminalrecords-list-how-we-solve-these-challenges');
  if (pb_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#pb-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_service_overview = document.getElementById('pb-criminalrecords-section-service-overview');
  if (pb_criminalrecords_section_service_overview) {
    gsap.fromTo('#pb-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_form_who_is_this_service_for = document.getElementById('pb-criminalrecords-form-who-is-this-service-for');
  if (pb_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#pb-criminalrecords-form-who-is-this-service-for input, #pb-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_list_required_documents = document.getElementById('pb-criminalrecords-list-required-documents');
  if (pb_criminalrecords_list_required_documents) {
    gsap.from('#pb-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_list_process = document.getElementById('pb-criminalrecords-list-process');
  if (pb_criminalrecords_list_process) {
    gsap.from('#pb-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_timelines_deadlines = document.getElementById('pb-criminalrecords-section-timelines-deadlines');
  if (pb_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#pb-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_fees_costs = document.getElementById('pb-criminalrecords-section-fees-costs');
  if (pb_criminalrecords_section_fees_costs) {
    gsap.fromTo('#pb-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_list_risks_common_mistakes = document.getElementById('pb-criminalrecords-list-risks-common-mistakes');
  if (pb_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#pb-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('pb-criminalrecords-section-diy-vs-professional-assistance');
  if (pb_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_paraba_specific_context = document.getElementById('pb-criminalrecords-section-paraba-specific-context');
  if (pb_criminalrecords_section_paraba_specific_context) {
    gsap.fromTo('#pb-criminalrecords-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_what_our_clients_say = document.getElementById('pb-criminalrecords-section-what-our-clients-say');
  if (pb_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#pb-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_frequently_asked_questions = document.getElementById('pb-criminalrecords-section-frequently-asked-questions');
  if (pb_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#pb-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_international_support = document.getElementById('pb-criminalrecords-section-international-support');
  if (pb_criminalrecords_section_international_support) {
    gsap.fromTo('#pb-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_list_our_credentials = document.getElementById('pb-criminalrecords-list-our-credentials');
  if (pb_criminalrecords_list_our_credentials) {
    gsap.from('#pb-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_list_related_services = document.getElementById('pb-criminalrecords-list-related-services');
  if (pb_criminalrecords_list_related_services) {
    gsap.from('#pb-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_youre_in_good_hands = document.getElementById('pb-criminalrecords-section-youre-in-good-hands');
  if (pb_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#pb-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_criminalrecords_section_21 = document.getElementById('pb-criminalrecords-section-21');
  if (pb_criminalrecords_section_21) {
    gsap.fromTo('#pb-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_form_extradition_assistance_in_brazil = document.getElementById('pb-extradition-form-extradition-assistance-in-brazil');
  if (pb_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#pb-extradition-form-extradition-assistance-in-brazil input, #pb-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_list_quick_facts = document.getElementById('pb-extradition-list-quick-facts');
  if (pb_extradition_list_quick_facts) {
    gsap.from('#pb-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_list_common_challenges_applicants_face = document.getElementById('pb-extradition-list-common-challenges-applicants-face');
  if (pb_extradition_list_common_challenges_applicants_face) {
    gsap.from('#pb-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_list_how_we_solve_these_challenges = document.getElementById('pb-extradition-list-how-we-solve-these-challenges');
  if (pb_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#pb-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_service_overview = document.getElementById('pb-extradition-section-service-overview');
  if (pb_extradition_section_service_overview) {
    gsap.fromTo('#pb-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_form_who_is_this_service_for = document.getElementById('pb-extradition-form-who-is-this-service-for');
  if (pb_extradition_form_who_is_this_service_for) {
    gsap.from('#pb-extradition-form-who-is-this-service-for input, #pb-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_list_required_documents = document.getElementById('pb-extradition-list-required-documents');
  if (pb_extradition_list_required_documents) {
    gsap.from('#pb-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_list_process = document.getElementById('pb-extradition-list-process');
  if (pb_extradition_list_process) {
    gsap.from('#pb-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_timelines_deadlines = document.getElementById('pb-extradition-section-timelines-deadlines');
  if (pb_extradition_section_timelines_deadlines) {
    gsap.fromTo('#pb-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_fees_costs = document.getElementById('pb-extradition-section-fees-costs');
  if (pb_extradition_section_fees_costs) {
    gsap.fromTo('#pb-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_list_risks_common_mistakes = document.getElementById('pb-extradition-list-risks-common-mistakes');
  if (pb_extradition_list_risks_common_mistakes) {
    gsap.from('#pb-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_diy_vs_professional_assistance = document.getElementById('pb-extradition-section-diy-vs-professional-assistance');
  if (pb_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_paraba_specific_context = document.getElementById('pb-extradition-section-paraba-specific-context');
  if (pb_extradition_section_paraba_specific_context) {
    gsap.fromTo('#pb-extradition-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_what_our_clients_say = document.getElementById('pb-extradition-section-what-our-clients-say');
  if (pb_extradition_section_what_our_clients_say) {
    gsap.fromTo('#pb-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_frequently_asked_questions = document.getElementById('pb-extradition-section-frequently-asked-questions');
  if (pb_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#pb-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_international_support = document.getElementById('pb-extradition-section-international-support');
  if (pb_extradition_section_international_support) {
    gsap.fromTo('#pb-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_list_our_credentials = document.getElementById('pb-extradition-list-our-credentials');
  if (pb_extradition_list_our_credentials) {
    gsap.from('#pb-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_list_related_services = document.getElementById('pb-extradition-list-related-services');
  if (pb_extradition_list_related_services) {
    gsap.from('#pb-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_youre_in_good_hands = document.getElementById('pb-extradition-section-youre-in-good-hands');
  if (pb_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#pb-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_extradition_section_21 = document.getElementById('pb-extradition-section-21');
  if (pb_extradition_section_21) {
    gsap.fromTo('#pb-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_form_discover_the_north_amazon_and_beyond = document.getElementById('pb-north-form-discover-the-north-amazon-and-beyond');
  if (pb_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#pb-north-form-discover-the-north-amazon-and-beyond input, #pb-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_list_quick_facts = document.getElementById('pb-north-list-quick-facts');
  if (pb_north_list_quick_facts) {
    gsap.from('#pb-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_list_common_challenges_applicants_face = document.getElementById('pb-north-list-common-challenges-applicants-face');
  if (pb_north_list_common_challenges_applicants_face) {
    gsap.from('#pb-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_list_how_we_solve_these_challenges = document.getElementById('pb-north-list-how-we-solve-these-challenges');
  if (pb_north_list_how_we_solve_these_challenges) {
    gsap.from('#pb-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_trip_overview = document.getElementById('pb-north-section-trip-overview');
  if (pb_north_section_trip_overview) {
    gsap.fromTo('#pb-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_form_who_is_this_trip_for = document.getElementById('pb-north-form-who-is-this-trip-for');
  if (pb_north_form_who_is_this_trip_for) {
    gsap.from('#pb-north-form-who-is-this-trip-for input, #pb-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_list_required_documents = document.getElementById('pb-north-list-required-documents');
  if (pb_north_list_required_documents) {
    gsap.from('#pb-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_list_booking_process = document.getElementById('pb-north-list-booking-process');
  if (pb_north_list_booking_process) {
    gsap.from('#pb-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_timelines_deadlines = document.getElementById('pb-north-section-timelines-deadlines');
  if (pb_north_section_timelines_deadlines) {
    gsap.fromTo('#pb-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_fees_costs = document.getElementById('pb-north-section-fees-costs');
  if (pb_north_section_fees_costs) {
    gsap.fromTo('#pb-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_list_risks_common_mistakes = document.getElementById('pb-north-list-risks-common-mistakes');
  if (pb_north_list_risks_common_mistakes) {
    gsap.from('#pb-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_diy_vs_professional_assistance = document.getElementById('pb-north-section-diy-vs-professional-assistance');
  if (pb_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_paraba_specific_context = document.getElementById('pb-north-section-paraba-specific-context');
  if (pb_north_section_paraba_specific_context) {
    gsap.fromTo('#pb-north-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_what_our_clients_say = document.getElementById('pb-north-section-what-our-clients-say');
  if (pb_north_section_what_our_clients_say) {
    gsap.fromTo('#pb-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_frequently_asked_questions = document.getElementById('pb-north-section-frequently-asked-questions');
  if (pb_north_section_frequently_asked_questions) {
    gsap.fromTo('#pb-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_international_support = document.getElementById('pb-north-section-international-support');
  if (pb_north_section_international_support) {
    gsap.fromTo('#pb-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_list_our_credentials = document.getElementById('pb-north-list-our-credentials');
  if (pb_north_list_our_credentials) {
    gsap.from('#pb-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_list_related_services = document.getElementById('pb-north-list-related-services');
  if (pb_north_list_related_services) {
    gsap.from('#pb-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_youre_in_good_hands = document.getElementById('pb-north-section-youre-in-good-hands');
  if (pb_north_section_youre_in_good_hands) {
    gsap.fromTo('#pb-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_north_section_21 = document.getElementById('pb-north-section-21');
  if (pb_north_section_21) {
    gsap.fromTo('#pb-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('pb-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (pb_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#pb-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #pb-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_list_quick_facts = document.getElementById('pb-centralwest-list-quick-facts');
  if (pb_centralwest_list_quick_facts) {
    gsap.from('#pb-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_list_common_challenges_applicants_face = document.getElementById('pb-centralwest-list-common-challenges-applicants-face');
  if (pb_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#pb-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_list_how_we_solve_these_challenges = document.getElementById('pb-centralwest-list-how-we-solve-these-challenges');
  if (pb_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#pb-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_trip_overview = document.getElementById('pb-centralwest-section-trip-overview');
  if (pb_centralwest_section_trip_overview) {
    gsap.fromTo('#pb-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_form_who_is_this_trip_for = document.getElementById('pb-centralwest-form-who-is-this-trip-for');
  if (pb_centralwest_form_who_is_this_trip_for) {
    gsap.from('#pb-centralwest-form-who-is-this-trip-for input, #pb-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_list_required_documents = document.getElementById('pb-centralwest-list-required-documents');
  if (pb_centralwest_list_required_documents) {
    gsap.from('#pb-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_list_booking_process = document.getElementById('pb-centralwest-list-booking-process');
  if (pb_centralwest_list_booking_process) {
    gsap.from('#pb-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_timelines_deadlines = document.getElementById('pb-centralwest-section-timelines-deadlines');
  if (pb_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#pb-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_fees_costs = document.getElementById('pb-centralwest-section-fees-costs');
  if (pb_centralwest_section_fees_costs) {
    gsap.fromTo('#pb-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_list_risks_common_mistakes = document.getElementById('pb-centralwest-list-risks-common-mistakes');
  if (pb_centralwest_list_risks_common_mistakes) {
    gsap.from('#pb-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_diy_vs_professional_assistance = document.getElementById('pb-centralwest-section-diy-vs-professional-assistance');
  if (pb_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_paraba_specific_context = document.getElementById('pb-centralwest-section-paraba-specific-context');
  if (pb_centralwest_section_paraba_specific_context) {
    gsap.fromTo('#pb-centralwest-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_what_our_clients_say = document.getElementById('pb-centralwest-section-what-our-clients-say');
  if (pb_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#pb-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_frequently_asked_questions = document.getElementById('pb-centralwest-section-frequently-asked-questions');
  if (pb_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#pb-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_international_support = document.getElementById('pb-centralwest-section-international-support');
  if (pb_centralwest_section_international_support) {
    gsap.fromTo('#pb-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_list_our_credentials = document.getElementById('pb-centralwest-list-our-credentials');
  if (pb_centralwest_list_our_credentials) {
    gsap.from('#pb-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_list_related_services = document.getElementById('pb-centralwest-list-related-services');
  if (pb_centralwest_list_related_services) {
    gsap.from('#pb-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_youre_in_good_hands = document.getElementById('pb-centralwest-section-youre-in-good-hands');
  if (pb_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#pb-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_centralwest_section_21 = document.getElementById('pb-centralwest-section-21');
  if (pb_centralwest_section_21) {
    gsap.fromTo('#pb-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('pb-southeast-form-dynamic-southeast-cities-and-history');
  if (pb_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#pb-southeast-form-dynamic-southeast-cities-and-history input, #pb-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_list_quick_facts = document.getElementById('pb-southeast-list-quick-facts');
  if (pb_southeast_list_quick_facts) {
    gsap.from('#pb-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_list_common_challenges_applicants_face = document.getElementById('pb-southeast-list-common-challenges-applicants-face');
  if (pb_southeast_list_common_challenges_applicants_face) {
    gsap.from('#pb-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_list_how_we_solve_these_challenges = document.getElementById('pb-southeast-list-how-we-solve-these-challenges');
  if (pb_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#pb-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_trip_overview = document.getElementById('pb-southeast-section-trip-overview');
  if (pb_southeast_section_trip_overview) {
    gsap.fromTo('#pb-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_form_who_is_this_trip_for = document.getElementById('pb-southeast-form-who-is-this-trip-for');
  if (pb_southeast_form_who_is_this_trip_for) {
    gsap.from('#pb-southeast-form-who-is-this-trip-for input, #pb-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_list_required_documents = document.getElementById('pb-southeast-list-required-documents');
  if (pb_southeast_list_required_documents) {
    gsap.from('#pb-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_list_booking_process = document.getElementById('pb-southeast-list-booking-process');
  if (pb_southeast_list_booking_process) {
    gsap.from('#pb-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_timelines_deadlines = document.getElementById('pb-southeast-section-timelines-deadlines');
  if (pb_southeast_section_timelines_deadlines) {
    gsap.fromTo('#pb-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_fees_costs = document.getElementById('pb-southeast-section-fees-costs');
  if (pb_southeast_section_fees_costs) {
    gsap.fromTo('#pb-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_list_risks_common_mistakes = document.getElementById('pb-southeast-list-risks-common-mistakes');
  if (pb_southeast_list_risks_common_mistakes) {
    gsap.from('#pb-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_diy_vs_professional_assistance = document.getElementById('pb-southeast-section-diy-vs-professional-assistance');
  if (pb_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_paraba_specific_context = document.getElementById('pb-southeast-section-paraba-specific-context');
  if (pb_southeast_section_paraba_specific_context) {
    gsap.fromTo('#pb-southeast-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_what_our_clients_say = document.getElementById('pb-southeast-section-what-our-clients-say');
  if (pb_southeast_section_what_our_clients_say) {
    gsap.fromTo('#pb-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_frequently_asked_questions = document.getElementById('pb-southeast-section-frequently-asked-questions');
  if (pb_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#pb-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_international_support = document.getElementById('pb-southeast-section-international-support');
  if (pb_southeast_section_international_support) {
    gsap.fromTo('#pb-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_list_our_credentials = document.getElementById('pb-southeast-list-our-credentials');
  if (pb_southeast_list_our_credentials) {
    gsap.from('#pb-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_list_related_services = document.getElementById('pb-southeast-list-related-services');
  if (pb_southeast_list_related_services) {
    gsap.from('#pb-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_youre_in_good_hands = document.getElementById('pb-southeast-section-youre-in-good-hands');
  if (pb_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#pb-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_southeast_section_21 = document.getElementById('pb-southeast-section-21');
  if (pb_southeast_section_21) {
    gsap.fromTo('#pb-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('pb-northeast-form-vibrant-northeast-beaches-and-culture');
  if (pb_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#pb-northeast-form-vibrant-northeast-beaches-and-culture input, #pb-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_list_quick_facts = document.getElementById('pb-northeast-list-quick-facts');
  if (pb_northeast_list_quick_facts) {
    gsap.from('#pb-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_list_common_challenges_applicants_face = document.getElementById('pb-northeast-list-common-challenges-applicants-face');
  if (pb_northeast_list_common_challenges_applicants_face) {
    gsap.from('#pb-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_list_how_we_solve_these_challenges = document.getElementById('pb-northeast-list-how-we-solve-these-challenges');
  if (pb_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#pb-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_trip_overview = document.getElementById('pb-northeast-section-trip-overview');
  if (pb_northeast_section_trip_overview) {
    gsap.fromTo('#pb-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_form_who_is_this_trip_for = document.getElementById('pb-northeast-form-who-is-this-trip-for');
  if (pb_northeast_form_who_is_this_trip_for) {
    gsap.from('#pb-northeast-form-who-is-this-trip-for input, #pb-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_list_required_documents = document.getElementById('pb-northeast-list-required-documents');
  if (pb_northeast_list_required_documents) {
    gsap.from('#pb-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_list_booking_process = document.getElementById('pb-northeast-list-booking-process');
  if (pb_northeast_list_booking_process) {
    gsap.from('#pb-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_timelines_deadlines = document.getElementById('pb-northeast-section-timelines-deadlines');
  if (pb_northeast_section_timelines_deadlines) {
    gsap.fromTo('#pb-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_fees_costs = document.getElementById('pb-northeast-section-fees-costs');
  if (pb_northeast_section_fees_costs) {
    gsap.fromTo('#pb-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_list_risks_common_mistakes = document.getElementById('pb-northeast-list-risks-common-mistakes');
  if (pb_northeast_list_risks_common_mistakes) {
    gsap.from('#pb-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_diy_vs_professional_assistance = document.getElementById('pb-northeast-section-diy-vs-professional-assistance');
  if (pb_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_paraba_specific_context = document.getElementById('pb-northeast-section-paraba-specific-context');
  if (pb_northeast_section_paraba_specific_context) {
    gsap.fromTo('#pb-northeast-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_what_our_clients_say = document.getElementById('pb-northeast-section-what-our-clients-say');
  if (pb_northeast_section_what_our_clients_say) {
    gsap.fromTo('#pb-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_frequently_asked_questions = document.getElementById('pb-northeast-section-frequently-asked-questions');
  if (pb_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#pb-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_international_support = document.getElementById('pb-northeast-section-international-support');
  if (pb_northeast_section_international_support) {
    gsap.fromTo('#pb-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_list_our_credentials = document.getElementById('pb-northeast-list-our-credentials');
  if (pb_northeast_list_our_credentials) {
    gsap.from('#pb-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_list_related_services = document.getElementById('pb-northeast-list-related-services');
  if (pb_northeast_list_related_services) {
    gsap.from('#pb-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_youre_in_good_hands = document.getElementById('pb-northeast-section-youre-in-good-hands');
  if (pb_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#pb-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_northeast_section_21 = document.getElementById('pb-northeast-section-21');
  if (pb_northeast_section_21) {
    gsap.fromTo('#pb-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_form_charming_south_wine_and_gauchos = document.getElementById('pb-south-form-charming-south-wine-and-gauchos');
  if (pb_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#pb-south-form-charming-south-wine-and-gauchos input, #pb-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_list_quick_facts = document.getElementById('pb-south-list-quick-facts');
  if (pb_south_list_quick_facts) {
    gsap.from('#pb-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_list_common_challenges_applicants_face = document.getElementById('pb-south-list-common-challenges-applicants-face');
  if (pb_south_list_common_challenges_applicants_face) {
    gsap.from('#pb-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_list_how_we_solve_these_challenges = document.getElementById('pb-south-list-how-we-solve-these-challenges');
  if (pb_south_list_how_we_solve_these_challenges) {
    gsap.from('#pb-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_trip_overview = document.getElementById('pb-south-section-trip-overview');
  if (pb_south_section_trip_overview) {
    gsap.fromTo('#pb-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_form_who_is_this_trip_for = document.getElementById('pb-south-form-who-is-this-trip-for');
  if (pb_south_form_who_is_this_trip_for) {
    gsap.from('#pb-south-form-who-is-this-trip-for input, #pb-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_list_required_documents = document.getElementById('pb-south-list-required-documents');
  if (pb_south_list_required_documents) {
    gsap.from('#pb-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_list_booking_process = document.getElementById('pb-south-list-booking-process');
  if (pb_south_list_booking_process) {
    gsap.from('#pb-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_timelines_deadlines = document.getElementById('pb-south-section-timelines-deadlines');
  if (pb_south_section_timelines_deadlines) {
    gsap.fromTo('#pb-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_fees_costs = document.getElementById('pb-south-section-fees-costs');
  if (pb_south_section_fees_costs) {
    gsap.fromTo('#pb-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_list_risks_common_mistakes = document.getElementById('pb-south-list-risks-common-mistakes');
  if (pb_south_list_risks_common_mistakes) {
    gsap.from('#pb-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_diy_vs_professional_assistance = document.getElementById('pb-south-section-diy-vs-professional-assistance');
  if (pb_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pb-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_paraba_specific_context = document.getElementById('pb-south-section-paraba-specific-context');
  if (pb_south_section_paraba_specific_context) {
    gsap.fromTo('#pb-south-section-paraba-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_what_our_clients_say = document.getElementById('pb-south-section-what-our-clients-say');
  if (pb_south_section_what_our_clients_say) {
    gsap.fromTo('#pb-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_frequently_asked_questions = document.getElementById('pb-south-section-frequently-asked-questions');
  if (pb_south_section_frequently_asked_questions) {
    gsap.fromTo('#pb-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_international_support = document.getElementById('pb-south-section-international-support');
  if (pb_south_section_international_support) {
    gsap.fromTo('#pb-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_list_our_credentials = document.getElementById('pb-south-list-our-credentials');
  if (pb_south_list_our_credentials) {
    gsap.from('#pb-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_list_related_services = document.getElementById('pb-south-list-related-services');
  if (pb_south_list_related_services) {
    gsap.from('#pb-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_youre_in_good_hands = document.getElementById('pb-south-section-youre-in-good-hands');
  if (pb_south_section_youre_in_good_hands) {
    gsap.fromTo('#pb-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

  const pb_south_section_21 = document.getElementById('pb-south-section-21');
  if (pb_south_section_21) {
    gsap.fromTo('#pb-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.out'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});

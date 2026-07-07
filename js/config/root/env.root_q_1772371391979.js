const root = {
  root: {
    featuresFlag: {
      push_notifications: false,
      altcha: true,
      showPrints: true,
      showArPrint: true,
      showEnPrint: true,
      showContractPrint: true,
      showCancelPrint: true,
      showEfaaSection: false,
    },
    siteKeyCaptcha: '6LfotGYqAAAAAPSp09_nsaQQ1lmJ0PdHcVH4qRtK',
    isDevelopment: false,
    auth: {
      authority: 'https://www.saudibusiness.gov.sa',
    },
    apis: {
      ip: {
        gwId: '8b907aa5799863128483d1d4121b0930',
      },
      sc: {
        api: './servicecatalog',
      },
      notifications: {
        api: './notification',
      },
    },
    links: {
      ip: './',
      qr: './',
      qrCreate: 'https://qr-create.saudibusiness.gov.sa',
      authorizations: 'https://delegation.saudibusiness.gov.sa',
      privacyPolicy: './PrivacyPolicy.html',
      termsAndConditions: './AcceptableUsePolicy.html',
      paymentGateway: './',
      estUpdateCrOwner: 'estupdownerinfo.saudibusiness.gov.sa',
      reserveTradename: 'https://rsvtnames.saudibusiness.gov.sa',
      survey: './survey',
      topNav: {
        Home: { url: 'https://e.business.sa', public: true },
        'My Requests': { url: './requests', public: false },
        'Business Portal': { url: 'https://business.sa', public: true },
        'Contact us': { url: './', public: true },
      },
      business_sa: {
        // contactUs: './',
        privacy: './',
        terms: './',
        sitemap: './',
        faqs: './',
      },
    },
  },
};

window.env = { ...window.env, root };
export default root;

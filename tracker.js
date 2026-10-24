// Load Supabase script dynamically
(function loadTrackingScript() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  script.onload = () => {
    // Replace with your actual Supabase details
    const SUPABASE_URL = "https://uabkzugkbpbasffinktr.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_s9p-yrBkrsi3_qVJ1P-6-w_PZnB3Cc_";
    
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Silently log visit
    supabaseClient.from('page_views').insert([
      { 
        page_path: window.location.pathname,
        user_agent: navigator.userAgent
      }
    ]).then(({ error }) => {
      if (error) console.error("Log error:", error);
    });
  };
  document.head.appendChild(script);
})();
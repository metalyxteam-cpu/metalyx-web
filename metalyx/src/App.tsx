import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Navbar, FloatingWhatsApp } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Partners from './pages/Partners';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import Terms from './pages/legal/Terms';
import RefundPolicy from './pages/legal/RefundPolicy';
import CancellationPolicy from './pages/legal/CancellationPolicy';
import CookiesPolicy from './pages/legal/CookiesPolicy';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function ScrollToTop() {
  const [pathname] = window.location.pathname;
  // wouter doesn't have a built-in scroll restoration, this is a simple implementation
  // Actually, wouter's useLocation is better, but window works as well if we just want it to trigger on render
  window.scrollTo(0, 0);
  return null;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/industries" component={Industries} />
      <Route path="/projects" component={Projects} />
      <Route path="/partners" component={Partners} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/cancellation-policy" component={CancellationPolicy} />
      <Route path="/cookies-policy" component={CookiesPolicy} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Shell>
          <Router />
        </Shell>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
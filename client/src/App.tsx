import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/work"} component={Work} />
        <Route path={"/about"} component={About} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/service/:service"} component={ServiceDetail} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

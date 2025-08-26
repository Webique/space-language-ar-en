import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-dark via-primary-dark to-luxury-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold via-transparent to-primary"></div>
      </div>
      
      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-luxury-gold to-primary bg-clip-text mb-4 font-montserrat">
            404
          </h1>
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Page Not Found
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed font-poppins">
            The page you're looking for doesn't exist or has been moved to a new location.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
          
          <Button
            onClick={() => window.location.href = '/'}
            size="lg"
            className="btn-luxury px-8 py-4 text-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-luxury-gold rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-luxury-gold rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default NotFound;

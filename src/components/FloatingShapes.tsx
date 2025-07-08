
export const FloatingShapes = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      
      {/* Floating squares */}
      <div className="absolute top-60 right-10 w-5 h-5 bg-primary/25 rotate-45 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
      <div className="absolute bottom-20 right-32 w-4 h-4 bg-primary/35 rotate-12 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />
      
      {/* Floating lines */}
      <div className="absolute top-32 left-32 w-12 h-0.5 bg-gradient-to-r from-primary/40 to-transparent rotate-45 animate-pulse" style={{ animationDelay: '0.8s' }} />
      <div className="absolute bottom-40 right-16 w-16 h-0.5 bg-gradient-to-l from-primary/30 to-transparent -rotate-12 animate-pulse" style={{ animationDelay: '2.2s' }} />
    </div>
  );
};

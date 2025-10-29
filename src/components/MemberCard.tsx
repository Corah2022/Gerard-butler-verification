import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Calendar, Crown, Award, Sparkles } from "lucide-react";
import memberPhoto from "@/assets/sarah-whitelock.jpg";

interface MemberCardProps {
  name: string;
  membershipEnd: string;
  membershipStart: string;
  status: "active" | "expired";
}

const MemberCard = ({ name, membershipEnd, membershipStart, status }: MemberCardProps) => {
  const endDate = new Date(membershipEnd);
  const startDate = new Date(membershipStart);
  const currentDate = new Date();
  const isExpired = currentDate > endDate;
  
  const membershipId = `GB-${name.split(' ').map(n => n[0]).join('')}-${startDate.getFullYear()}`;
  
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-[var(--shadow-elegant)] bg-gradient-to-br from-card via-card to-secondary/20 border-2">
      {/* Premium Header Strip */}
      <div className="h-1.5 sm:h-2 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer" />
      
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Official Badge with Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Badge className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg border-0">
            <ShieldCheck className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" />
            Official Verification Portal
          </Badge>
        </div>
        
        {/* Title with Decorative Elements */}
        <div className="text-center mb-4 sm:mb-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-accent/5 rounded-full blur-3xl" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 relative px-2">
            Member Verification
          </h1>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-muted-foreground mb-1">
            <Crown className="w-3 sm:w-4 h-3 sm:h-4 text-accent" />
            <p className="text-xs sm:text-sm font-medium">
              Gerard Butler Fan Club
            </p>
            <Crown className="w-3 sm:w-4 h-3 sm:h-4 text-accent" />
          </div>
          <p className="text-xs text-muted-foreground px-2">
            Official membership verification certificate
          </p>
        </div>
        
        {/* Verification Badge with Enhanced Glow */}
        <div className="flex justify-center my-6 sm:my-8 md:my-10">
          <div className="relative animate-float">
            <div className={`absolute inset-0 rounded-full blur-2xl sm:blur-3xl opacity-30 animate-pulse ${
              isExpired ? 'bg-destructive' : 'bg-[hsl(var(--verified))]'
            }`} 
                 style={{ boxShadow: isExpired ? 'none' : 'var(--shadow-glow)' }} />
            <div className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-2xl border-3 sm:border-4 border-card ${
              isExpired 
                ? 'bg-gradient-to-br from-destructive to-destructive/70' 
                : 'bg-gradient-to-br from-[hsl(var(--verified))] to-[hsl(142_76%_35%)]'
            }`}>
              <CheckCircle2 className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 ${
                isExpired ? 'text-destructive-foreground' : 'text-[hsl(var(--verified-foreground))]'
              }`} strokeWidth={2.5} />
            </div>
            <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-card ${
              isExpired ? 'bg-destructive' : 'bg-accent'
            }`}>
              <Award className={`w-4 h-4 sm:w-5 sm:h-5 ${isExpired ? 'text-destructive-foreground' : 'text-accent-foreground'}`} />
            </div>
          </div>
        </div>
        
        {/* Status Card */}
        <div className={`mb-4 sm:mb-6 md:mb-8 py-3 sm:py-4 px-4 sm:px-6 rounded-xl border backdrop-blur-sm ${
          isExpired 
            ? 'bg-gradient-to-br from-destructive/20 to-destructive/10 border-destructive/50' 
            : 'bg-gradient-to-br from-secondary/50 to-secondary/30 border-border/50'
        }`}>
          <div className={`flex items-center justify-center gap-1.5 sm:gap-2 font-bold text-base sm:text-lg mb-1.5 sm:mb-2 ${
            isExpired ? 'text-destructive' : 'text-[hsl(var(--verified))]'
          }`}>
            <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-center text-sm sm:text-base">{isExpired ? 'Membership Expired' : 'Verified Active Member'}</span>
            {!isExpired && <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" />}
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="text-center">{isExpired ? 'Expired on' : 'Valid until'} {endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
        
        {/* Member Profile Card */}
        <div className="bg-gradient-to-br from-background to-secondary/20 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 border border-border/50 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
              <img 
                src={memberPhoto} 
                alt={`${name} - Verified Member`}
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full border-3 sm:border-4 border-accent shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent to-accent/80 rounded-full border-2 sm:border-3 border-card shadow-lg flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
                {name}
              </h2>
              <p className="text-primary font-semibold mb-2 sm:mb-3 flex items-center justify-center sm:justify-start gap-2">
                <Crown className="w-3 sm:w-4 h-3 sm:h-4 text-accent" />
                Premium Member
              </p>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-muted-foreground">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span className="font-medium text-foreground">Member Since:</span>
                  </div>
                  <span className="text-center sm:text-left">{startDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-muted-foreground">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Award className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span className="font-medium text-foreground">Member ID:</span>
                  </div>
                  <span className="font-mono text-xs bg-secondary px-2 py-0.5 rounded">{membershipId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
          {[
            { icon: CheckCircle2, label: 'Verified Access' },
            { icon: Crown, label: 'Premium Benefits' },
            { icon: Award, label: 'Exclusive Content' }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-secondary/60 to-secondary/40 rounded-xl p-2.5 sm:p-3 text-center border border-border/30 hover:border-accent/50 transition-all">
              <benefit.icon className="w-4 sm:w-5 h-4 sm:h-5 mx-auto mb-1 sm:mb-1.5 text-accent" />
              <p className="text-xs font-medium text-foreground">{benefit.label}</p>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center pt-4 sm:pt-6 border-t border-border/50">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md mx-auto px-2">
            This official verification certificate confirms active membership status in the Gerard Butler Fan Club. 
            All membership benefits and privileges are valid through the expiration date listed above.
          </p>
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-3 h-3" />
            <span>Digitally Verified & Secured</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MemberCard;

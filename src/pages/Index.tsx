import MemberCard from "@/components/MemberCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <MemberCard 
        name="Sarah Whitelock"
        membershipEnd="2025-11-30"
        membershipStart="2025-10-25"
        status="active"
      />
    </div>
  );
};

export default Index;

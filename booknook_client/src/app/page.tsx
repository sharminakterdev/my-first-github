import BorrowingSteps from "@/components/home/BorrowingSteps";
import HeroSlider from "@/components/home/HeroSlider";
import NewArrivals from "@/components/home/NewArrivals";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <NewArrivals books={[]} />
        <BorrowingSteps />
    </main>
  );
}
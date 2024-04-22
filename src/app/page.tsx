import MainLayout from "@/layouts/mainLayout";
import { metadata } from "./layout";

export default function Home() {
  metadata.title = "PWA | Home";

  return (
    <MainLayout>
      <div>Whats That bro..???!!!</div>
    </MainLayout>
  );
}

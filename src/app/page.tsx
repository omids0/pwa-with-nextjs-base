import { metadata } from "./layout";
import MainLayout from "./layouts/mainLayout";

export default function Home() {
  metadata.title = "PWA | Home";

  return (
    <MainLayout>
      <div>Whats That bro..???!!!</div>
    </MainLayout>
  );
}

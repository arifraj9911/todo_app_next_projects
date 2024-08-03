import TodoApp from "@/components/TodoApp/TodoApp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#DBEAFE] items-center justify-between p-24">
      <TodoApp></TodoApp>
    </main>
  );
}

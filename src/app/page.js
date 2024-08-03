"use client";

import TodoApp from "@/components/TodoApp/TodoApp";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col bg-[#f2f2f2] items-center justify-between p-24">
        <TodoApp></TodoApp>
      </main>
    </Provider>
  );
}

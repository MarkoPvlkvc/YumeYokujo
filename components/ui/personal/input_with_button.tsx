import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

export function InputWithButton() {
  return (
    <div className="mt-5 flex w-full max-w-sm items-center gap-x-2">
      <input
        type="email"
        placeholder="Enter your email..."
        className="rounded-md border-2 border-white/35 bg-transparent py-2 pl-6 focus:outline-none"
      />
      <Button
        className="h-full border-[2px] border-transparent bg-white text-lightBlue hover:border-white/35 hover:bg-transparent hover:text-white"
        type="submit"
      >
        <SendHorizonal />
      </Button>
    </div>
  );
}

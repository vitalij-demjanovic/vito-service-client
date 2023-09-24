import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function MyDialog() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

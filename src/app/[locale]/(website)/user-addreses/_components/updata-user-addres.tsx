"use client";
import { useState } from "react";
import { PenLine } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import FormAddUserAddres from "./form-add-user";
type Props = {
  address: {
    _id: string;
    username: string;
    street: string;
    city: string;
    phone: string;
    lat: string;
    long: string;
  };
};

export default function EditButton({ address }: Props) {
  // const { Updata } = useUpdataUser(address);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <PenLine />
        </button>
      </DialogTrigger>

      <DialogContent>
        <FormAddUserAddres datas={address} onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

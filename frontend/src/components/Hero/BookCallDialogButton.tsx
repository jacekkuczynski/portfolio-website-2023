"use client";

import { CalendarPlus, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button/Button";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

import { ChangeEvent, useState } from "react";
import { DayPicker } from "react-day-picker";

const BookCallDialogButton = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [contactInfo, setContactInfo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setContactInfo(e.target.value);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <span className="flex items-center justify-center gap-[0.625rem] sm:gap-5 transition-colors ease-in-out px-buttonXSmall md:px-buttonXMedium lg:px-buttonXLarge py-buttonYSmall md:py-buttonYMedium lg:py-buttonYLarge text-contentSmall md:text-contentMedium lg:text-contentLarge bg-cyan hover:bg-cyanLight text-blackDimmed font-bold ">
          <CalendarPlus strokeWidth={1.5} width={24} height={24} />
          Book a call
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="backdrop-blur-sm	z-40 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] z-50 left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-grey1 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none text-whiteDimmed">
          <Dialog.Title className="font-bold font-roboto text-titleSmall">
            Book a call
          </Dialog.Title>
          <Dialog.Description className="leading-normal text-leadingSmall">
            Please leave your phone number or email, and I will get back to you.
          </Dialog.Description>
          <div className="flex flex-col items-start justify-center my-5">
            <fieldset className="flex items-center justify-center gap-5 w-72">
              <label
                className="w-20 text-right text-contentSmall"
                htmlFor="contactInfo"
              >
                phone/email
              </label>
              <input
                onChange={handleChange}
                className=" inline-flex h-5 p-4 w-full flex-1 items-center justify-center text-contentSmall leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] text-blackDimmed"
                id="contactInfo"
              />
            </fieldset>
            <div className="w-72 h-72">
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                className="text-whiteDimmed"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Dialog.Close asChild>
              <div className="flex items-center gap-5">
                <span className="text-contentSmall">
                  I will contact you at {selected?.toDateString()}
                </span>
                <button className="inline-flex items-center justify-center bg-cyan hover:bg-cyanLight px-buttonXSmall py-buttonYSmall font-roboto text-blackDimmed">
                  Confirm
                </button>
              </div>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className="inline-flex items-center justify-center bg-cyan hover:bg-cyanLight px-buttonXSmall py-buttonYSmall font-roboto text-blackDimmed">
                Confirm
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-whiteDimmed"
              aria-label="Close"
            >
              <X strokeWidth={1.5} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BookCallDialogButton;
